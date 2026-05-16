const Joi =
    require("joi");

// =====================================
// REGISTER VALIDATION
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

  role:
      Joi.string()
          .valid(

            "USER",

            "ADMIN",

            "SECURITY",
          )
          .default("USER"),
});

// =====================================
// LOGIN VALIDATION
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
// CHANGE PASSWORD
// =====================================
const changePasswordValidator =
    Joi.object({

  oldPassword:
      Joi.string()
          .required(),

  newPassword:
      Joi.string()
          .min(6)
          .max(30)
          .required(),
});

module.exports = {

  registerValidator,

  loginValidator,

  changePasswordValidator,
};