const express =
  require("express");

const router =
  express.Router();

const {

  saveTrackingLocation,

  getTrackingData,

} = require(

  "../controllers/tracking.controller",
);

// =====================================
// SAVE TRACKING LOCATION
// =====================================
router.post(

  "/create",

  saveTrackingLocation,
);

// =====================================
// GET TRACKING DATA
// =====================================
router.get(

  "/all",

  getTrackingData,
);

module.exports =
  router;