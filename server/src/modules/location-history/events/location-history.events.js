const EventEmitter =
    require("events");

// =====================================
// LOCATION HISTORY EVENTS
// =====================================
class LocationHistoryEvents
    extends EventEmitter {}

const locationHistoryEvents =
    new LocationHistoryEvents();

// =====================================
// LOCATION SAVED
// =====================================
locationHistoryEvents.on(

  "location-saved",

  (payload) => {

    console.log(

      `[LOCATION] Saved For Device: ${payload.deviceId}`,
    );
  },
);

// =====================================
// LOCATION UPDATED
// =====================================
locationHistoryEvents.on(

  "location-updated",

  (payload) => {

    console.log(

      `[LOCATION] Updated: ${payload.deviceId}`,
    );
  },
);

// =====================================
// LOCATION ALERT
// =====================================
locationHistoryEvents.on(

  "location-alert",

  (payload) => {

    console.log(

      `[LOCATION] Alert: ${payload.message}`,
    );
  },
);

module.exports =
    locationHistoryEvents;