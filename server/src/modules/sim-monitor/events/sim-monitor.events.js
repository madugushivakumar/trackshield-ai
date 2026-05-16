const EventEmitter =
    require("events");

// =====================================
// SIM MONITOR EVENTS
// =====================================
class SimMonitorEvents
    extends EventEmitter {}

const simMonitorEvents =
    new SimMonitorEvents();

// =====================================
// SIM CHANGED
// =====================================
simMonitorEvents.on(

  "sim-changed",

  (payload) => {

    console.log(

      `[SIM] SIM Changed: ${payload.deviceId}`,
    );
  },
);

// =====================================
// SIM REMOVED
// =====================================
simMonitorEvents.on(

  "sim-removed",

  (payload) => {

    console.log(

      `[SIM] SIM Removed: ${payload.deviceId}`,
    );
  },
);

// =====================================
// SIM SWAP DETECTED
// =====================================
simMonitorEvents.on(

  "sim-swap-detected",

  (payload) => {

    console.log(

      `[SIM] SIM Swap Detected: ${payload.deviceId}`,
    );
  },
);

module.exports =
    simMonitorEvents;