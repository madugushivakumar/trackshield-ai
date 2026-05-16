const Geofence =
    require("../models/geofence.model");

// =====================================
// CREATE GEOFENCE
// =====================================
const createGeofence =
    async (payload) => {

  return await Geofence.create({

    deviceId:
        payload.deviceId,

    name:
        payload.name,

    latitude:
        payload.latitude,

    longitude:
        payload.longitude,

    radius:
        payload.radius,

    active:
        payload.active ||

        true,
  });
};

// =====================================
// GET ALL GEOFENCES
// =====================================
const getAllGeofences =
    async () => {

  return await Geofence.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE GEOFENCES
// =====================================
const getDeviceGeofences =
    async (deviceId) => {

  return await Geofence.find({

    deviceId,
  });
};

// =====================================
// DELETE GEOFENCE
// =====================================
const deleteGeofence =
    async (id) => {

  return await Geofence.findByIdAndDelete(
    id,
  );
};

module.exports = {

  createGeofence,

  getAllGeofences,

  getDeviceGeofences,

  deleteGeofence,
};