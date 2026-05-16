const os =
    require("os");

const Health =
    require("../models/health.model");

// =====================================
// GET SYSTEM HEALTH
// =====================================
const getSystemHealth =
    async () => {

  const totalMemory =
      os.totalmem();

  const freeMemory =
      os.freemem();

  const usedMemory =
      totalMemory - freeMemory;

  const memoryUsage =
      Number(

        (
          (usedMemory /
            totalMemory) *
          100
        ).toFixed(2),
      );

  const cpuLoad =
      os.loadavg()[0];

  const uptime =
      os.uptime();

  return {

    cpuUsage:
        cpuLoad,

    memoryUsage,

    uptime,
  };
};

// =====================================
// SAVE HEALTH STATUS
// =====================================
const saveHealthStatus =
    async () => {

  const health =
      await getSystemHealth();

  return await Health.create({

    service:
        "TrackShield Backend",

    status:
        "HEALTHY",

    cpuUsage:
        health.cpuUsage,

    memoryUsage:
        health.memoryUsage,

    uptime:
        health.uptime,
  });
};

// =====================================
// GET HEALTH HISTORY
// =====================================
const getHealthHistory =
    async () => {

  return await Health.find()
      .sort({

        createdAt: -1,
      });
};

module.exports = {

  getSystemHealth,

  saveHealthStatus,

  getHealthHistory,
};