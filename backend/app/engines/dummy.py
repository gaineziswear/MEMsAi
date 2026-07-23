import wave
from pathlib import Path
from .base import EngineCapabilities, VoiceEngine

class PlaceholderEngine(VoiceEngine):
    def __init__(self, name: str):
        self.name = name
        self.capabilities = EngineCapabilities(languages=["en", "fr", "es", "de"], emotions=["neutral", "happy", "sad"])

    def extract_embedding(self, audio_paths: list[Path]) -> bytes:
        return f"{self.name}:{','.join(p.name for p in audio_paths)}".encode()

    def synthesize(self, *, embedding: bytes | None, text: str, language: str, speed: float, emotion: str, output_path: Path) -> Path:
        output_path.parent.mkdir(parents=True, exist_ok=True)
        sample_rate = 22050
        frames = b"\x00\x00" * int(sample_rate * max(0.25, min(len(text) / 18, 8)))
        with wave.open(str(output_path), "wb") as wav:
            wav.setnchannels(1)
            wav.setsampwidth(2)
            wav.setframerate(sample_rate)
            wav.writeframes(frames)
        return output_path
