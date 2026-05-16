const Joi =
    require("joi");

// =====================================
// ADD FAMILY MEMBER VALIDATOR
// =====================================
const addFamilyMemberValidator =
    Joi.object({

  userId:
      Joi.string()
          .required(),

  memberName:
      Joi.string()
          .min(2)
          .max(100)
          .required(),

  relationship:
      Joi.string()
          .required(),

  phone:
      Joi.string()
          .required(),

  email:
      Joi.string()
          .email()
          .optional(),

  isEmergencyContact:
      Joi.boolean()
          .optional(),
});

// =====================================
// UPDATE FAMILY MEMBER VALIDATOR
// =====================================
const updateFamilyMemberValidator =
    Joi.object({

  memberName:
      Joi.string()
          .min(2)
          .max(100)
          .optional(),

  relationship:
      Joi.string()
          .optional(),

  phone:
      Joi.string()
          .optional(),

  email:
      Joi.string()
          .email()
          .optional(),

  isEmergencyContact:
      Joi.boolean()
          .optional(),
});

module.exports = {

  addFamilyMemberValidator,

  updateFamilyMemberValidator,
};