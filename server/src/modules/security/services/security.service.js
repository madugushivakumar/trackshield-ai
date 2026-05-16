const Security =
    require("../models/security.model");

// =====================================
// CREATE SECURITY EVENT
// =====================================
const createSecurityEvent =
    async (payload) => {

  return await Security.create({

    deviceId:
        payload.deviceId,

    eventType:
        payload.eventType,

    severity:
        payload.severity ||

        "MEDIUM",

    description:
        payload.description,
  });
};

// =====================================
// GET ALL SECURITY EVENTS
// =====================================
const getAllSecurityEvents =
    async () => {

  return await Security.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE SECURITY EVENTS
// =====================================
const getDeviceSecurityEvents =
    async (deviceId) => {

  return await Security.find({

    deviceId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// RESOLVE SECURITY EVENT
// =====================================
const resolveSecurityEvent =
    async (id) => {

  return await Security.findByIdAndUpdate(

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

  createSecurityEvent,

  getAllSecurityEvents,

  getDeviceSecurityEvents,

  resolveSecurityEvent,
};