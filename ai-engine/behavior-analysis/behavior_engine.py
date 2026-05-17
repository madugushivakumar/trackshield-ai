import random
from datetime import datetime

# =========================================
# BEHAVIOR ENGINE
# =========================================
def analyze_behavior(payload):

    behaviour_patterns = [

        "Normal Usage",

        "Suspicious Login",

        "Rapid Device Switching",

        "Abnormal Access Time",

        "High Risk User Pattern",
    ]

    return {

        "device_id":
            payload.get(
                "device_id",
                "UNKNOWN"
            ),

        "behaviour":
            random.choice(
                behaviour_patterns
            ),

        "risk_score":
            random.randint(
                1,
                100
            ),

        "timestamp":
            str(datetime.utcnow())
    }