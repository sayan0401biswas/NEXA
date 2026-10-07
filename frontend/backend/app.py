from fastapi import FastAPI

app = FastAPI(
    title="NEXA",
    description="NEXA — Personal AI Voice Assistant",
    version="0.1.0"
)


@app.get("/")
def home():
    return {
        "assistant": "NEXA",
        "status": "online",
        "message": "NEXA Core is running."
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }
