const SimMonitor =
    require("../models/sim-monitor.model");

// =====================================
// CREATE SIM EVENT
// =====================================
const createSimEvent =
    async (payload) => {

  return await SimMonitor.create({

    deviceId:
        payload.deviceId,

    simOperator:
        payload.simOperator ||

        "",

    simSerial:
        payload.simSerial ||

        "",

    phoneNumber:
        payload.phoneNumber ||

        "",

    eventType:
        payload.eventType,

    severity:
        payload.severity ||

        "HIGH",
  });
};

// =====================================
// GET ALL SIM EVENTS
// =====================================
const getAllSimEvents =
    async () => {

  return await SimMonitor.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE SIM EVENTS
// =====================================
const getDeviceSimEvents =
    async (deviceId) => {

  return await SimMonitor.find({

    deviceId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// DELETE SIM EVENT
// =====================================
const deleteSimEvent =
    async (id) => {

  return await SimMonitor.findByIdAndDelete(
    id,
  );
};

module.exports = {

  createSimEvent,

  getAllSimEvents,

  getDeviceSimEvents,

  deleteSimEvent,
};