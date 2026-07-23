import uuid
from datetime import datetime
from sqlalchemy import Boolean, DateTime, Float, ForeignKey, Integer, JSON, LargeBinary, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship
from app.core.database import Base


def uuid_str() -> str:
    return str(uuid.uuid4())

class User(Base):
    __tablename__ = "users"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=uuid_str)
    email: Mapped[str] = mapped_column(String(320), unique=True, index=True)
    hashed_password: Mapped[str] = mapped_column(String(255))
    is_admin: Mapped[bool] = mapped_column(Boolean, default=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class Voice(Base):
    __tablename__ = "voices"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=uuid_str)
    owner_id: Mapped[str | None] = mapped_column(ForeignKey("users.id"), nullable=True, index=True)
    name: Mapped[str] = mapped_column(String(160), index=True)
    language: Mapped[str] = mapped_column(String(16), index=True)
    gender: Mapped[str | None] = mapped_column(String(32), nullable=True, index=True)
    engine: Mapped[str] = mapped_column(String(64), index=True)
    status: Mapped[str] = mapped_column(String(32), default="processing", index=True)
    duration: Mapped[float] = mapped_column(Float, default=0)
    tags: Mapped[list[str]] = mapped_column(JSON, default=list)
    is_public: Mapped[bool] = mapped_column(Boolean, default=False)
    waveform_preview: Mapped[list[float]] = mapped_column(JSON, default=list)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)
    audio_files = relationship("AudioFile", cascade="all, delete-orphan")
    embeddings = relationship("Embedding", cascade="all, delete-orphan")

class AudioFile(Base):
    __tablename__ = "audio_files"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=uuid_str)
    voice_id: Mapped[str] = mapped_column(ForeignKey("voices.id"), index=True)
    storage_key: Mapped[str] = mapped_column(String(512))
    content_type: Mapped[str] = mapped_column(String(128))
    size_bytes: Mapped[int] = mapped_column(Integer)
    duration: Mapped[float] = mapped_column(Float, default=0)
    sample_rate: Mapped[int] = mapped_column(Integer, default=0)
    channels: Mapped[int] = mapped_column(Integer, default=0)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class Embedding(Base):
    __tablename__ = "embeddings"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=uuid_str)
    voice_id: Mapped[str] = mapped_column(ForeignKey("voices.id"), index=True)
    engine: Mapped[str] = mapped_column(String(64))
    vector: Mapped[bytes | None] = mapped_column(LargeBinary, nullable=True)
    metadata_json: Mapped[dict] = mapped_column(JSON, default=dict)

class Job(Base):
    __tablename__ = "jobs"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=uuid_str)
    kind: Mapped[str] = mapped_column(String(64), index=True)
    status: Mapped[str] = mapped_column(String(32), default="queued", index=True)
    payload: Mapped[dict] = mapped_column(JSON, default=dict)
    error: Mapped[str | None] = mapped_column(Text, nullable=True)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=datetime.utcnow)

class APIKey(Base):
    __tablename__ = "api_keys"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=uuid_str)
    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"), index=True)
    name: Mapped[str] = mapped_column(String(120))
    key_hash: Mapped[str] = mapped_column(String(255))
    scopes: Mapped[list[str]] = mapped_column(JSON, default=list)

class Permission(Base):
    __tablename__ = "permissions"
    id: Mapped[str] = mapped_column(String, primary_key=True, default=uuid_str)
    user_id: Mapped[str] = mapped_column(ForeignKey("users.id"), index=True)
    resource: Mapped[str] = mapped_column(String(120))
    action: Mapped[str] = mapped_column(String(64))
