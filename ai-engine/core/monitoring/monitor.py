import random
from datetime import datetime

# =========================================
# REALTIME MONITOR
# =========================================
def monitor_system():

    return {

        "cpu_usage":
            random.randint(10, 90),

        "memory_usage":
            random.randint(20, 95),

        "network_load":
            random.randint(1, 100),

        "active_devices":
            random.randint(100, 5000),

        "system_health":
            "OPTIMAL",

        "timestamp":
            str(datetime.utcnow())
    }