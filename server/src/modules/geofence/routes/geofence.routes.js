const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createGeofence,

  getGeofences,

} = require(

  "../controllers/geofence.controller",
);

// =====================================
// CREATE GEOFENCE
// =====================================
router.post(

  "/create",

  authMiddleware,

  createGeofence,
);

// =====================================
// GET GEOFENCES
// =====================================
router.get(

  "/all",

  authMiddleware,

  getGeofences,
);

module.exports =
    router;