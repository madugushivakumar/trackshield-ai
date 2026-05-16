const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createThreat,

  getThreats,

  deleteThreat,

} = require(

  "../controllers/ai-threat.controller",
);

// =====================================
// CREATE THREAT
// =====================================
router.post(

  "/create",

  authMiddleware,

  createThreat,
);

// =====================================
// GET ALL THREATS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getThreats,
);

// =====================================
// DELETE THREAT
// =====================================
router.delete(

  "/delete/:id",

  authMiddleware,

  deleteThreat,
);

module.exports =
    router;