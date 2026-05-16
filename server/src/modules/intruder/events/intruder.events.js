const EventEmitter =
    require("events");

// =====================================
// INTRUDER EVENTS
// =====================================
class IntruderEvents
    extends EventEmitter {}

const intruderEvents =
    new IntruderEvents();

// =====================================
// INTRUDER DETECTED
// =====================================
intruderEvents.on(

  "intruder-detected",

  (payload) => {

    console.log(

      `[INTRUDER] Detected On Device: ${payload.deviceId}`,
    );
  },
);

// =====================================
// FACE DETECTED
// =====================================
intruderEvents.on(

  "face-detected",

  (payload) => {

    console.log(

      `[INTRUDER] Face Captured: ${payload.imageUrl}`,
    );
  },
);

// =====================================
// HIGH RISK INTRUSION
// =====================================
intruderEvents.on(

  "high-risk-intrusion",

  (payload) => {

    console.log(

      `[INTRUDER] HIGH RISK ALERT: ${payload.deviceId}`,
    );
  },
);

module.exports =
    intruderEvents;