const Joi =
    require("joi");

// =====================================
// CREATE USER VALIDATOR
// =====================================
const createUserValidator =
    Joi.object({

  name:
      Joi.string()
          .min(2)
          .max(100)
          .required(),

  email:
      Joi.string()
          .email()
          .required(),

  phone:
      Joi.string()
          .optional(),

  role:
      Joi.string()
          .valid(

            "USER",

            "ADMIN",

            "SECURITY",
          )
          .optional(),
});

// =====================================
// UPDATE USER VALIDATOR
// =====================================
const updateUserValidator =
    Joi.object({

  name:
      Joi.string()
          .min(2)
          .max(100)
          .optional(),

  phone:
      Joi.string()
          .optional(),

  role:
      Joi.string()
          .valid(

            "USER",

            "ADMIN",

            "SECURITY",
          )
          .optional(),

  isActive:
      Joi.boolean()
          .optional(),
});

module.exports = {

  createUserValidator,

  updateUserValidator,
};