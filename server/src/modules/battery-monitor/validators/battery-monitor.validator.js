const Joi =
    require("joi");

// =====================================
// CREATE BATTERY VALIDATOR
// =====================================
const createBatteryValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  batteryLevel:
      Joi.number()
          .min(0)
          .max(100)
          .required(),

  charging:
      Joi.boolean()
          .optional(),

  temperature:
      Joi.number()
          .optional(),

  health:
      Joi.string()
          .valid(

            "GOOD",

            "NORMAL",

            "LOW",

            "CRITICAL",
          )
          .optional(),
});

// =====================================
// UPDATE BATTERY VALIDATOR
// =====================================
const updateBatteryValidator =
    Joi.object({

  batteryLevel:
      Joi.number()
          .min(0)
          .max(100)
          .optional(),

  charging:
      Joi.boolean()
          .optional(),

  temperature:
      Joi.number()
          .optional(),

  health:
      Joi.string()
          .valid(

            "GOOD",

            "NORMAL",

            "LOW",

            "CRITICAL",
          )
          .optional(),
});

module.exports = {

  createBatteryValidator,

  updateBatteryValidator,
};