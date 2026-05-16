const Joi =
    require("joi");

// =====================================
// CREATE AUDIT VALIDATOR
// =====================================
const createAuditValidator =
    Joi.object({

  userId:
      Joi.string()
          .required(),

  action:
      Joi.string()
          .min(3)
          .max(100)
          .required(),

  module:
      Joi.string()
          .min(2)
          .max(100)
          .required(),

  ipAddress:
      Joi.string()
          .optional(),

  metadata:
      Joi.object()
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

// =====================================
// UPDATE AUDIT VALIDATOR
// =====================================
const updateAuditValidator =
    Joi.object({

  action:
      Joi.string()
          .min(3)
          .max(100)
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

  metadata:
      Joi.object()
          .optional(),
});

module.exports = {

  createAuditValidator,

  updateAuditValidator,
};