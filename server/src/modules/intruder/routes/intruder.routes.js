const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createIntruderAlert,

  getIntruderAlerts,

} = require(

  "../controllers/intruder.controller",
);

// =====================================
// CREATE ALERT
// =====================================
router.post(

  "/create",

  authMiddleware,

  createIntruderAlert,
);

// =====================================
// GET ALERTS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getIntruderAlerts,
);

module.exports =
    router;