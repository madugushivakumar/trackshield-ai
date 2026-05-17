import base64

# =========================================
# ENCRYPT
# =========================================
def encrypt_data(data):

    encoded = base64.b64encode(
        data.encode()
    )

    return encoded.decode()

# =========================================
# DECRYPT
# =========================================
def decrypt_data(data):

    decoded = base64.b64decode(
        data.encode()
    )

    return decoded.decode()