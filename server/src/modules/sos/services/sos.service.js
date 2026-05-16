const SOS =
    require("../models/sos.model");

// =====================================
// CREATE SOS ALERT
// =====================================
const createSOSAlert =
    async (payload) => {

  return await SOS.create({

    deviceId:
        payload.deviceId,

    userId:
        payload.userId,

    latitude:
        payload.latitude,

    longitude:
        payload.longitude,

    message:
        payload.message ||

        "Emergency SOS Triggered",

    emergencyType:
        payload.emergencyType ||

        "OTHER",
  });
};

// =====================================
// GET ALL SOS ALERTS
// =====================================
const getAllSOSAlerts =
    async () => {

  return await SOS.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE SOS ALERTS
// =====================================
const getDeviceSOSAlerts =
    async (deviceId) => {

  return await SOS.find({

    deviceId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// RESOLVE SOS ALERT
// =====================================
const resolveSOSAlert =
    async (id) => {

  return await SOS.findByIdAndUpdate(

    id,

    {

      resolved: true,
    },

    {

      new: true,
    },
  );
};

module.exports = {

  createSOSAlert,

  getAllSOSAlerts,

  getDeviceSOSAlerts,

  resolveSOSAlert,
};