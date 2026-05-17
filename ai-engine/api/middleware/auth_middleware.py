from fastapi import Header, HTTPException

# =========================================
# AUTH MIDDLEWARE
# =========================================
async def verify_token(
    authorization: str = Header(None)
):

    if not authorization:

        raise HTTPException(

            status_code=401,

            detail="Unauthorized"
        )

    return True