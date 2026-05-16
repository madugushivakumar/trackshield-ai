const SOS =
    require("../models/sos.model");

// =====================================
// CREATE SOS ALERT
// =====================================
exports.createSOSAlert =
    async (req, res) => {

  try {

    const sos =
        await SOS.create({

      deviceId:
          req.body.deviceId,

      userId:
          req.body.userId,

      latitude:
          req.body.latitude,

      longitude:
          req.body.longitude,

      message:
          req.body.message,

      emergencyType:
          req.body.emergencyType,
    });

    res.status(201).json({

      success: true,

      sos,
    });

  } catch (e) {

    console.log(
      "Create SOS Error:",
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
// GET SOS ALERTS
// =====================================
exports.getSOSAlerts =
    async (req, res) => {

  try {

    const sosAlerts =
        await SOS.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      sosAlerts,
    });

  } catch (e) {

    console.log(
      "Get SOS Alerts Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};