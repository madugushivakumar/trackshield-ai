const EventEmitter =
    require("events");

// =====================================
// ADMIN EVENTS
// =====================================
class AdminEvents
    extends EventEmitter {}

const adminEvents =
    new AdminEvents();

// =====================================
// USER BLOCKED
// =====================================
adminEvents.on(

  "user-blocked",

  (payload) => {

    console.log(

      `[ADMIN EVENT] User Blocked: ${payload.userId}`,
    );
  },
);

// =====================================
// USER DELETED
// =====================================
adminEvents.on(

  "user-deleted",

  (payload) => {

    console.log(

      `[ADMIN EVENT] User Deleted: ${payload.userId}`,
    );
  },
);

// =====================================
// ADMIN LOGIN
// =====================================
adminEvents.on(

  "admin-login",

  (payload) => {

    console.log(

      `[ADMIN EVENT] Admin Login: ${payload.email}`,
    );
  },
);

module.exports =
    adminEvents;