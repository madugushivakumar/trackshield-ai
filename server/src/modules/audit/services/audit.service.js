const Audit =
    require("../models/audit.model");

// =====================================
// CREATE AUDIT LOG
// =====================================
const createAuditLog =
    async (payload) => {

  return await Audit.create({

    userId:
        payload.userId,

    action:
        payload.action,

    module:
        payload.module,

    ipAddress:
        payload.ipAddress ||

        "",

    metadata:
        payload.metadata ||

        {},

    severity:
        payload.severity ||

        "LOW",
  });
};

// =====================================
// GET ALL AUDITS
// =====================================
const getAllAudits =
    async () => {

  return await Audit.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET USER AUDITS
// =====================================
const getUserAudits =
    async (userId) => {

  return await Audit.find({

    userId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// DELETE AUDIT
// =====================================
const deleteAudit =
    async (id) => {

  return await Audit.findByIdAndDelete(
    id,
  );
};

module.exports = {

  createAuditLog,

  getAllAudits,

  getUserAudits,

  deleteAudit,
};