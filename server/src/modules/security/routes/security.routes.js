const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createSecurityEvent,

  getSecurityEvents,

} = require(

  "../controllers/security.controller",
);

// =====================================
// CREATE SECURITY EVENT
// =====================================
router.post(

  "/create",

  authMiddleware,

  createSecurityEvent,
);

// =====================================
// GET SECURITY EVENTS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getSecurityEvents,
);

module.exports =
    router;