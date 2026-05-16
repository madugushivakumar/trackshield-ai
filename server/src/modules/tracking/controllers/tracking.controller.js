const Tracking =
    require("../models/tracking.model");

// =====================================
// SAVE TRACKING LOCATION
// =====================================
exports.saveTrackingLocation =
    async (req, res) => {

  try {

    const tracking =
        await Tracking.create({

      deviceId:
          req.body.deviceId,

      latitude:
          req.body.latitude,

      longitude:
          req.body.longitude,

      speed:
          req.body.speed,

      accuracy:
          req.body.accuracy,
    });

    res.status(201).json({

      success: true,

      tracking,
    });

  } catch (e) {

    console.log(
      "Save Tracking Error:",
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
// GET TRACKING DATA
// =====================================
exports.getTrackingData =
    async (req, res) => {

  try {

    const trackingData =
        await Tracking.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      trackingData,
    });

  } catch (e) {

    console.log(
      "Get Tracking Data Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};