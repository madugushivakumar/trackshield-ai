import random
from datetime import datetime

# =========================================
# PREDICTION SERVICE
# =========================================
def generate_prediction(payload):

    predictions = [

        "Low Threat Activity",

        "Potential Intrusion Risk",

        "Device Safe",

        "Malware Probability Detected",

        "Suspicious User Behaviour",

        "High Risk Network Pattern",
    ]

    return {

        "prediction":
            random.choice(
                predictions
            ),

        "confidence":
            round(
                random.uniform(
                    85,
                    99
                ),
                2
            ),

        "device_id":
            payload.get(
                "device_id",
                "UNKNOWN"
            ),

        "generated_at":
            str(datetime.utcnow())
    }