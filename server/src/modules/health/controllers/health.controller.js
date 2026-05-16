exports.healthCheck =
    async (req, res) => {

  try {

    res.status(200).json({

      success: true,

      service:
          "TrackShield AI Backend",

      status:
          "HEALTHY",

      uptime:
          process.uptime(),

      timestamp:
          new Date(),
    });

  } catch (e) {

    console.log(
      "Health Check Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      status:
          "UNHEALTHY",
    });
  }
};