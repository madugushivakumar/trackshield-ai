const Intruder =
    require("../models/intruder.model");

// =====================================
// CREATE ALERT
// =====================================
const createIntruderAlert =
    async (payload) => {

  return await Intruder.create({

    deviceId:
        payload.deviceId,

    imageUrl:
        payload.imageUrl,

    severity:
        payload.severity ||

        "HIGH",

    location:
        payload.location ||

        "",

    detectedAt:
        new Date(),
  });
};

// =====================================
// GET ALL ALERTS
// =====================================
const getAllIntruderAlerts =
    async () => {

  return await Intruder.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE ALERTS
// =====================================
const getDeviceIntruderAlerts =
    async (deviceId) => {

  return await Intruder.find({

    deviceId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// RESOLVE ALERT
// =====================================
const resolveIntruderAlert =
    async (id) => {

  return await Intruder.findByIdAndUpdate(

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

  createIntruderAlert,

  getAllIntruderAlerts,

  getDeviceIntruderAlerts,

  resolveIntruderAlert,
};