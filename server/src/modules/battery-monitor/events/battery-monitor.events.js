const EventEmitter =
    require("events");

// =====================================
// BATTERY EVENTS
// =====================================
class BatteryMonitorEvents
    extends EventEmitter {}

const batteryEvents =
    new BatteryMonitorEvents();

// =====================================
// LOW BATTERY
// =====================================
batteryEvents.on(

  "low-battery",

  (payload) => {

    console.log(

      `[BATTERY] Low Battery: ${payload.deviceId}`,
    );

    console.log(

      `Battery Level: ${payload.batteryLevel}%`,
    );
  },
);

// =====================================
// OVERHEAT ALERT
// =====================================
batteryEvents.on(

  "battery-overheat",

  (payload) => {

    console.log(

      `[BATTERY] Overheat Alert: ${payload.deviceId}`,
    );
  },
);

// =====================================
// CHARGING STARTED
// =====================================
batteryEvents.on(

  "charging-started",

  (payload) => {

    console.log(

      `[BATTERY] Charging Started: ${payload.deviceId}`,
    );
  },
);

module.exports =
    batteryEvents;