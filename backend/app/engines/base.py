from abc import ABC, abstractmethod
from pathlib import Path
from pydantic import BaseModel

class EngineCapabilities(BaseModel):
    languages: list[str]
    emotions: list[str]
    streaming: bool = True

class VoiceEngine(ABC):
    name: str
    capabilities: EngineCapabilities

    @abstractmethod
    def extract_embedding(self, audio_paths: list[Path]) -> bytes:
        raise NotImplementedError

    @abstractmethod
    def synthesize(self, *, embedding: bytes | None, text: str, language: str, speed: float, emotion: str, output_path: Path) -> Path:
        raise NotImplementedError

    async def stream(self, **kwargs):
        output = self.synthesize(**kwargs)
        with open(output, "rb") as audio:
            while chunk := audio.read(64_000):
                yield chunk
