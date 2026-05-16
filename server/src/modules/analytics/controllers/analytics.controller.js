const Analytics =
    require("../models/analytics.model");

// =====================================
// CREATE ANALYTICS
// =====================================
exports.createAnalytics =
    async (req, res) => {

  try {

    const analytics =
        await Analytics.create(

      req.body,
    );

    res.status(201).json({

      success: true,

      analytics,
    });

  } catch (e) {

    console.log(
      "Analytics Create Error:",
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
// GET ANALYTICS
// =====================================
exports.getAnalytics =
    async (req, res) => {

  try {

    const analytics =
        await Analytics.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      analytics,
    });

  } catch (e) {

    console.log(
      "Analytics Fetch Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};