from pathlib import Path
from fastapi import HTTPException, UploadFile, status
from app.core.config import get_settings

ALLOWED_EXTENSIONS = {".wav", ".mp3", ".ogg", ".flac"}
ALLOWED_TAGS = {"French", "English", "Male", "Female", "Narrator", "Podcast", "Audiobook", "Commercial", "Character", "Children"}

async def validate_upload(upload: UploadFile) -> None:
    ext = Path(upload.filename or "").suffix.lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(status.HTTP_415_UNSUPPORTED_MEDIA_TYPE, f"Unsupported audio type: {ext}")
    size = int(upload.headers.get("content-length", "0") or 0)
    if size > get_settings().upload_max_bytes:
        raise HTTPException(status.HTTP_413_REQUEST_ENTITY_TOO_LARGE, "Audio sample exceeds 500 MB")

def inspect_audio(path: Path) -> dict:
    # Production hook: run ffprobe/librosa, reject low sample rates, excessive duration, and invalid channels.
    return {"duration": 0.0, "sample_rate": 0, "channels": 0, "waveform_preview": [0.12, 0.4, 0.23, 0.7, 0.33, 0.52]}
