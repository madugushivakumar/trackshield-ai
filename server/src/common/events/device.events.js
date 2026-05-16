const EventEmitter =
    require("events");

class DeviceEvents
    extends EventEmitter {}

const deviceEvents =
    new DeviceEvents();

// =====================================
// DEVICE ONLINE
// =====================================
deviceEvents.on(

  "device-online",

  (device) => {

    console.log(

      `Device Online: ${device.deviceId}`,
    );
  },
);

// =====================================
// DEVICE OFFLINE
// =====================================
deviceEvents.on(

  "device-offline",

  (device) => {

    console.log(

      `Device Offline: ${device.deviceId}`,
    );
  },
);

// =====================================
// DEVICE LOCKED
// =====================================
deviceEvents.on(

  "device-locked",

  (device) => {

    console.log(

      `Device Locked: ${device.deviceId}`,
    );
  },
);

// =====================================
// SOS ACTIVATED
// =====================================
deviceEvents.on(

  "sos-activated",

  (device) => {

    console.log(

      `SOS Activated: ${device.deviceId}`,
    );
  },
);

module.exports =
    deviceEvents;