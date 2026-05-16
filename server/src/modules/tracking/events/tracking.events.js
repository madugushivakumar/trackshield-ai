const EventEmitter =
    require("events");

// =====================================
// TRACKING EVENTS
// =====================================
class TrackingEvents
    extends EventEmitter {}

const trackingEvents =
    new TrackingEvents();

// =====================================
// LOCATION UPDATED
// =====================================
trackingEvents.on(

  "location-updated",

  (payload) => {

    console.log(

      `[TRACKING] Location Updated: ${payload.deviceId}`,
    );
  },
);

// =====================================
// DEVICE MOVED
// =====================================
trackingEvents.on(

  "device-moved",

  (payload) => {

    console.log(

      `[TRACKING] Device Moving: ${payload.deviceId}`,
    );
  },
);

// =====================================
// TRACKING ALERT
// =====================================
trackingEvents.on(

  "tracking-alert",

  (payload) => {

    console.log(

      `[TRACKING] Alert: ${payload.message}`,
    );
  },
);

module.exports =
    trackingEvents;