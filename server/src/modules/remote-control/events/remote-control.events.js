const EventEmitter =
    require("events");

// =====================================
// REMOTE CONTROL EVENTS
// =====================================
class RemoteControlEvents
    extends EventEmitter {}

const remoteControlEvents =
    new RemoteControlEvents();

// =====================================
// COMMAND SENT
// =====================================
remoteControlEvents.on(

  "command-sent",

  (payload) => {

    console.log(

      `[REMOTE CONTROL] Command Sent: ${payload.command}`,
    );
  },
);

// =====================================
// DEVICE LOCKED
// =====================================
remoteControlEvents.on(

  "device-locked",

  (payload) => {

    console.log(

      `[REMOTE CONTROL] Device Locked: ${payload.deviceId}`,
    );
  },
);

// =====================================
// DEVICE WIPED
// =====================================
remoteControlEvents.on(

  "device-wiped",

  (payload) => {

    console.log(

      `[REMOTE CONTROL] Device Wiped: ${payload.deviceId}`,
    );
  },
);

module.exports =
    remoteControlEvents;