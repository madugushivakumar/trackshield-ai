const Joi =
    require("joi");

// =====================================
// CREATE NETWORK LOG VALIDATOR
// =====================================
const createNetworkLogValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  networkType:
      Joi.string()
          .valid(

            "WIFI",

            "MOBILE_DATA",

            "ETHERNET",

            "UNKNOWN",
          )
          .optional(),

  ipAddress:
      Joi.string()
          .optional(),

  macAddress:
      Joi.string()
          .optional(),

  signalStrength:
      Joi.number()
          .optional(),

  isVpnEnabled:
      Joi.boolean()
          .optional(),

  isConnected:
      Joi.boolean()
          .optional(),

  suspiciousActivity:
      Joi.boolean()
          .optional(),

  metadata:
      Joi.object()
          .optional(),
});

// =====================================
// UPDATE NETWORK LOG VALIDATOR
// =====================================
const updateNetworkLogValidator =
    Joi.object({

  networkType:
      Joi.string()
          .valid(

            "WIFI",

            "MOBILE_DATA",

            "ETHERNET",

            "UNKNOWN",
          )
          .optional(),

  signalStrength:
      Joi.number()
          .optional(),

  isVpnEnabled:
      Joi.boolean()
          .optional(),

  isConnected:
      Joi.boolean()
          .optional(),

  suspiciousActivity:
      Joi.boolean()
          .optional(),

  metadata:
      Joi.object()
          .optional(),
});

module.exports = {

  createNetworkLogValidator,

  updateNetworkLogValidator,
};