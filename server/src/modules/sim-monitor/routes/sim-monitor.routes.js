const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createSimEvent,

  getSimEvents,

} = require(

  "../controllers/sim-monitor.controller",
);

// =====================================
// CREATE SIM EVENT
// =====================================
router.post(

  "/create",

  authMiddleware,

  createSimEvent,
);

// =====================================
// GET SIM EVENTS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getSimEvents,
);

module.exports =
    router;