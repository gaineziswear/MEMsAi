from celery import Celery
from app.core.config import get_settings

settings = get_settings()
celery_app = Celery("voicehub", broker=settings.redis_url, backend=settings.redis_url)

@celery_app.task(name="voicehub.extract_embedding")
def extract_embedding(voice_id: str) -> dict:
    return {"voice_id": voice_id, "status": "scheduled"}
