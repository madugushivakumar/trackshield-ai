const Notification =
    require("../models/notifications.model");

// =====================================
// CREATE NOTIFICATION
// =====================================
const createNotification =
    async (payload) => {

  return await Notification.create({

    userId:
        payload.userId,

    title:
        payload.title,

    message:
        payload.message,

    type:
        payload.type ||

        "SYSTEM",

    priority:
        payload.priority ||

        "MEDIUM",

    metadata:
        payload.metadata ||

        {},
  });
};

// =====================================
// GET ALL NOTIFICATIONS
// =====================================
const getAllNotifications =
    async () => {

  return await Notification.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET USER NOTIFICATIONS
// =====================================
const getUserNotifications =
    async (userId) => {

  return await Notification.find({

    userId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// MARK NOTIFICATION AS READ
// =====================================
const markNotificationAsRead =
    async (id) => {

  return await Notification.findByIdAndUpdate(

    id,

    {

      isRead: true,
    },

    {

      new: true,
    },
  );
};

module.exports = {

  createNotification,

  getAllNotifications,

  getUserNotifications,

  markNotificationAsRead,
};