const EventEmitter =
    require("events");

// =====================================
// REPORT EVENTS
// =====================================
class ReportsEvents
    extends EventEmitter {}

const reportsEvents =
    new ReportsEvents();

// =====================================
// REPORT CREATED
// =====================================
reportsEvents.on(

  "report-created",

  (payload) => {

    console.log(

      `[REPORT] Created: ${payload.title}`,
    );
  },
);

// =====================================
// CRITICAL REPORT
// =====================================
reportsEvents.on(

  "critical-report",

  (payload) => {

    console.log(

      `[REPORT] Critical Report: ${payload.deviceId}`,
    );
  },
);

// =====================================
// REPORT RESOLVED
// =====================================
reportsEvents.on(

  "report-resolved",

  (payload) => {

    console.log(

      `[REPORT] Resolved: ${payload.reportId}`,
    );
  },
);

module.exports =
    reportsEvents;