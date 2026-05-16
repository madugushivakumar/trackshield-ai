const LocationHistory =
    require("../models/location-history.model");

// =====================================
// SAVE LOCATION
// =====================================
exports.saveLocation =
    async (req, res) => {

  try {

    const location =
        await LocationHistory.create({

      deviceId:
          req.body.deviceId,

      latitude:
          req.body.latitude,

      longitude:
          req.body.longitude,

      accuracy:
          req.body.accuracy,
    });

    res.status(201).json({

      success: true,

      location,
    });

  } catch (e) {

    console.log(
      "Save Location Error:",
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
// GET LOCATION HISTORY
// =====================================
exports.getLocationHistory =
    async (req, res) => {

  try {

    const locations =
        await LocationHistory.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      locations,
    });

  } catch (e) {

    console.log(
      "Get Location History Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};