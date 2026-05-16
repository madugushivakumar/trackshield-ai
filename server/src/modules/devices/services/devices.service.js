const Device =
    require("../models/devices.model");

// =====================================
// CREATE DEVICE
// =====================================
const createDevice =
    async (payload) => {

  return await Device.create({

    deviceId:
        payload.deviceId,

    deviceName:
        payload.deviceName,

    platform:
        payload.platform ||

        "ANDROID",

    owner:
        payload.owner,

    status:
        payload.status ||

        "ONLINE",
  });
};

// =====================================
// GET ALL DEVICES
// =====================================
const getAllDevices =
    async () => {

  return await Device.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE BY ID
// =====================================
const getDeviceById =
    async (deviceId) => {

  return await Device.findOne({

    deviceId,
  });
};

// =====================================
// UPDATE DEVICE STATUS
// =====================================
const updateDeviceStatus =
    async (

      id,

      status,
    ) => {

  return await Device.findByIdAndUpdate(

    id,

    {

      status,
    },

    {

      new: true,
    },
  );
};

// =====================================
// DELETE DEVICE
// =====================================
const deleteDevice =
    async (id) => {

  return await Device.findByIdAndDelete(
    id,
  );
};

module.exports = {

  createDevice,

  getAllDevices,

  getDeviceById,

  updateDeviceStatus,

  deleteDevice,
};