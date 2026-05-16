const express =
  require("express");

const router =
  express.Router();

const {

  registerDevice,

  getDevices,

  updateDeviceStatus,

  deleteDevice,

} = require(

  "../controllers/devices.controller",
);

// =====================================
// REGISTER DEVICE
// =====================================
router.post(

  "/register",

  registerDevice,
);

// =====================================
// GET ALL DEVICES
// =====================================
router.get(

  "/all",

  getDevices,
);

// =====================================
// UPDATE DEVICE STATUS
// =====================================
router.put(

  "/update-status/:id",

  updateDeviceStatus,
);

// =====================================
// DELETE DEVICE
// =====================================
router.delete(

  "/delete/:id",

  deleteDevice,
);

module.exports =
  router;