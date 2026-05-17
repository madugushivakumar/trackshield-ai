from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from api.routes.ai_routes import router as ai_router
from websocket.socket_server import initialize_socket
from config.database import connect_database
from config.settings import settings
import uvicorn

# =========================================
# FASTAPI APP
# =========================================
app = FastAPI(
    title="TrackShield AI Engine",
    description="Enterprise AI Threat Detection Engine",
    version="1.0.0"
)

# =========================================
# CORS
# =========================================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# =========================================
# STARTUP EVENT
# =========================================
@app.on_event("startup")
async def startup_event():
    print("Starting TrackShield AI Engine...")
    connect_database()
    initialize_socket()
    print("AI Engine Started Successfully")

# =========================================
# ROOT ROUTE
# =========================================
@app.get("/")
async def root():
    return {
        "success": True,
        "message": "TrackShield AI Engine Running",
        "version": "1.0.0",
        "ai_status": "ACTIVE"
    }

# =========================================
# HEALTH CHECK
# =========================================
@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "engine": "online",
        "ai_monitoring": True,
        "threat_detection": True
    }

# =========================================
# API ROUTES
# =========================================
app.include_router(
    ai_router,
    prefix="/api/ai",
    tags=["AI Engine"]
)

# =========================================
# MAIN
# =========================================
if __name__ == "__main__":
    uvicorn.run(
        "app:app",
        host="0.0.0.0",
        port=8000,
        reload=True
    )