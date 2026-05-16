const Joi =
    require("joi");

// =====================================
// CREATE SIM EVENT VALIDATOR
// =====================================
const createSimEventValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  simOperator:
      Joi.string()
          .optional(),

  simSerial:
      Joi.string()
          .optional(),

  phoneNumber:
      Joi.string()
          .optional(),

  eventType:
      Joi.string()
          .valid(

            "SIM_INSERTED",

            "SIM_REMOVED",

            "SIM_CHANGED",

            "SIM_SWAP",
          )
          .required(),

  severity:
      Joi.string()
          .valid(

            "LOW",

            "MEDIUM",

            "HIGH",

            "CRITICAL",
          )
          .optional(),
});

// =====================================
// UPDATE SIM EVENT VALIDATOR
// =====================================
const updateSimEventValidator =
    Joi.object({

  severity:
      Joi.string()
          .valid(

            "LOW",

            "MEDIUM",

            "HIGH",

            "CRITICAL",
          )
          .optional(),
});

module.exports = {

  createSimEventValidator,

  updateSimEventValidator,
};