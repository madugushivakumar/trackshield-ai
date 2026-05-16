const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createTicket,

  getTickets,

} = require(

  "../controllers/support.controller",
);

// =====================================
// CREATE SUPPORT TICKET
// =====================================
router.post(

  "/create",

  authMiddleware,

  createTicket,
);

// =====================================
// GET SUPPORT TICKETS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getTickets,
);

module.exports =
    router;