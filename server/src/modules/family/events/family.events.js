const EventEmitter =
    require("events");

// =====================================
// FAMILY EVENTS
// =====================================
class FamilyEvents
    extends EventEmitter {}

const familyEvents =
    new FamilyEvents();

// =====================================
// MEMBER ADDED
// =====================================
familyEvents.on(

  "member-added",

  (payload) => {

    console.log(

      `[FAMILY] Member Added: ${payload.memberName}`,
    );
  },
);

// =====================================
// MEMBER REMOVED
// =====================================
familyEvents.on(

  "member-removed",

  (payload) => {

    console.log(

      `[FAMILY] Member Removed: ${payload.memberName}`,
    );
  },
);

// =====================================
// SOS SHARED
// =====================================
familyEvents.on(

  "sos-shared",

  (payload) => {

    console.log(

      `[FAMILY] SOS Shared With: ${payload.memberName}`,
    );
  },
);

module.exports =
    familyEvents;