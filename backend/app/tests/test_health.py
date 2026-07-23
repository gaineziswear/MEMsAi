from app.engines.registry import registry


def test_registry_lists_engines():
    assert "coqui_xtts_v2" in registry.names()
    assert "openvoice" in registry.names()
    assert "styletts2" in registry.names()
