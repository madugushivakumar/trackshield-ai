const EventEmitter =
    require("events");

// =====================================
// NOTIFICATION EVENTS
// =====================================
class NotificationEvents
    extends EventEmitter {}

const notificationEvents =
    new NotificationEvents();

// =====================================
// NOTIFICATION SENT
// =====================================
notificationEvents.on(

  "notification-sent",

  (payload) => {

    console.log(

      `[NOTIFICATION] Sent To User: ${payload.userId}`,
    );
  },
);

// =====================================
// SECURITY ALERT
// =====================================
notificationEvents.on(

  "security-alert",

  (payload) => {

    console.log(

      `[NOTIFICATION] Security Alert: ${payload.title}`,
    );
  },
);

// =====================================
// SOS NOTIFICATION
// =====================================
notificationEvents.on(

  "sos-notification",

  (payload) => {

    console.log(

      `[NOTIFICATION] SOS Triggered: ${payload.userId}`,
    );
  },
);

module.exports =
    notificationEvents;