const fs =
    require("fs");

const path =
    require("path");

// =====================================
// LOG FILE
// =====================================
const logFile =
    path.join(

      __dirname,

      "../../logs/security.log",
    );

// =====================================
// SECURITY LOGGER
// =====================================
const securityLogger =
    (

      req,
      res,
      next,
    ) => {

  try {

    const logData = {

      method:
          req.method,

      route:
          req.originalUrl,

      ip:
          req.ip,

      userAgent:
          req.headers[
            "user-agent"
          ],

      timestamp:
          new Date()
              .toISOString(),
    };

    const logMessage =
        JSON.stringify(logData) +
        "\n";

    // ================================
    // APPEND LOG
    // ================================
    fs.appendFile(

      logFile,

      logMessage,

      (err) => {

        if (err) {

          console.log(
            "Security Log Error:",
            err.message,
          );
        }
      },
    );

    next();

  } catch (e) {

    console.log(
      "Security Logger Error:",
      e.message,
    );

    next();
  }
};

module.exports =
    securityLogger;