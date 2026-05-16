const SimMonitor =
    require("../models/sim-monitor.model");

// =====================================
// CREATE SIM EVENT
// =====================================
exports.createSimEvent =
    async (req, res) => {

  try {

    const simEvent =
        await SimMonitor.create({

      deviceId:
          req.body.deviceId,

      simOperator:
          req.body.simOperator,

      simSerial:
          req.body.simSerial,

      phoneNumber:
          req.body.phoneNumber,

      eventType:
          req.body.eventType,
    });

    res.status(201).json({

      success: true,

      simEvent,
    });

  } catch (e) {

    console.log(
      "Create SIM Event Error:",
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
// GET SIM EVENTS
// =====================================
exports.getSimEvents =
    async (req, res) => {

  try {

    const simEvents =
        await SimMonitor.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      simEvents,
    });

  } catch (e) {

    console.log(
      "Get SIM Events Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};