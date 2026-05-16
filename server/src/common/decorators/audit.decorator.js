const auditDecorator =
    (action) => {

  return async (

    req,
    res,
    next,
  ) => {

    try {

      console.log(

        `[AUDIT] ${action}`,

        {

          user:
              req.user?.id ||

              "UNKNOWN",

          method:
              req.method,

          route:
              req.originalUrl,

          ip:
              req.ip,

          timestamp:
              new Date(),
        },
      );

      next();

    } catch (e) {

      console.log(

        "Audit Error:",
        e.message,
      );

      next();
    }
  };
};

module.exports =
    auditDecorator;