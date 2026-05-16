const Joi =
    require("joi");

// =====================================
// CREATE SECURITY VALIDATOR
// =====================================
const createSecurityValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  eventType:
      Joi.string()
          .valid(

            "LOGIN_ATTEMPT",

            "DEVICE_LOCK",

            "INTRUDER",

            "SIM_SWAP",

            "ROOT_DETECTED",

            "VPN_DETECTED",
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

  description:
      Joi.string()
          .min(5)
          .max(500)
          .required(),
});

// =====================================
// UPDATE SECURITY VALIDATOR
// =====================================
const updateSecurityValidator =
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

  createSecurityValidator,

  updateSecurityValidator,
};