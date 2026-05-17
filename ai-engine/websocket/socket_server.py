import asyncio
import websockets
import json
from datetime import datetime

# =========================================
# SOCKET HANDLER
# =========================================
async def socket_handler(
    websocket
):

    while True:

        data = {

            "ai_engine":
                "ACTIVE",

            "threats_detected":
                12,

            "active_devices":
                1280,

            "timestamp":
                str(datetime.utcnow())
        }

        await websocket.send(

            json.dumps(data)
        )

        await asyncio.sleep(3)

# =========================================
# START SERVER
# =========================================
def initialize_socket():

    print(
        "WebSocket Server Initialized"
    )