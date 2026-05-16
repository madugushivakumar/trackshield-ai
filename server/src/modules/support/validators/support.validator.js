const Joi =
    require("joi");

// =====================================
// CREATE SUPPORT VALIDATOR
// =====================================
const createSupportValidator =
    Joi.object({

  userId:
      Joi.string()
          .required(),

  subject:
      Joi.string()
          .min(3)
          .max(150)
          .required(),

  message:
      Joi.string()
          .min(5)
          .max(1000)
          .required(),

  priority:
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
// UPDATE SUPPORT VALIDATOR
// =====================================
const updateSupportValidator =
    Joi.object({

  status:
      Joi.string()
          .valid(

            "OPEN",

            "IN_PROGRESS",

            "RESOLVED",
          )
          .optional(),

  priority:
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

  createSupportValidator,

  updateSupportValidator,
};