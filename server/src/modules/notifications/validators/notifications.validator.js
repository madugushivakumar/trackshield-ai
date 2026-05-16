const Joi =
    require("joi");

// =====================================
// CREATE NOTIFICATION VALIDATOR
// =====================================
const createNotificationValidator =
    Joi.object({

  userId:
      Joi.string()
          .required(),

  title:
      Joi.string()
          .min(3)
          .max(150)
          .required(),

  message:
      Joi.string()
          .min(5)
          .max(500)
          .required(),

  type:
      Joi.string()
          .valid(

            "SECURITY",

            "SOS",

            "TRACKING",

            "BATTERY",

            "SYSTEM",
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

  metadata:
      Joi.object()
          .optional(),
});

// =====================================
// UPDATE NOTIFICATION VALIDATOR
// =====================================
const updateNotificationValidator =
    Joi.object({

  isRead:
      Joi.boolean()
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

  createNotificationValidator,

  updateNotificationValidator,
};