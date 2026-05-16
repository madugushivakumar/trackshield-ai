const AIThreat =
    require("../models/ai-threat.model");

// =====================================
// CREATE THREAT
// =====================================
const createThreat =
    async (payload) => {

  const threat =
      await AIThreat.create({

    deviceId:
        payload.deviceId,

    threatType:
        payload.threatType,

    severity:
        payload.severity,

    message:
        payload.message,

    metadata:
        payload.metadata || {},
  });

  return threat;
};

// =====================================
// GET ALL THREATS
// =====================================
const getAllThreats =
    async () => {

  return await AIThreat.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE THREATS
// =====================================
const getDeviceThreats =
    async (deviceId) => {

  return await AIThreat.find({

    deviceId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// MARK AS RESOLVED
// =====================================
const resolveThreat =
    async (id) => {

  return await AIThreat.findByIdAndUpdate(

    id,

    {

      resolved: true,
    },

    {

      new: true,
    },
  );
};

// =====================================
// DELETE THREAT
// =====================================
const deleteThreat =
    async (id) => {

  return await AIThreat.findByIdAndDelete(
    id,
  );
};

module.exports = {

  createThreat,

  getAllThreats,

  getDeviceThreats,

  resolveThreat,

  deleteThreat,
};