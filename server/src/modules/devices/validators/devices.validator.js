const Joi =
    require("joi");

// =====================================
// REGISTER DEVICE VALIDATOR
// =====================================
const registerDeviceValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  deviceName:
      Joi.string()
          .min(2)
          .max(100)
          .required(),

  platform:
      Joi.string()
          .valid(

            "ANDROID",

            "IOS",

            "WEB",
          )
          .optional(),

  owner:
      Joi.string()
          .required(),

  status:
      Joi.string()
          .valid(

            "ONLINE",

            "OFFLINE",

            "LOCKED",

            "STOLEN",
          )
          .optional(),
});

// =====================================
// UPDATE DEVICE VALIDATOR
// =====================================
const updateDeviceValidator =
    Joi.object({

  deviceName:
      Joi.string()
          .min(2)
          .max(100)
          .optional(),

  status:
      Joi.string()
          .valid(

            "ONLINE",

            "OFFLINE",

            "LOCKED",

            "STOLEN",
          )
          .optional(),

  batteryLevel:
      Joi.number()
          .min(0)
          .max(100)
          .optional(),

  latitude:
      Joi.number()
          .optional(),

  longitude:
      Joi.number()
          .optional(),
});

module.exports = {

  registerDeviceValidator,

  updateDeviceValidator,
};