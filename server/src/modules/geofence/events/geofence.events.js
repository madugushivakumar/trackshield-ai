const EventEmitter =
    require("events");

// =====================================
// GEOFENCE EVENTS
// =====================================
class GeofenceEvents
    extends EventEmitter {}

const geofenceEvents =
    new GeofenceEvents();

// =====================================
// ENTER GEOFENCE
// =====================================
geofenceEvents.on(

  "enter-geofence",

  (payload) => {

    console.log(

      `[GEOFENCE] Device Entered: ${payload.deviceId}`,
    );
  },
);

// =====================================
// EXIT GEOFENCE
// =====================================
geofenceEvents.on(

  "exit-geofence",

  (payload) => {

    console.log(

      `[GEOFENCE] Device Exited: ${payload.deviceId}`,
    );
  },
);

// =====================================
// GEOFENCE CREATED
// =====================================
geofenceEvents.on(

  "geofence-created",

  (payload) => {

    console.log(

      `[GEOFENCE] Created: ${payload.name}`,
    );
  },
);

module.exports =
    geofenceEvents;