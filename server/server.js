require("dotenv").config();

// =====================================
// IMPORT APP
// =====================================
const app =
  require("./src/app");

// =====================================
// DATABASE
// =====================================
const connectDB =
  require("./src/config/db");

// =====================================
// CONNECT DATABASE
// =====================================
connectDB();

// =====================================
// PORT
// =====================================
const PORT =
  process.env.PORT || 5000;

// =====================================
// START SERVER
// =====================================
const server =
  app.listen(

    PORT,

    () => {

      console.log(

        `Server running on port ${PORT}`,
      );
    },
  );

// =====================================
// HANDLE SERVER ERRORS
// =====================================
server.on(

  "error",

  (error) => {

    console.log(

      "Server Error:",

      error.message,
    );
  },
);

// =====================================
// HANDLE UNCAUGHT ERRORS
// =====================================
process.on(

  "uncaughtException",

  (error) => {

    console.log(

      "Uncaught Exception:",

      error.message,
    );
  },
);

// =====================================
// HANDLE UNHANDLED PROMISES
// =====================================
process.on(

  "unhandledRejection",

  (error) => {

    console.log(

      "Unhandled Rejection:",

      error.message,
    );
  },
);