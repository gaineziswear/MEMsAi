from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.models.entities import Job, User, Voice

router = APIRouter(prefix="/api/admin", tags=["admin"])

@router.get("/dashboard")
def dashboard(db: Session = Depends(get_db)):
    return {
        "users": db.query(User).count(),
        "voices": db.query(Voice).count(),
        "jobs": db.query(Job).count(),
        "gpu": {"provider": "auto", "devices": []},
        "logs": [],
    }
