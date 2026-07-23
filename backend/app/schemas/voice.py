from datetime import datetime
from pydantic import BaseModel, Field

class VoiceCreateResponse(BaseModel):
    voice_id: str
    status: str = "processing"

class VoiceRead(BaseModel):
    id: str
    name: str
    language: str
    gender: str | None
    engine: str
    duration: float
    tags: list[str]
    status: str
    created_at: datetime

class VoiceDetail(VoiceRead):
    waveform_preview: list[float]
    is_public: bool

class TTSRequest(BaseModel):
    voice_id: str
    text: str = Field(min_length=1, max_length=5000)
    language: str = "en"
    speed: float = Field(default=1.0, ge=0.5, le=2.0)
    emotion: str = "neutral"

class TTSResponse(BaseModel):
    audio_url: str
    engine: str
    job_id: str
