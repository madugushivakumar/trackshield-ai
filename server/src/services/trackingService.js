const Tracking =
    require(

      "../modules/tracking/models/tracking.model",
    );

// =====================================
// SAVE TRACKING LOCATION
// =====================================
const saveTrackingLocation =
    async (payload) => {

  return await Tracking.create({

    deviceId:
        payload.deviceId,

    latitude:
        payload.latitude,

    longitude:
        payload.longitude,

    speed:
        payload.speed ||

        0,

    accuracy:
        payload.accuracy ||

        0,
  });
};

// =====================================
// GET DEVICE TRACKING
// =====================================
const getDeviceTracking =
    async (deviceId) => {

  return await Tracking.find({

    deviceId,
  }).sort({

    createdAt: -1,
  });
};

module.exports = {

  saveTrackingLocation,

  getDeviceTracking,
};