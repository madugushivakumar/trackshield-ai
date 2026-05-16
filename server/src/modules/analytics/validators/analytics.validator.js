const Joi =
    require("joi");

// =====================================
// CREATE ANALYTICS VALIDATOR
// =====================================
const createAnalyticsValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  type:
      Joi.string()
          .valid(

            "TRACKING",

            "THREAT",

            "SOS",

            "SECURITY",

            "BATTERY",

            "NETWORK",
          )
          .required(),

  value:
      Joi.number()
          .required(),

  metadata:
      Joi.object()
          .optional(),
});

// =====================================
// UPDATE ANALYTICS VALIDATOR
// =====================================
const updateAnalyticsValidator =
    Joi.object({

  value:
      Joi.number()
          .optional(),

  metadata:
      Joi.object()
          .optional(),
});

module.exports = {

  createAnalyticsValidator,

  updateAnalyticsValidator,
};