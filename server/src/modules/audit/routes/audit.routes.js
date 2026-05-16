const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createAudit,

  getAudits,

} = require(

  "../controllers/audit.controller",
);

// =====================================
// CREATE AUDIT
// =====================================
router.post(

  "/create",

  authMiddleware,

  createAudit,
);

// =====================================
// GET AUDITS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getAudits,
);

module.exports =
    router;