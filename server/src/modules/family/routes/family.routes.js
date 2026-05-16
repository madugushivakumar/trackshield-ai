const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  addFamilyMember,

  getFamilyMembers,

} = require(

  "../controllers/family.controller",
);

// =====================================
// ADD MEMBER
// =====================================
router.post(

  "/add",

  authMiddleware,

  addFamilyMember,
);

// =====================================
// GET MEMBERS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getFamilyMembers,
);

module.exports =
    router;