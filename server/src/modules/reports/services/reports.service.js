const Report =
    require("../models/reports.model");

// =====================================
// CREATE REPORT
// =====================================
const createReport =
    async (payload) => {

  return await Report.create({

    deviceId:
        payload.deviceId,

    reportType:
        payload.reportType,

    title:
        payload.title,

    description:
        payload.description,

    severity:
        payload.severity ||

        "MEDIUM",
  });
};

// =====================================
// GET ALL REPORTS
// =====================================
const getAllReports =
    async () => {

  return await Report.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET DEVICE REPORTS
// =====================================
const getDeviceReports =
    async (deviceId) => {

  return await Report.find({

    deviceId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// RESOLVE REPORT
// =====================================
const resolveReport =
    async (id) => {

  return await Report.findByIdAndUpdate(

    id,

    {

      resolved: true,
    },

    {

      new: true,
    },
  );
};

module.exports = {

  createReport,

  getAllReports,

  getDeviceReports,

  resolveReport,
};