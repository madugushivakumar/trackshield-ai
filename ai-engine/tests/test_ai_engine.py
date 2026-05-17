from core.security.threat_engine import (
    analyze_threat
)

# =========================================
# TEST AI ENGINE
# =========================================
def test_threat_engine():

    payload = {

        "device_id":
            "DEVICE-001",

        "ip_address":
            "127.0.0.1"
    }

    result = analyze_threat(
        payload
    )

    assert result["detected"] == True