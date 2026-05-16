class MemoryCache {

  constructor() {

    this.cache =
        new Map();
  }

  // =====================================
  // SET
  // =====================================
  set(key, value, ttl = 60000) {

    const expires =
        Date.now() + ttl;

    this.cache.set(key, {

      value,

      expires,
    });
  }

  // =====================================
  // GET
  // =====================================
  get(key) {

    const data =
        this.cache.get(key);

    if (!data) {

      return null;
    }

    if (
      Date.now() > data.expires
    ) {

      this.cache.delete(key);

      return null;
    }

    return data.value;
  }

  // =====================================
  // DELETE
  // =====================================
  delete(key) {

    this.cache.delete(key);
  }

  // =====================================
  // CLEAR
  // =====================================
  clear() {

    this.cache.clear();
  }
}

module.exports =
    new MemoryCache();