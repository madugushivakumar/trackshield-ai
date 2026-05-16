const Joi =
    require("joi");

// =====================================
// CREATE REMOTE COMMAND VALIDATOR
// =====================================
const createRemoteCommandValidator =
    Joi.object({

  deviceId:
      Joi.string()
          .required(),

  command:
      Joi.string()
          .valid(

            "LOCK_DEVICE",

            "WIPE_DEVICE",

            "PLAY_SIREN",

            "TAKE_PHOTO",

            "TRACK_DEVICE",
          )
          .required(),

  issuedBy:
      Joi.string()
          .required(),

  metadata:
      Joi.object()
          .optional(),
});

// =====================================
// UPDATE COMMAND VALIDATOR
// =====================================
const updateCommandValidator =
    Joi.object({

  status:
      Joi.string()
          .valid(

            "PENDING",

            "EXECUTED",

            "FAILED",
          )
          .optional(),
});

module.exports = {

  createRemoteCommandValidator,

  updateCommandValidator,
};