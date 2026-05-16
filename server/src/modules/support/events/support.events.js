const EventEmitter =
    require("events");

// =====================================
// SUPPORT EVENTS
// =====================================
class SupportEvents
    extends EventEmitter {}

const supportEvents =
    new SupportEvents();

// =====================================
// TICKET CREATED
// =====================================
supportEvents.on(

  "ticket-created",

  (payload) => {

    console.log(

      `[SUPPORT] Ticket Created: ${payload.subject}`,
    );
  },
);

// =====================================
// TICKET RESOLVED
// =====================================
supportEvents.on(

  "ticket-resolved",

  (payload) => {

    console.log(

      `[SUPPORT] Ticket Resolved: ${payload.ticketId}`,
    );
  },
);

// =====================================
// HIGH PRIORITY TICKET
// =====================================
supportEvents.on(

  "high-priority-ticket",

  (payload) => {

    console.log(

      `[SUPPORT] High Priority Ticket: ${payload.ticketId}`,
    );
  },
);

module.exports =
    supportEvents;