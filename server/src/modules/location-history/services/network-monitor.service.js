const NetworkMonitor =
    require("../models/network-monitor.model");

// =====================================
// CREATE NETWORK LOG
// =====================================
const createNetworkLog =
    async (payload) => {

  return await NetworkMonitor.create({

    deviceId:
        payload.deviceId,

    networkType:
        payload.networkType ||

        "UNKNOWN",

    ipAddress:
        payload.ipAddress ||

        "",

    macAddress:
        payload.macAddress ||

        "",

    signalStrength:
        payload.signalStrength ||

        0,

    isVpnEnabled:
        payload.isVpnEnabled ||

        false,

    isConnected:
        payload.isConnected ??

        true,

    suspiciousActivity:
        payload.suspiciousActivity ||

        false,

    metadata:
        payload.metadata ||

        {},
  });
};

// =====================================
// GET ALL NETWORK LOGS
// =====================================
const getAllNetworkLogs =
    async () => {

  return await NetworkMonitor.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE NETWORK LOGS
// =====================================
const getDeviceNetworkLogs =
    async (deviceId) => {

  return await NetworkMonitor.find({

    deviceId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// DELETE NETWORK LOG
// =====================================
const deleteNetworkLog =
    async (id) => {

  return await NetworkMonitor.findByIdAndDelete(
    id,
  );
};

module.exports = {

  createNetworkLog,

  getAllNetworkLogs,

  getDeviceNetworkLogs,

  deleteNetworkLog,
};