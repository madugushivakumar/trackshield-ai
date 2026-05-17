from datetime import datetime

# =========================================
# LOGGER
# =========================================
def log(message):

    print(
        f"[{datetime.utcnow()}] {message}"
    )