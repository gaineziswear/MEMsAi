from fastapi import APIRouter, Depends, File, Form, HTTPException, UploadFile
from sqlalchemy import select
from sqlalchemy.orm import Session
from app.core.config import get_settings
from app.core.database import get_db
from app.engines.registry import registry
from app.models.entities import AudioFile, Embedding, Job, Voice
from app.schemas.voice import VoiceCreateResponse, VoiceDetail, VoiceRead
from app.services.audio import ALLOWED_TAGS, inspect_audio, validate_upload
from app.storage.local import LocalStorage

router = APIRouter(prefix="/api/voices", tags=["voices"])

@router.post("", response_model=VoiceCreateResponse, status_code=202)
async def create_voice(name: str = Form(...), language: str = Form("en"), gender: str | None = Form(None), engine: str = Form("coqui_xtts_v2"), tags: str = Form(""), files: list[UploadFile] = File(...), db: Session = Depends(get_db)):
    if engine not in registry.names():
        raise HTTPException(400, "Unknown voice engine")
    tag_list = [tag.strip() for tag in tags.split(",") if tag.strip()]
    invalid = [tag for tag in tag_list if tag not in ALLOWED_TAGS]
    if invalid:
        raise HTTPException(400, f"Invalid tags: {invalid}")
    voice = Voice(name=name, language=language, gender=gender, engine=engine, tags=tag_list)
    db.add(voice); db.flush()
    storage = LocalStorage(); paths = []
    total_duration = 0.0; preview = []
    for upload in files:
        await validate_upload(upload)
        key, path, size = await storage.save_upload(upload, f"voices/{voice.id}/samples")
        meta = inspect_audio(path); paths.append(path); total_duration += meta["duration"]; preview = meta["waveform_preview"]
        db.add(AudioFile(voice_id=voice.id, storage_key=key, content_type=upload.content_type or "application/octet-stream", size_bytes=size, duration=meta["duration"], sample_rate=meta["sample_rate"], channels=meta["channels"]))
    embedding = registry.get(engine).extract_embedding(paths)
    db.add(Embedding(voice_id=voice.id, engine=engine, vector=embedding, metadata_json={"samples": len(paths)}))
    db.add(Job(kind="extract_embedding", status="completed", payload={"voice_id": voice.id, "engine": engine}))
    voice.status = "ready"; voice.duration = total_duration; voice.waveform_preview = preview
    db.commit()
    return VoiceCreateResponse(voice_id=voice.id, status="processing")

@router.get("", response_model=list[VoiceRead])
def list_voices(language: str | None = None, gender: str | None = None, tags: str | None = None, engine: str | None = None, creator: str | None = None, db: Session = Depends(get_db)):
    stmt = select(Voice)
    for field, value in ((Voice.language, language), (Voice.gender, gender), (Voice.engine, engine), (Voice.owner_id, creator)):
        if value: stmt = stmt.where(field == value)
    voices = db.scalars(stmt.order_by(Voice.created_at.desc())).all()
    if tags:
        wanted = {tag.strip() for tag in tags.split(",")}
        voices = [voice for voice in voices if wanted.intersection(set(voice.tags or []))]
    return voices

@router.get("/{voice_id}", response_model=VoiceDetail)
def get_voice(voice_id: str, db: Session = Depends(get_db)):
    voice = db.get(Voice, voice_id)
    if not voice: raise HTTPException(404, "Voice not found")
    return voice

@router.delete("/{voice_id}", status_code=204)
def delete_voice(voice_id: str, db: Session = Depends(get_db)):
    voice = db.get(Voice, voice_id)
    if not voice: raise HTTPException(404, "Voice not found")
    db.delete(voice); db.commit()
