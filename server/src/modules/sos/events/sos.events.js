const EventEmitter =
    require("events");

// =====================================
// SOS EVENTS
// =====================================
class SOSEvents
    extends EventEmitter {}

const sosEvents =
    new SOSEvents();

// =====================================
// SOS TRIGGERED
// =====================================
sosEvents.on(

  "sos-triggered",

  (payload) => {

    console.log(

      `[SOS] Triggered By Device: ${payload.deviceId}`,
    );
  },
);

// =====================================
// EMERGENCY CONTACT ALERTED
// =====================================
sosEvents.on(

  "emergency-contact-alerted",

  (payload) => {

    console.log(

      `[SOS] Emergency Contact Alerted: ${payload.contact}`,
    );
  },
);

// =====================================
// SOS RESOLVED
// =====================================
sosEvents.on(

  "sos-resolved",

  (payload) => {

    console.log(

      `[SOS] Resolved: ${payload.sosId}`,
    );
  },
);

module.exports =
    sosEvents;