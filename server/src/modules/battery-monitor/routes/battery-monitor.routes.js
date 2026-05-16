const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createBatteryStatus,

  getBatteryStatus,

} = require(

  "../controllers/battery.controller",
);

// =====================================
// CREATE BATTERY STATUS
// =====================================
router.post(

  "/create",

  authMiddleware,

  createBatteryStatus,
);

// =====================================
// GET BATTERY STATUS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getBatteryStatus,
);

module.exports =
    router;