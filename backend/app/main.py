from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from app.api import admin, tts, voices
from app.core.config import get_settings
from app.core.database import Base, engine
from app.models import entities  # noqa: F401

settings = get_settings()
Base.metadata.create_all(bind=engine)

app = FastAPI(title=settings.app_name, version="0.1.0", description="Open-source Voice Hub for cloning, cataloging, and generating speech.")
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])
app.include_router(voices.router)
app.include_router(tts.router)
app.include_router(admin.router)
app.mount("/media", StaticFiles(directory=settings.local_storage_path, check_dir=False), name="media")

@app.get("/health", tags=["system"])
def health():
    return {"status": "ok", "engines": ["coqui_xtts_v2", "openvoice", "styletts2"]}
