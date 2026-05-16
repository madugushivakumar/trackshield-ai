const Joi =
    require("joi");

// =====================================
// CREATE THREAT VALIDATOR
// =====================================
const createThreatValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  threatType:
      Joi.string()
          .valid(

            "SIM_SWAP",

            "INTRUDER",

            "FACE_INTRUSION",

            "VOICE_SOS",

            "DEVICE_THEFT",

            "MALWARE",

            "GPS_TAMPERING",

            "REMOTE_ACCESS",
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
          .required(),

  message:
      Joi.string()
          .min(5)
          .max(500)
          .required(),

  metadata:
      Joi.object()
          .optional(),
});

// =====================================
// UPDATE THREAT VALIDATOR
// =====================================
const updateThreatValidator =
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

  createThreatValidator,

  updateThreatValidator,
};