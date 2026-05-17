import random
from datetime import datetime

# =========================================
# AI PREDICTOR
# =========================================
def predict_risk(payload):

    prediction = random.randint(
        1,
        100
    )

    return {

        "device_id":
            payload.get(
                "device_id",
                "UNKNOWN"
            ),

        "risk_score":
            prediction,

        "prediction":
            "HIGH RISK"
            if prediction >= 70
            else "SAFE",

        "confidence":
            round(
                random.uniform(
                    90,
                    99.9
                ),
                2
            ),

        "generated_at":
            str(datetime.utcnow())
    }