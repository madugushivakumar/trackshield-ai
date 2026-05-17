const express =
  require("express");

const router =
  express.Router();

// =====================================
// MIDDLEWARE
// =====================================
const authMiddleware =
  require(
    "../../../middleware/authMiddleware",
  );

// =====================================
// CONTROLLERS
// =====================================
const {
  register,
  login,
  profile,
} = require(
  "../controllers/auth.controller",
);

// =====================================
// AUTH ROUTES
// =====================================

// REGISTER
router.post(
  "/register",
  register,
);

// LOGIN
router.post(
  "/login",
  login,
);

// PROFILE
router.get(
  "/profile",
  authMiddleware,
  profile,
);

// =====================================
// EXPORT
// =====================================
module.exports =
  router;