const RemoteControl =
    require("../models/remote-control.model");

// =====================================
// CREATE REMOTE COMMAND
// =====================================
exports.createRemoteCommand =
    async (req, res) => {

  try {

    const command =
        await RemoteControl.create({

      deviceId:
          req.body.deviceId,

      command:
          req.body.command,

      status:
          "PENDING",

      issuedBy:
          req.body.issuedBy,
    });

    res.status(201).json({

      success: true,

      command,
    });

  } catch (e) {

    console.log(
      "Create Remote Command Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};

// =====================================
// GET REMOTE COMMANDS
// =====================================
exports.getRemoteCommands =
    async (req, res) => {

  try {

    const commands =
        await RemoteControl.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      commands,
    });

  } catch (e) {

    console.log(
      "Get Remote Commands Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};