const EventEmitter =
    require("events");

// =====================================
// AUDIT EVENTS
// =====================================
class AuditEvents
    extends EventEmitter {}

const auditEvents =
    new AuditEvents();

// =====================================
// AUDIT CREATED
// =====================================
auditEvents.on(

  "audit-created",

  (payload) => {

    console.log(

      `[AUDIT] Action: ${payload.action}`,
    );

    console.log(

      `Module: ${payload.module}`,
    );

    console.log(

      `User: ${payload.userId}`,
    );
  },
);

// =====================================
// SECURITY AUDIT
// =====================================
auditEvents.on(

  "security-audit",

  (payload) => {

    console.log(

      `[SECURITY AUDIT] ${payload.message}`,
    );
  },
);

// =====================================
// ADMIN AUDIT
// =====================================
auditEvents.on(

  "admin-audit",

  (payload) => {

    console.log(

      `[ADMIN AUDIT] ${payload.action}`,
    );
  },
);

module.exports =
    auditEvents;