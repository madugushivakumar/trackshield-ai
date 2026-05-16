const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createNetworkLog,

  getNetworkLogs,

  getDeviceNetworkLogs,

} = require(

  "../controllers/network-monitor.controller",
);

// =====================================
// CREATE NETWORK LOG
// =====================================
router.post(

  "/create",

  authMiddleware,

  createNetworkLog,
);

// =====================================
// GET ALL NETWORK LOGS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getNetworkLogs,
);

// =====================================
// GET DEVICE NETWORK LOGS
// =====================================
router.get(

  "/device/:deviceId",

  authMiddleware,

  getDeviceNetworkLogs,
);

module.exports =
    router;