const EventEmitter =
    require("events");

// =====================================
// DEVICE EVENTS
// =====================================
class DevicesEvents
    extends EventEmitter {}

const devicesEvents =
    new DevicesEvents();

// =====================================
// DEVICE REGISTERED
// =====================================
devicesEvents.on(

  "device-registered",

  (payload) => {

    console.log(

      `[DEVICE] Registered: ${payload.deviceId}`,
    );
  },
);

// =====================================
// DEVICE ONLINE
// =====================================
devicesEvents.on(

  "device-online",

  (payload) => {

    console.log(

      `[DEVICE] Online: ${payload.deviceId}`,
    );
  },
);

// =====================================
// DEVICE OFFLINE
// =====================================
devicesEvents.on(

  "device-offline",

  (payload) => {

    console.log(

      `[DEVICE] Offline: ${payload.deviceId}`,
    );
  },
);

// =====================================
// DEVICE LOCKED
// =====================================
devicesEvents.on(

  "device-locked",

  (payload) => {

    console.log(

      `[DEVICE] Locked: ${payload.deviceId}`,
    );
  },
);

module.exports =
    devicesEvents;