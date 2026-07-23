from pathlib import Path
from uuid import uuid4
from fastapi import APIRouter, Depends, HTTPException, WebSocket, WebSocketDisconnect
from sqlalchemy.orm import Session
from app.core.config import get_settings
from app.core.database import get_db
from app.engines.registry import registry
from app.models.entities import Embedding, Job, Voice
from app.schemas.voice import TTSRequest, TTSResponse
from app.storage.local import LocalStorage

router = APIRouter(tags=["tts"])

@router.post("/api/tts", response_model=TTSResponse)
def tts(payload: TTSRequest, db: Session = Depends(get_db)):
    voice = db.get(Voice, payload.voice_id)
    if not voice: raise HTTPException(404, "Voice not found")
    embedding = db.query(Embedding).filter_by(voice_id=voice.id, engine=voice.engine).first()
    key = f"generated/{voice.id}/{uuid4()}.wav"
    output = Path(get_settings().local_storage_path) / key
    registry.get(voice.engine).synthesize(embedding=embedding.vector if embedding else None, text=payload.text, language=payload.language, speed=payload.speed, emotion=payload.emotion, output_path=output)
    job = Job(kind="tts", status="completed", payload=payload.model_dump() | {"output": key})
    db.add(job); db.commit(); db.refresh(job)
    return TTSResponse(audio_url=LocalStorage().signed_url(key), engine=voice.engine, job_id=job.id)

@router.websocket("/api/tts/stream")
async def stream_tts(ws: WebSocket):
    await ws.accept()
    try:
        payload = await ws.receive_json()
        output = Path(get_settings().local_storage_path) / "streams" / f"{uuid4()}.wav"
        async for chunk in registry.get(payload.get("engine", get_settings().default_tts_engine)).stream(embedding=None, text=payload["text"], language=payload.get("language", "en"), speed=float(payload.get("speed", 1.0)), emotion=payload.get("emotion", "neutral"), output_path=output):
            await ws.send_bytes(chunk)
        await ws.close()
    except WebSocketDisconnect:
        return
