const Security =
    require("../models/security.model");

// =====================================
// CREATE SECURITY EVENT
// =====================================
exports.createSecurityEvent =
    async (req, res) => {

  try {

    const security =
        await Security.create({

      deviceId:
          req.body.deviceId,

      eventType:
          req.body.eventType,

      severity:
          req.body.severity,

      description:
          req.body.description,
    });

    res.status(201).json({

      success: true,

      security,
    });

  } catch (e) {

    console.log(
      "Create Security Error:",
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
// GET SECURITY EVENTS
// =====================================
exports.getSecurityEvents =
    async (req, res) => {

  try {

    const events =
        await Security.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      events,
    });

  } catch (e) {

    console.log(
      "Get Security Events Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};