const Support =
    require("../models/support.model");

// =====================================
// CREATE SUPPORT TICKET
// =====================================
const createSupportTicket =
    async (payload) => {

  return await Support.create({

    userId:
        payload.userId,

    subject:
        payload.subject,

    message:
        payload.message,

    priority:
        payload.priority ||

        "MEDIUM",
  });
};

// =====================================
// GET ALL SUPPORT TICKETS
// =====================================
const getAllSupportTickets =
    async () => {

  return await Support.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET USER TICKETS
// =====================================
const getUserTickets =
    async (userId) => {

  return await Support.find({

    userId,
  }).sort({

    createdAt: -1,
  });
};

// =====================================
// RESOLVE SUPPORT TICKET
// =====================================
const resolveSupportTicket =
    async (id) => {

  return await Support.findByIdAndUpdate(

    id,

    {

      status:
          "RESOLVED",
    },

    {

      new: true,
    },
  );
};

module.exports = {

  createSupportTicket,

  getAllSupportTickets,

  getUserTickets,

  resolveSupportTicket,
};