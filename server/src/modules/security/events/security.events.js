const EventEmitter =
    require("events");

// =====================================
// SECURITY EVENTS
// =====================================
class SecurityEvents
    extends EventEmitter {}

const securityEvents =
    new SecurityEvents();

// =====================================
// SECURITY ALERT
// =====================================
securityEvents.on(

  "security-alert",

  (payload) => {

    console.log(

      `[SECURITY] Alert: ${payload.eventType}`,
    );
  },
);

// =====================================
// DEVICE LOCKED
// =====================================
securityEvents.on(

  "device-locked",

  (payload) => {

    console.log(

      `[SECURITY] Device Locked: ${payload.deviceId}`,
    );
  },
);

// =====================================
// THREAT DETECTED
// =====================================
securityEvents.on(

  "threat-detected",

  (payload) => {

    console.log(

      `[SECURITY] Threat Detected: ${payload.deviceId}`,
    );
  },
);

module.exports =
    securityEvents;