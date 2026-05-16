const Support =
    require("../models/support.model");

// =====================================
// CREATE SUPPORT TICKET
// =====================================
exports.createTicket =
    async (req, res) => {

  try {

    const ticket =
        await Support.create({

      userId:
          req.body.userId,

      subject:
          req.body.subject,

      message:
          req.body.message,

      priority:
          req.body.priority,
    });

    res.status(201).json({

      success: true,

      ticket,
    });

  } catch (e) {

    console.log(
      "Create Ticket Error:",
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
// GET SUPPORT TICKETS
// =====================================
exports.getTickets =
    async (req, res) => {

  try {

    const tickets =
        await Support.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      tickets,
    });

  } catch (e) {

    console.log(
      "Get Tickets Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};