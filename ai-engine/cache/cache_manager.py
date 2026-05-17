cache_store = {}

# =========================================
# SET CACHE
# =========================================
def set_cache(key, value):

    cache_store[key] = value

# =========================================
# GET CACHE
# =========================================
def get_cache(key):

    return cache_store.get(key)

# =========================================
# CLEAR CACHE
# =========================================
def clear_cache():

    cache_store.clear()