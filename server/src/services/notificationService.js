const Notification =
    require(

      "../modules/notifications/models/notifications.model",
    );

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

module.exports = {

  createNotification,

  getUserNotifications,
};