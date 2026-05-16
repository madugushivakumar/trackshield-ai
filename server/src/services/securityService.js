const Security =
    require(

      "../modules/security/models/security.model",
    );

// =====================================
// CREATE SECURITY EVENT
// =====================================
const createSecurityEvent =
    async (payload) => {

  return await Security.create({

    deviceId:
        payload.deviceId,

    eventType:
        payload.eventType,

    severity:
        payload.severity ||

        "MEDIUM",

    description:
        payload.description,
  });
};

// =====================================
// GET SECURITY EVENTS
// =====================================
const getSecurityEvents =
    async () => {

  return await Security.find()
      .sort({

        createdAt: -1,
      });
};

module.exports = {

  createSecurityEvent,

  getSecurityEvents,
};