from core.analytics.analytics_engine import (
    generate_analytics
)

# =========================================
# ANALYTICS SERVICE
# =========================================
def get_analytics_service():

    analytics = generate_analytics()

    return {

        "success": True,

        "data": analytics
    }