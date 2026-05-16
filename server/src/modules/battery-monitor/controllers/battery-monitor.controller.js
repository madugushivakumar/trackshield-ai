const Battery =
    require("../models/battery.model");

// =====================================
// CREATE BATTERY STATUS
// =====================================
exports.createBatteryStatus =
    async (req, res) => {

  try {

    const battery =
        await Battery.create({

      deviceId:
          req.body.deviceId,

      batteryLevel:
          req.body.batteryLevel,

      charging:
          req.body.charging,

      temperature:
          req.body.temperature,

      health:
          req.body.health,
    });

    res.status(201).json({

      success: true,

      battery,
    });

  } catch (e) {

    console.log(
      "Battery Create Error:",
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
// GET BATTERY STATUS
// =====================================
exports.getBatteryStatus =
    async (req, res) => {

  try {

    const batteryData =
        await Battery.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      batteryData,
    });

  } catch (e) {

    console.log(
      "Battery Fetch Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};