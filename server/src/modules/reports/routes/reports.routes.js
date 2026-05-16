const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createReport,

  getReports,

} = require(

  "../controllers/reports.controller",
);

// =====================================
// CREATE REPORT
// =====================================
router.post(

  "/create",

  authMiddleware,

  createReport,
);

// =====================================
// GET REPORTS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getReports,
);

module.exports =
    router;