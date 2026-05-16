const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  register,

  login,

  profile,

} = require(

  "../controllers/auth.controller",
);

// =====================================
// REGISTER
// =====================================
router.post(

  "/register",

  register,
);

// =====================================
// LOGIN
// =====================================
router.post(

  "/login",

  login,
);

// =====================================
// PROFILE
// =====================================
router.get(

  "/profile",

  authMiddleware,

  profile,
);

module.exports =
    router;