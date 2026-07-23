# Voice Hub

Voice Hub is an open-source voice-library platform inspired by commercial voice catalogs. It supports voice sample uploads, voice cloning workflows, searchable voice organization, text-to-speech generation, streaming, admin operations, and modular AI engines.

## Architecture

- **Backend:** FastAPI, Python 3.12, SQLAlchemy, PostgreSQL, Redis, Celery, Pydantic v2.
- **Storage:** MinIO/S3-compatible storage with local fallback.
- **AI engines:** Pluggable engine registry for Coqui XTTS v2, OpenVoice, and StyleTTS2 adapters.
- **Frontend:** Next.js 16, React 19, Tailwind CSS-compatible app shell.
- **Security hooks:** JWT-ready configuration, upload limits, signed URL abstraction, audio validation, rate-limit and virus-scan extension points.

## REST API

- `POST /api/voices` accepts `wav`, `mp3`, `ogg`, and `flac` uploads up to 500 MB and returns `{ "voice_id": "...", "status": "processing" }`.
- `GET /api/voices` lists voices and supports language, gender, tags, engine, and creator search filters.
- `GET /api/voices/{id}` returns voice metadata and waveform preview data.
- `DELETE /api/voices/{id}` deletes a voice and associated records.
- `POST /api/tts` generates speech and returns a generated audio URL.
- `WS /api/tts/stream` streams generated speech chunks over WebSocket.
- `GET /api/admin/dashboard` summarizes users, voices, jobs, GPU data, and logs.

## Development

```bash
docker compose up --build
```

Then open:

- API: http://localhost:8000/docs
- Frontend: http://localhost:3000
- MinIO: http://localhost:9001

## Testing

```bash
pip install -r backend/requirements.txt
pytest backend/app/tests
cd frontend && npm run lint
```

## Extending voice engines

Implement `VoiceEngine` in `backend/app/engines/base.py`, then register it in `backend/app/engines/registry.py`. Engine adapters expose `extract_embedding`, `synthesize`, and optional streaming behavior.
