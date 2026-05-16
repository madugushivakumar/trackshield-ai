const Joi =
    require("joi");

// =====================================
// CREATE SOS VALIDATOR
// =====================================
const createSOSValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  userId:
      Joi.string()
          .required(),

  latitude:
      Joi.number()
          .required(),

  longitude:
      Joi.number()
          .required(),

  message:
      Joi.string()
          .optional(),

  emergencyType:
      Joi.string()
          .valid(

            "MEDICAL",

            "THEFT",

            "ACCIDENT",

            "FIRE",

            "OTHER",
          )
          .optional(),
});

// =====================================
// UPDATE SOS VALIDATOR
// =====================================
const updateSOSValidator =
    Joi.object({

  resolved:
      Joi.boolean()
          .optional(),
});

module.exports = {

  createSOSValidator,

  updateSOSValidator,
};