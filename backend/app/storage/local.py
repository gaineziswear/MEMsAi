from pathlib import Path
from uuid import uuid4
from fastapi import UploadFile
from app.core.config import get_settings

class LocalStorage:
    def __init__(self) -> None:
        self.root = Path(get_settings().local_storage_path)
        self.root.mkdir(parents=True, exist_ok=True)

    async def save_upload(self, upload: UploadFile, prefix: str) -> tuple[str, Path, int]:
        suffix = Path(upload.filename or "sample.wav").suffix.lower()
        key = f"{prefix}/{uuid4()}{suffix}"
        path = self.root / key
        path.parent.mkdir(parents=True, exist_ok=True)
        size = 0
        with path.open("wb") as target:
            while chunk := await upload.read(1024 * 1024):
                size += len(chunk)
                target.write(chunk)
        return key, path, size

    def signed_url(self, key: str) -> str:
        return f"/media/{key}"
