const express =
    require("express");

const router =
    express.Router();

const {

  healthCheck,

} = require(

  "../controllers/health.controller",
);

// =====================================
// HEALTH CHECK
// =====================================
router.get(

  "/",

  healthCheck,
);

module.exports =
    router;