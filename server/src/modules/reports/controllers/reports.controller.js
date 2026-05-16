const Report =
    require("../models/reports.model");

// =====================================
// CREATE REPORT
// =====================================
exports.createReport =
    async (req, res) => {

  try {

    const report =
        await Report.create({

      deviceId:
          req.body.deviceId,

      reportType:
          req.body.reportType,

      title:
          req.body.title,

      description:
          req.body.description,

      severity:
          req.body.severity,
    });

    res.status(201).json({

      success: true,

      report,
    });

  } catch (e) {

    console.log(
      "Create Report Error:",
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
// GET REPORTS
// =====================================
exports.getReports =
    async (req, res) => {

  try {

    const reports =
        await Report.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      reports,
    });

  } catch (e) {

    console.log(
      "Get Reports Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};