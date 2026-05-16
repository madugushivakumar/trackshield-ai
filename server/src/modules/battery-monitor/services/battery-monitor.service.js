const Battery =
    require("../models/battery.model");

// =====================================
// CREATE BATTERY DATA
// =====================================
const createBatteryData =
    async (payload) => {

  return await Battery.create({

    deviceId:
        payload.deviceId,

    batteryLevel:
        payload.batteryLevel,

    charging:
        payload.charging ||

        false,

    temperature:
        payload.temperature ||

        0,

    health:
        payload.health ||

        "GOOD",
  });
};

// =====================================
// GET ALL BATTERY DATA
// =====================================
const getAllBatteryData =
    async () => {

  return await Battery.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE BATTERY DATA
// =====================================
const getDeviceBatteryData =
    async (deviceId) => {

  return await Battery.find({

    deviceId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// DELETE BATTERY RECORD
// =====================================
const deleteBatteryRecord =
    async (id) => {

  return await Battery.findByIdAndDelete(
    id,
  );
};

module.exports = {

  createBatteryData,

  getAllBatteryData,

  getDeviceBatteryData,

  deleteBatteryRecord,
};