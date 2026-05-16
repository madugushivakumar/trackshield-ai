const Joi =
    require("joi");

// =====================================
// HEALTH STATUS VALIDATOR
// =====================================
const healthValidator =
    Joi.object({

  service:
      Joi.string()
          .required(),

  status:
      Joi.string()
          .valid(

            "HEALTHY",

            "WARNING",

            "CRITICAL",
          )
          .required(),

  cpuUsage:
      Joi.number()
          .optional(),

  memoryUsage:
      Joi.number()
          .optional(),

  diskUsage:
      Joi.number()
          .optional(),

  uptime:
      Joi.number()
          .optional(),
});

module.exports = {

  healthValidator,
};