from core.security.threat_engine import (
    analyze_threat
)

# =========================================
# THREAT SERVICE
# =========================================
def process_threat(payload):

    result = analyze_threat(
        payload
    )

    return {

        "success": True,

        "threat": result
    }