const EventEmitter =
    require("events");

// =====================================
// AUTH EVENTS
// =====================================
class AuthEvents
    extends EventEmitter {}

const authEvents =
    new AuthEvents();

// =====================================
// USER REGISTERED
// =====================================
authEvents.on(

  "user-registered",

  (payload) => {

    console.log(

      `[AUTH] User Registered: ${payload.email}`,
    );
  },
);

// =====================================
// USER LOGIN
// =====================================
authEvents.on(

  "user-login",

  (payload) => {

    console.log(

      `[AUTH] User Login: ${payload.email}`,
    );
  },
);

// =====================================
// USER LOGOUT
// =====================================
authEvents.on(

  "user-logout",

  (payload) => {

    console.log(

      `[AUTH] User Logout: ${payload.email}`,
    );
  },
);

// =====================================
// FAILED LOGIN
// =====================================
authEvents.on(

  "failed-login",

  (payload) => {

    console.log(

      `[AUTH] Failed Login Attempt: ${payload.email}`,
    );
  },
);

module.exports =
    authEvents;