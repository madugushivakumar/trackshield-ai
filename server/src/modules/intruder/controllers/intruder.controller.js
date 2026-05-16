const Intruder =
    require("../models/intruder.model");

// =====================================
// CREATE INTRUDER ALERT
// =====================================
exports.createIntruderAlert =
    async (req, res) => {

  try {

    const intruder =
        await Intruder.create({

      deviceId:
          req.body.deviceId,

      imageUrl:
          req.body.imageUrl,

      severity:
          req.body.severity,

      location:
          req.body.location,

      detectedAt:
          new Date(),
    });

    res.status(201).json({

      success: true,

      intruder,
    });

  } catch (e) {

    console.log(
      "Create Intruder Error:",
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
// GET INTRUDER ALERTS
// =====================================
exports.getIntruderAlerts =
    async (req, res) => {

  try {

    const alerts =
        await Intruder.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      alerts,
    });

  } catch (e) {

    console.log(
      "Get Intruder Alerts Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};