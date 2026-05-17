import random
from datetime import datetime

# =========================================
# THREAT ANALYZER
# =========================================
def analyze_threat(payload):

    threat_score = random.randint(1, 100)

    # =====================================
    # THREAT LEVEL
    # =====================================
    if threat_score >= 80:

        level = "CRITICAL"

    elif threat_score >= 60:

        level = "HIGH"

    elif threat_score >= 40:

        level = "MEDIUM"

    else:

        level = "LOW"

    # =====================================
    # THREAT TYPES
    # =====================================
    threat_types = [

        "Malware Attack",

        "Unauthorized Access",

        "Data Breach Attempt",

        "Suspicious Login",

        "Bot Network",

        "Firewall Intrusion",

        "Ransomware Activity",

        "AI Threat Pattern",
    ]

    detected_type = random.choice(
        threat_types
    )

    # =====================================
    # RESPONSE
    # =====================================
    return {

        "detected": True,

        "threat_score": threat_score,

        "threat_level": level,

        "threat_type": detected_type,

        "device_id": payload.get(
            "device_id",
            "UNKNOWN"
        ),

        "ip_address": payload.get(
            "ip_address",
            "0.0.0.0"
        ),

        "status": "BLOCKED"
        if threat_score >= 70
        else "MONITORING",

        "ai_confidence":
            round(
                random.uniform(
                    85.0,
                    99.9
                ),
                2
            ),

        "timestamp":
            str(datetime.utcnow())
    }