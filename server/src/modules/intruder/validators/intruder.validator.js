const Joi =
    require("joi");

// =====================================
// CREATE INTRUDER VALIDATOR
// =====================================
const createIntruderValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  imageUrl:
      Joi.string()
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

  location:
      Joi.string()
          .optional(),
});

// =====================================
// UPDATE INTRUDER VALIDATOR
// =====================================
const updateIntruderValidator =
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

  resolved:
      Joi.boolean()
          .optional(),
});

module.exports = {

  createIntruderValidator,

  updateIntruderValidator,
};