import os
from dataclasses import dataclass
from functools import lru_cache

@dataclass(frozen=True)
class Settings:
    app_name: str = os.getenv("VOICEHUB_APP_NAME", "Voice Hub API")
    environment: str = os.getenv("VOICEHUB_ENVIRONMENT", "development")
    database_url: str = os.getenv("VOICEHUB_DATABASE_URL", "sqlite:///./voicehub.db")
    redis_url: str = os.getenv("VOICEHUB_REDIS_URL", "redis://redis:6379/0")
    jwt_secret: str = os.getenv("VOICEHUB_JWT_SECRET", "change-me")
    jwt_algorithm: str = os.getenv("VOICEHUB_JWT_ALGORITHM", "HS256")
    upload_max_bytes: int = int(os.getenv("VOICEHUB_UPLOAD_MAX_BYTES", str(500 * 1024 * 1024)))
    storage_backend: str = os.getenv("VOICEHUB_STORAGE_BACKEND", "local")
    local_storage_path: str = os.getenv("VOICEHUB_LOCAL_STORAGE_PATH", "./data/storage")
    s3_endpoint_url: str | None = os.getenv("VOICEHUB_S3_ENDPOINT_URL", "http://minio:9000")
    s3_access_key: str = os.getenv("VOICEHUB_S3_ACCESS_KEY", "voicehub")
    s3_secret_key: str = os.getenv("VOICEHUB_S3_SECRET_KEY", "voicehub-secret")
    s3_bucket: str = os.getenv("VOICEHUB_S3_BUCKET", "voicehub")
    default_tts_engine: str = os.getenv("VOICEHUB_DEFAULT_TTS_ENGINE", "coqui_xtts_v2")

@lru_cache
def get_settings() -> Settings:
    return Settings()
