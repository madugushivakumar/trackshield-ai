const RemoteControl =
    require("../models/remote-control.model");

// =====================================
// CREATE REMOTE COMMAND
// =====================================
const createRemoteCommand =
    async (payload) => {

  return await RemoteControl.create({

    deviceId:
        payload.deviceId,

    command:
        payload.command,

    status:
        payload.status ||

        "PENDING",

    issuedBy:
        payload.issuedBy,

    metadata:
        payload.metadata ||

        {},
  });
};

// =====================================
// GET ALL COMMANDS
// =====================================
const getAllCommands =
    async () => {

  return await RemoteControl.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE COMMANDS
// =====================================
const getDeviceCommands =
    async (deviceId) => {

  return await RemoteControl.find({

    deviceId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// UPDATE COMMAND STATUS
// =====================================
const updateCommandStatus =
    async (

      id,

      status,
    ) => {

  return await RemoteControl.findByIdAndUpdate(

    id,

    {

      status,

      executedAt:
          new Date(),
    },

    {

      new: true,
    },
  );
};

module.exports = {

  createRemoteCommand,

  getAllCommands,

  getDeviceCommands,

  updateCommandStatus,
};