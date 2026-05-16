const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  getAllUsers,

  blockUser,

  deleteUser,

} = require(

  "../controllers/admin.controller",
);

// =====================================
// GET ALL USERS
// =====================================
router.get(

  "/users",

  authMiddleware,

  getAllUsers,
);

// =====================================
// BLOCK USER
// =====================================
router.put(

  "/block-user/:id",

  authMiddleware,

  blockUser,
);

// =====================================
// DELETE USER
// =====================================
router.delete(

  "/delete-user/:id",

  authMiddleware,

  deleteUser,
);

module.exports =
    router;