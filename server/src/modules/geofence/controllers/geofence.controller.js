const Geofence =
    require("../models/geofence.model");

// =====================================
// CREATE GEOFENCE
// =====================================
exports.createGeofence =
    async (req, res) => {

  try {

    const geofence =
        await Geofence.create({

      deviceId:
          req.body.deviceId,

      name:
          req.body.name,

      latitude:
          req.body.latitude,

      longitude:
          req.body.longitude,

      radius:
          req.body.radius,
    });

    res.status(201).json({

      success: true,

      geofence,
    });

  } catch (e) {

    console.log(
      "Create Geofence Error:",
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
// GET GEOFENCES
// =====================================
exports.getGeofences =
    async (req, res) => {

  try {

    const geofences =
        await Geofence.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      geofences,
    });

  } catch (e) {

    console.log(
      "Get Geofences Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};