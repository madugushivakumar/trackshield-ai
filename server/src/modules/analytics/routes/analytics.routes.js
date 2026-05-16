const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createAnalytics,

  getAnalytics,

} = require(

  "../controllers/analytics.controller",
);

// =====================================
// CREATE ANALYTICS
// =====================================
router.post(

  "/create",

  authMiddleware,

  createAnalytics,
);

// =====================================
// GET ANALYTICS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getAnalytics,
);

module.exports =
    router;