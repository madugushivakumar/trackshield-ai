const { Queue } =
    require("bullmq");

const alertQueue =
    new Queue(

      "alert-queue",

      {

        connection: {

          host:
              process.env.REDIS_HOST ||

              "127.0.0.1",

          port:
              process.env.REDIS_PORT ||

              6379,
        },
      },
    );

// =====================================
// ADD ALERT JOB
// =====================================
const addAlertJob =
    async (payload) => {

  await alertQueue.add(

    "security-alert",

    payload,
  );

  console.log(
    "Alert Job Added",
  );
};

module.exports = {

  alertQueue,

  addAlertJob,
};