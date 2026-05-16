const EventEmitter =
    require("events");

// =====================================
// ANALYTICS EVENTS
// =====================================
class AnalyticsEvents
    extends EventEmitter {}

const analyticsEvents =
    new AnalyticsEvents();

// =====================================
// TRACK EVENT
// =====================================
analyticsEvents.on(

  "analytics-created",

  (payload) => {

    console.log(

      `[ANALYTICS] Created: ${payload.type}`,
    );
  },
);

// =====================================
// HIGH RISK ANALYTICS
// =====================================
analyticsEvents.on(

  "high-risk-detected",

  (payload) => {

    console.log(

      `[ANALYTICS] High Risk Device: ${payload.deviceId}`,
    );
  },
);

// =====================================
// TRACKING ANALYTICS
// =====================================
analyticsEvents.on(

  "tracking-analytics",

  (payload) => {

    console.log(

      `[ANALYTICS] Tracking Update: ${payload.deviceId}`,
    );
  },
);

module.exports =
    analyticsEvents;