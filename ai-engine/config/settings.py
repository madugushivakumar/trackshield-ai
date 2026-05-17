from pydantic_settings import BaseSettings

# =========================================
# SETTINGS
# =========================================
class Settings(BaseSettings):

    # =====================================
    # APP
    # =====================================
    APP_NAME: str = "TrackShield AI Engine"

    VERSION: str = "1.0.0"

    DEBUG: bool = True

    # =====================================
    # SERVER
    # =====================================
    HOST: str = "0.0.0.0"

    PORT: int = 8000

    # =====================================
    # DATABASE
    # =====================================
    MONGO_URI: str = (
        "mongodb://localhost:27017"
    )

    DATABASE_NAME: str = (
        "trackshield_ai"
    )

    # =====================================
    # SECURITY
    # =====================================
    SECRET_KEY: str = (
        "trackshield_ai_secret"
    )

    JWT_ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE: int = 7

    # =====================================
    # AI ENGINE
    # =====================================
    AI_ENGINE_STATUS: str = "ACTIVE"

    THREAT_DETECTION: bool = True

    ANOMALY_DETECTION: bool = True

    REALTIME_MONITORING: bool = True

    PREDICTION_ENGINE: bool = True

    # =====================================
    # WEBSOCKET
    # =====================================
    SOCKET_ENABLED: bool = True

    SOCKET_PORT: int = 8765

    # =====================================
    # MODEL
    # =====================================
    MODEL_PATH: str = (
        "./models/saved"
    )

    # =====================================
    # ENV
    # =====================================
    class Config:

        env_file = ".env"

# =========================================
# INSTANCE
# =========================================
settings = Settings()