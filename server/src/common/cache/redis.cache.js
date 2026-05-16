const redis =
    require("redis");

const client =
    redis.createClient({

  url:
      process.env.REDIS_URL,
});

// =====================================
// CONNECT
// =====================================
client.connect()
.then(() => {

  console.log(
    "Redis Connected",
  );

})
.catch((e) => {

  console.log(
    "Redis Error:",
    e.message,
  );
});

// =====================================
// SET CACHE
// =====================================
const setCache =
    async (

      key,
      value,
      ttl = 3600,
    ) => {

  await client.set(

    key,

    JSON.stringify(value),

    {

      EX: ttl,
    },
  );
};

// =====================================
// GET CACHE
// =====================================
const getCache =
    async (key) => {

  const data =
      await client.get(key);

  if (!data) {

    return null;
  }

  return JSON.parse(data);
};

// =====================================
// DELETE CACHE
// =====================================
const deleteCache =
    async (key) => {

  await client.del(key);
};

module.exports = {

  client,

  setCache,

  getCache,

  deleteCache,
};