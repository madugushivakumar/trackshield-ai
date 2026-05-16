const redis =
    require("redis");

// =====================================
// REDIS CLIENT
// =====================================
const redisClient =
    redis.createClient({

  url:
      process.env.REDIS_URL ||

      "redis://127.0.0.1:6379",
});

// =====================================
// CONNECT REDIS
// =====================================
const connectRedis =
    async () => {

  try {

    await redisClient.connect();

    console.log(
      "Redis Connected",
    );

  } catch (e) {

    console.log(
      "Redis Connection Error:",
      e.message,
    );
  }
};

// =====================================
// EVENTS
// =====================================
redisClient.on(

  "error",

  (err) => {

    console.log(
      "Redis Error:",
      err.message,
    );
  },
);

redisClient.on(

  "reconnecting",

  () => {

    console.log(
      "Redis Reconnecting...",
    );
  },
);

redisClient.on(

  "connect",

  () => {

    console.log(
      "Redis Client Connected",
    );
  },
);

module.exports = {

  redisClient,

  connectRedis,
};