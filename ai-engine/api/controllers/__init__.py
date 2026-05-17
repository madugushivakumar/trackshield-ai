from fastapi import APIRouter
from api.controllers.ai_controller import (
    get_ai_status,
    detect_threat,
    analytics_dashboard,
    realtime_monitor,
    anomaly_detection
)

# =========================================
# ROUTER
# =========================================
router = APIRouter()

# =========================================
# AI STATUS
# =========================================
@router.get("/status")
async def ai_status():
    return await get_ai_status()

# =========================================
# THREAT DETECTION
# =========================================
@router.post("/detect-threat")
async def detect_ai_threat(payload: dict):
    return await detect_threat(payload)

# =========================================
# ANALYTICS
# =========================================
@router.get("/analytics")
async def get_analytics():
    return await analytics_dashboard()

# =========================================
# REALTIME MONITORING
# =========================================
@router.get("/monitor")
async def monitor():
    return await realtime_monitor()

# =========================================
# ANOMALY DETECTION
# =========================================
@router.post("/anomaly")
async def anomaly(payload: dict):
    return await anomaly_detection(payload)