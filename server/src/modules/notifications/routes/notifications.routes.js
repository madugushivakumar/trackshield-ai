const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createNotification,

  getNotifications,

  markAsRead,

} = require(

  "../controllers/notifications.controller",
);

// =====================================
// CREATE NOTIFICATION
// =====================================
router.post(

  "/create",

  authMiddleware,

  createNotification,
);

// =====================================
// GET NOTIFICATIONS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getNotifications,
);

// =====================================
// MARK AS READ
// =====================================
router.put(

  "/read/:id",

  authMiddleware,

  markAsRead,
);

module.exports =
    router;