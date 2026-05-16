const Joi =
    require("joi");

// =====================================
// CREATE GEOFENCE VALIDATOR
// =====================================
const createGeofenceValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  name:
      Joi.string()
          .min(2)
          .max(100)
          .required(),

  latitude:
      Joi.number()
          .required(),

  longitude:
      Joi.number()
          .required(),

  radius:
      Joi.number()
          .min(1)
          .required(),

  active:
      Joi.boolean()
          .optional(),
});

// =====================================
// UPDATE GEOFENCE VALIDATOR
// =====================================
const updateGeofenceValidator =
    Joi.object({

  name:
      Joi.string()
          .min(2)
          .max(100)
          .optional(),

  latitude:
      Joi.number()
          .optional(),

  longitude:
      Joi.number()
          .optional(),

  radius:
      Joi.number()
          .min(1)
          .optional(),

  active:
      Joi.boolean()
          .optional(),
});

module.exports = {

  createGeofenceValidator,

  updateGeofenceValidator,
};