const Joi =
    require("joi");

// =====================================
// CREATE TRACKING VALIDATOR
// =====================================
const createTrackingValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  latitude:
      Joi.number()
          .required(),

  longitude:
      Joi.number()
          .required(),

  speed:
      Joi.number()
          .optional(),

  accuracy:
      Joi.number()
          .optional(),
});

// =====================================
// UPDATE TRACKING VALIDATOR
// =====================================
const updateTrackingValidator =
    Joi.object({

  latitude:
      Joi.number()
          .optional(),

  longitude:
      Joi.number()
          .optional(),

  speed:
      Joi.number()
          .optional(),

  accuracy:
      Joi.number()
          .optional(),
});

module.exports = {

  createTrackingValidator,

  updateTrackingValidator,
};