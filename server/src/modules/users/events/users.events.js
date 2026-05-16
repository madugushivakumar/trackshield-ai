const EventEmitter =
    require("events");

// =====================================
// USER EVENTS
// =====================================
class UsersEvents
    extends EventEmitter {}

const usersEvents =
    new UsersEvents();

// =====================================
// USER CREATED
// =====================================
usersEvents.on(

  "user-created",

  (payload) => {

    console.log(

      `[USERS] User Created: ${payload.email}`,
    );
  },
);

// =====================================
// USER UPDATED
// =====================================
usersEvents.on(

  "user-updated",

  (payload) => {

    console.log(

      `[USERS] User Updated: ${payload.userId}`,
    );
  },
);

// =====================================
// USER DELETED
// =====================================
usersEvents.on(

  "user-deleted",

  (payload) => {

    console.log(

      `[USERS] User Deleted: ${payload.userId}`,
    );
  },
);

module.exports =
    usersEvents;