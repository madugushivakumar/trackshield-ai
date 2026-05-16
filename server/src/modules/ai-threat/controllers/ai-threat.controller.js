const Threat =
    require("../models/ai-threat.model");

// =====================================
// CREATE THREAT ALERT
// =====================================
exports.createThreat =
    async (req, res) => {

  try {

    const {

      deviceId,

      threatType,

      severity,

      message,
    } = req.body;

    const threat =
        await Threat.create({

      deviceId,

      threatType,

      severity,

      message,
    });

    res.status(201).json({

      success: true,

      threat,
    });

  } catch (e) {

    console.log(
      "Create Threat Error:",
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
// GET ALL THREATS
// =====================================
exports.getThreats =
    async (req, res) => {

  try {

    const threats =
        await Threat.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      count:
          threats.length,

      threats,
    });

  } catch (e) {

    console.log(
      "Get Threats Error:",
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
// DELETE THREAT
// =====================================
exports.deleteThreat =
    async (req, res) => {

  try {

    const threat =
        await Threat.findByIdAndDelete(

      req.params.id,
    );

    if (!threat) {

      return res.status(404)
          .json({

        success: false,

        message:
            "Threat Not Found",
      });
    }

    res.status(200).json({

      success: true,

      message:
          "Threat Deleted",
    });

  } catch (e) {

    console.log(
      "Delete Threat Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};