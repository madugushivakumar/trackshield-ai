const Joi =
    require("joi");

// =====================================
// CREATE REPORT VALIDATOR
// =====================================
const createReportValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  reportType:
      Joi.string()
          .valid(

            "SECURITY",

            "THREAT",

            "BATTERY",

            "NETWORK",

            "TRACKING",

            "SOS",
          )
          .required(),

  title:
      Joi.string()
          .min(3)
          .max(150)
          .required(),

  description:
      Joi.string()
          .min(5)
          .max(1000)
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
// UPDATE REPORT VALIDATOR
// =====================================
const updateReportValidator =
    Joi.object({

  resolved:
      Joi.boolean()
          .optional(),

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

  createReportValidator,

  updateReportValidator,
};