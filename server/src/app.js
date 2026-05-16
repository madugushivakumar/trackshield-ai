require("dotenv").config();

const express =
  require("express");

const cors =
  require("cors");

const helmet =
  require("helmet");

const compression =
  require("compression");

const morgan =
  require("morgan");

const rateLimit =
  require("express-rate-limit");

const securityLogger =
  require("./middleware/securityLogger");

// =====================================
// APP
// =====================================
const app =
  express();

// =====================================
// SECURITY MIDDLEWARES
// =====================================
app.use(helmet());

app.use(compression());

app.use(cors({

  origin: "*",

  credentials: true,
}));

// =====================================
// BODY PARSER
// =====================================
app.use(express.json({

  limit: "10mb",
}));

app.use(express.urlencoded({

  extended: true,

  limit: "10mb",
}));

// =====================================
// LOGGER
// =====================================
app.use(morgan("dev"));

app.use(securityLogger);

// =====================================
// RATE LIMITER
// =====================================
const limiter =
  rateLimit({

    windowMs:
      15 * 60 * 1000,

    max: 100,

    message:
      "Too many requests, try again later",
  });

app.use(limiter);

// =====================================
// ROUTES IMPORTS
// =====================================
const authRoutes =
  require("./routes/authRoutes");

const usersRoutes =
  require(
    "./modules/users/routes/users.routes",
  );

const trackingRoutes =
  require(
    "./modules/tracking/routes/tracking.routes",
  );

const sosRoutes =
  require(
    "./modules/sos/routes/sos.routes",
  );

const securityRoutes =
  require(
    "./modules/security/routes/security.routes",
  );

const reportsRoutes =
  require(
    "./modules/reports/routes/reports.routes",
  );

const notificationsRoutes =
  require(
    "./modules/notifications/routes/notifications.routes",
  );

const devicesRoutes =
  require(
    "./modules/devices/routes/devices.routes",
  );

const geofenceRoutes =
  require(
    "./modules/geofence/routes/geofence.routes",
  );

const supportRoutes =
  require(
    "./modules/support/routes/support.routes",
  );

const healthRoutes =
  require(
    "./modules/health/routes/health.routes",
  );

// =====================================
// API ROUTES
// =====================================
app.use(

  "/api/auth",

  authRoutes,
);

app.use(

  "/api/users",

  usersRoutes,
);

app.use(

  "/api/tracking",

  trackingRoutes,
);

app.use(

  "/api/sos",

  sosRoutes,
);

app.use(

  "/api/security",

  securityRoutes,
);

app.use(

  "/api/reports",

  reportsRoutes,
);

app.use(

  "/api/notifications",

  notificationsRoutes,
);

app.use(

  "/api/devices",

  devicesRoutes,
);

app.use(

  "/api/geofence",

  geofenceRoutes,
);

app.use(

  "/api/support",

  supportRoutes,
);

app.use(

  "/api/health",

  healthRoutes,
);

// =====================================
// ROOT ROUTE
// =====================================
app.get(

  "/",

  (req, res) => {

    res.status(200).json({

      success: true,

      message:
        "TrackShield AI Backend Running 🚀",
    });
  },
);

// =====================================
// 404 HANDLER
// =====================================
app.use(

  (req, res) => {

    res.status(404).json({

      success: false,

      message:
        "Route Not Found",
    });
  },
);

// =====================================
// GLOBAL ERROR HANDLER
// =====================================
app.use(

  (

    err,

    req,

    res,

    next,
  ) => {

    console.log(

      "Global Error:",

      err.message,
    );

    res.status(500).json({

      success: false,

      message:
        "Internal Server Error",
    });
  },
);

module.exports =
  app;