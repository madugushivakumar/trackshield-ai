const express =
  require("express");

const router =
  express.Router();

// =====================================
// CONTROLLERS
// =====================================
const {

  createUser,

  getUsers,

} = require(

  "../controllers/users.controller",
);

// =====================================
// CREATE USER
// =====================================
router.post(

  "/create",

  createUser,
);

// =====================================
// GET USERS
// =====================================
router.get(

  "/all",

  getUsers,
);

module.exports =
  router;