const express =
    require("express");

const router =
    express.Router();

const {

  register,

  login,

  profile,

} = require(

  "../modules/auth/controllers/auth.controller",
);

const authMiddleware =
    require(

      "../middleware/authMiddleware",
    );

// ===============================
// AUTH ROUTES
// ===============================
router.post(

  "/register",

  register,
);

router.post(

  "/login",

  login,
);

router.get(

  "/profile",

  authMiddleware,

  profile,
);

module.exports =
    router;