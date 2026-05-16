const Notification =
    require("../models/notifications.model");

// =====================================
// CREATE NOTIFICATION
// =====================================
exports.createNotification =
    async (req, res) => {

  try {

    const notification =
        await Notification.create({

      userId:
          req.body.userId,

      title:
          req.body.title,

      message:
          req.body.message,

      type:
          req.body.type,

      priority:
          req.body.priority,
    });

    res.status(201).json({

      success: true,

      notification,
    });

  } catch (e) {

    console.log(
      "Create Notification Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};

// =====================================
// GET NOTIFICATIONS
// =====================================
exports.getNotifications =
    async (req, res) => {

  try {

    const notifications =
        await Notification.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      notifications,
    });

  } catch (e) {

    console.log(
      "Get Notifications Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};

// =====================================
// MARK AS READ
// =====================================
exports.markAsRead =
    async (req, res) => {

  try {

    const notification =
        await Notification.findByIdAndUpdate(

      req.params.id,

      {

        isRead: true,
      },

      {

        new: true,
      },
    );

    res.status(200).json({

      success: true,

      notification,
    });

  } catch (e) {

    console.log(
      "Mark Read Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};