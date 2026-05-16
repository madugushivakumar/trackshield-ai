const Tracking =
    require("../models/tracking.model");

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
// GET ALL TRACKING DATA
// =====================================
const getAllTrackingData =
    async () => {

  return await Tracking.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE TRACKING DATA
// =====================================
const getDeviceTrackingData =
    async (deviceId) => {

  return await Tracking.find({

    deviceId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// DELETE TRACKING DATA
// =====================================
const deleteTrackingData =
    async (id) => {

  return await Tracking.findByIdAndDelete(
    id,
  );
};

module.exports = {

  saveTrackingLocation,

  getAllTrackingData,

  getDeviceTrackingData,

  deleteTrackingData,
};