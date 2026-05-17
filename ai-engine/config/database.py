from pymongo import MongoClient
from config.settings import settings

# =========================================
# GLOBAL DATABASE
# =========================================
client = None

database = None

# =========================================
# CONNECT DATABASE
# =========================================
def connect_database():

    global client
    global database

    try:

        client = MongoClient(
            settings.MONGO_URI
        )

        database = client[
            settings.DATABASE_NAME
        ]

        print(
            "MongoDB Connected Successfully"
        )

        return database

    except Exception as error:

        print(
            "MongoDB Connection Error:",
            str(error)
        )

        return None

# =========================================
# GET DATABASE
# =========================================
def get_database():

    return database