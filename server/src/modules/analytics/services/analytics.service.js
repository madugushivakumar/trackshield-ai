const Analytics =
    require("../models/analytics.model");

// =====================================
// CREATE ANALYTICS
// =====================================
const createAnalytics =
    async (payload) => {

  return await Analytics.create({

    deviceId:
        payload.deviceId,

    type:
        payload.type,

    value:
        payload.value,

    metadata:
        payload.metadata || {},
  });
};

// =====================================
// GET ALL ANALYTICS
// =====================================
const getAllAnalytics =
    async () => {

  return await Analytics.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE ANALYTICS
// =====================================
const getDeviceAnalytics =
    async (deviceId) => {

  return await Analytics.find({

    deviceId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// DELETE ANALYTICS
// =====================================
const deleteAnalytics =
    async (id) => {

  return await Analytics.findByIdAndDelete(
    id,
  );
};

module.exports = {

  createAnalytics,

  getAllAnalytics,

  getDeviceAnalytics,

  deleteAnalytics,
};