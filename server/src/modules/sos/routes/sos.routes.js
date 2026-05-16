const express =
  require("express");

const router =
  express.Router();

const {

  createSOSAlert,

  getSOSAlerts,

} = require(

  "../controllers/sos.controller",
);

// =====================================
// CREATE SOS ALERT
// =====================================
router.post(

  "/create",

  createSOSAlert,
);

// =====================================
// GET SOS ALERTS
// =====================================
router.get(

  "/all",

  getSOSAlerts,
);

module.exports =
  router;