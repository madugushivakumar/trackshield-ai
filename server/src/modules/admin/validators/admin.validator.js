const Joi =
    require("joi");

// =====================================
// CREATE ADMIN VALIDATOR
// =====================================
const createAdminValidator =
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

  permissions:
      Joi.array()
          .items(
            Joi.string(),
          )
          .optional(),
});

// =====================================
// UPDATE ADMIN VALIDATOR
// =====================================
const updateAdminValidator =
    Joi.object({

  name:
      Joi.string()
          .min(3)
          .max(50)
          .optional(),

  email:
      Joi.string()
          .email()
          .optional(),

  permissions:
      Joi.array()
          .items(
            Joi.string(),
          )
          .optional(),

  isActive:
      Joi.boolean()
          .optional(),
});

// =====================================
// BLOCK USER VALIDATOR
// =====================================
const blockUserValidator =
    Joi.object({

  userId:
      Joi.string()
          .required(),
});

module.exports = {

  createAdminValidator,

  updateAdminValidator,

  blockUserValidator,
};