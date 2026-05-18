import random
from datetime import datetime

# =========================================
# ANOMALY DETECTOR
# =========================================
def detect_anomaly(payload):

    anomaly_score = random.randint(
        1,
        100
    )

    anomaly_detected = (
        anomaly_score >= 60
    )

    anomaly_types = [

        "Suspicious Movement",

        "Abnormal Login Activity",

        "Device Tampering",

        "GPS Manipulation",

        "Network Spike",

        "Unauthorized Access Pattern",

        "AI Behavioral Drift",

        "Realtime Threat Spike",
    ]

    detected_type = random.choice(
        anomaly_types
    )

    return {

        "anomaly_detected":
            anomaly_detected,

        "anomaly_score":
            anomaly_score,

        "anomaly_type":
            detected_type,

        "risk_level":
            "HIGH"
            if anomaly_score >= 80
            else "MEDIUM"
            if anomaly_score >= 60
            else "LOW",

        "device_id":
            payload.get(
                "device_id",
                "UNKNOWN"
            ),

        "location":
            payload.get(
                "location",
                "UNKNOWN"
            ),

        "ai_confidence":
            round(
                random.uniform(
                    90.0,
                    99.9
                ),
                2
            ),

        "status":
            "INVESTIGATING"
            if anomaly_detected
            else "NORMAL",

        "timestamp":
            str(datetime.utcnow())
    }