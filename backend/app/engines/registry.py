from app.engines.base import VoiceEngine
from app.engines.dummy import PlaceholderEngine

class EngineRegistry:
    def __init__(self) -> None:
        self._engines: dict[str, VoiceEngine] = {}

    def register(self, engine: VoiceEngine) -> None:
        self._engines[engine.name] = engine

    def get(self, name: str) -> VoiceEngine:
        return self._engines[name]

    def names(self) -> list[str]:
        return sorted(self._engines)

registry = EngineRegistry()
for engine_name in ("coqui_xtts_v2", "openvoice", "styletts2"):
    registry.register(PlaceholderEngine(engine_name))
