const Joi =
    require("joi");

// =====================================
// REGISTER VALIDATOR
// =====================================
const registerValidator =
    Joi.object({

  name:
      Joi.string()
          .min(3)
          .max(50)
          .required(),

  email:
      Joi.string()
          .email()
          .required(),

  password:
      Joi.string()
          .min(6)
          .max(30)
          .required(),

  phone:
      Joi.string()
          .optional(),
});

// =====================================
// LOGIN VALIDATOR
// =====================================
const loginValidator =
    Joi.object({

  email:
      Joi.string()
          .email()
          .required(),

  password:
      Joi.string()
          .required(),
});

// =====================================
// UPDATE PROFILE VALIDATOR
// =====================================
const updateProfileValidator =
    Joi.object({

  name:
      Joi.string()
          .min(3)
          .max(50)
          .optional(),

  phone:
      Joi.string()
          .optional(),
});

module.exports = {

  registerValidator,

  loginValidator,

  updateProfileValidator,
};