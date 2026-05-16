const mongoose =
    require("mongoose");

// =====================================
// DATABASE CONNECTION
// =====================================
const connectDatabase =
    async () => {

  try {

    await mongoose.connect(

      process.env.MONGO_URI,

      {

        autoIndex: true,

        maxPoolSize: 20,

        serverSelectionTimeoutMS:
            5000,

        socketTimeoutMS:
            45000,
      },
    );

    console.log(
      "MongoDB Connected",
    );

    mongoose.connection.on(

      "error",

      (err) => {

        console.log(
          "MongoDB Error:",
          err.message,
        );
      },
    );

    mongoose.connection.on(

      "disconnected",

      () => {

        console.log(
          "MongoDB Disconnected",
        );
      },
    );

  } catch (e) {

    console.log(
      "Database Connection Error:",
      e.message,
    );

    process.exit(1);
  }
};

module.exports =
    connectDatabase;