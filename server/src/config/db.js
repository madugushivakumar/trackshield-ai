const mongoose =
  require("mongoose");

// =====================================
// CONNECT DATABASE
// =====================================
const connectDB =
  async () => {

    try {

      // ===============================
      // MONGODB CONNECTION
      // ===============================
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

    } catch (error) {

      console.log(

        "MongoDB Connection Failed:",

        error.message,
      );

      process.exit(1);
    }
  };

// =====================================
// CONNECTION EVENTS
// =====================================

// CONNECTED
mongoose.connection.on(

  "connected",

  () => {

    console.log(
      "MongoDB Event: Connected",
    );
  },
);

// DISCONNECTED
mongoose.connection.on(

  "disconnected",

  () => {

    console.log(
      "MongoDB Event: Disconnected",
    );
  },
);

// ERROR
mongoose.connection.on(

  "error",

  (error) => {

    console.log(

      "MongoDB Event Error:",

      error.message,
    );
  },
);

// =====================================
// EXPORT
// =====================================
module.exports =
  connectDB;