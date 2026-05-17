import random
from datetime import datetime

# =========================================
# ANALYTICS ENGINE
# =========================================
def generate_analytics():

    analytics = {

        # =================================
        # OVERVIEW
        # =================================
        "overview": {

            "total_devices":
                random.randint(
                    1000,
                    5000
                ),

            "active_users":
                random.randint(
                    500,
                    3000
                ),

            "active_alerts":
                random.randint(
                    5,
                    100
                ),

            "blocked_threats":
                random.randint(
                    100,
                    1000
                ),

            "anomalies_detected":
                random.randint(
                    10,
                    250
                ),
        },

        # =================================
        # AI METRICS
        # =================================
        "ai_metrics": {

            "prediction_accuracy":
                round(
                    random.uniform(
                        92.5,
                        99.9
                    ),
                    2
                ),

            "model_health":
                "OPTIMAL",

            "ai_engine_status":
                "RUNNING",

            "threat_detection":
                True,

            "realtime_monitoring":
                True,
        },

        # =================================
        # NETWORK
        # =================================
        "network": {

            "connected_servers":
                random.randint(
                    5,
                    50
                ),

            "online_devices":
                random.randint(
                    100,
                    5000
                ),

            "network_health":
                "STABLE",
        },

        # =================================
        # THREAT REPORT
        # =================================
        "threat_report": [

            {
                "type":
                    "Malware",

                "count":
                    random.randint(
                        10,
                        100
                    ),
            },

            {
                "type":
                    "Intrusion",

                "count":
                    random.randint(
                        5,
                        80
                    ),
            },

            {
                "type":
                    "Bot Attack",

                "count":
                    random.randint(
                        1,
                        50
                    ),
            },

            {
                "type":
                    "Data Breach",

                "count":
                    random.randint(
                        1,
                        25
                    ),
            },
        ],

        # =================================
        # GENERATED TIME
        # =================================
        "generated_at":
            str(datetime.utcnow())
    }

    return analytics