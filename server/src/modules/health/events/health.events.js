const EventEmitter =
    require("events");

// =====================================
// HEALTH EVENTS
// =====================================
class HealthEvents
    extends EventEmitter {}

const healthEvents =
    new HealthEvents();

// =====================================
// SERVER HEALTHY
// =====================================
healthEvents.on(

  "server-healthy",

  () => {

    console.log(
      "[HEALTH] Server Healthy",
    );
  },
);

// =====================================
// SERVER WARNING
// =====================================
healthEvents.on(

  "server-warning",

  (payload) => {

    console.log(

      `[HEALTH] Warning: ${payload.message}`,
    );
  },
);

// =====================================
// SERVER DOWN
// =====================================
healthEvents.on(

  "server-down",

  (payload) => {

    console.log(

      `[HEALTH] Critical: ${payload.message}`,
    );
  },
);

module.exports =
    healthEvents;