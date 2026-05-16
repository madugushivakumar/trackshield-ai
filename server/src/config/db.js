const mongoose =
    require("mongoose");

// =====================================
// MONGODB CONNECTION
// =====================================
const connectDB =
    async () => {

  try {

    const connection =
        await mongoose.connect(

      process.env.MONGO_URI,

      {

        autoIndex: true,

        maxPoolSize: 10,

        serverSelectionTimeoutMS:
            5000,

        socketTimeoutMS:
            45000,
      },
    );

    console.log(

      `MongoDB Connected: ${connection.connection.host}`,
    );

  } catch (e) {

    console.log(
      "MongoDB Connection Failed:",
      e.message,
    );

    process.exit(1);
  }
};

// =====================================
// CONNECTION EVENTS
// =====================================
mongoose.connection.on(

  "connected",

  () => {

    console.log(
      "MongoDB Event: Connected",
    );
  },
);

mongoose.connection.on(

  "disconnected",

  () => {

    console.log(
      "MongoDB Event: Disconnected",
    );
  },
);

mongoose.connection.on(

  "error",

  (err) => {

    console.log(
      "MongoDB Event Error:",
      err.message,
    );
  },
);

module.exports =
    connectDB;