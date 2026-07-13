from fastapi import FastAPI

app = FastAPI(
    title="MEMsAI API",
    version="0.1.0"
)


@app.get("/")
def root():
    return {
        "message": "MEMsAI API running",
        "version": "0.1.0"
    }
