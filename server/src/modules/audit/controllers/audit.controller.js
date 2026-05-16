const Audit =
    require("../models/audit.model");

// =====================================
// CREATE AUDIT LOG
// =====================================
exports.createAudit =
    async (req, res) => {

  try {

    const audit =
        await Audit.create({

      userId:
          req.body.userId,

      action:
          req.body.action,

      module:
          req.body.module,

      ipAddress:
          req.ip,

      metadata:
          req.body.metadata ||
          {},
    });

    res.status(201).json({

      success: true,

      audit,
    });

  } catch (e) {

    console.log(
      "Create Audit Error:",
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
// GET AUDIT LOGS
// =====================================
exports.getAudits =
    async (req, res) => {

  try {

    const audits =
        await Audit.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      count:
          audits.length,

      audits,
    });

  } catch (e) {

    console.log(
      "Get Audits Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};