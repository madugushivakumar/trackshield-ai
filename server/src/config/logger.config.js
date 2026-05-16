const winston =
    require("winston");

const path =
    require("path");

// =====================================
// LOG DIRECTORY
// =====================================
const logDir =
    path.join(

      __dirname,

      "../../logs",
    );

// =====================================
// LOGGER CONFIG
// =====================================
const logger =
    winston.createLogger({

  level: "info",

  format:
      winston.format.combine(

        winston.format.timestamp({

          format:
              "YYYY-MM-DD HH:mm:ss",
        }),

        winston.format.errors({

          stack: true,
        }),

        winston.format.printf(

          ({
            timestamp,
            level,
            message,
            stack,
          }) => {

            return `[${timestamp}] ${level.toUpperCase()}: ${stack || message}`;
          },
        ),
      ),

  transports: [

    // ===============================
    // CONSOLE
    // ===============================
    new winston.transports.Console(),

    // ===============================
    // APP LOG
    // ===============================
    new winston.transports.File({

      filename:
          `${logDir}/app.log`,
    }),

    // ===============================
    // ERROR LOG
    // ===============================
    new winston.transports.File({

      filename:
          `${logDir}/error.log`,

      level: "error",
    }),
  ],
});

// =====================================
// LOGGER EVENTS
// =====================================
logger.on(

  "error",

  (err) => {

    console.log(
      "Logger Error:",
      err.message,
    );
  },
);

module.exports =
    logger;