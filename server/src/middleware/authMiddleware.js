const jwt =
  require("jsonwebtoken");

// =====================================
// AUTH MIDDLEWARE
// =====================================
const authMiddleware =
  async (

    req,

    res,

    next,
  ) => {

    try {

      // =================================
      // GET AUTH HEADER
      // =================================
      const authHeader =
        req.headers.authorization;

      // =================================
      // CHECK TOKEN
      // =================================
      if (!authHeader) {

        return res.status(401)
          .json({

            success: false,

            message:
              "Access denied. No token provided",
          });
      }

      // =================================
      // EXTRACT TOKEN
      // Supports:
      // Bearer TOKEN
      // =================================
      const token =
        authHeader.startsWith("Bearer ")

          ? authHeader.split(" ")[1]

          : authHeader;

      // =================================
      // VERIFY TOKEN
      // =================================
      const decoded =
        jwt.verify(

          token,

          process.env.JWT_SECRET,
        );

      // =================================
      // ATTACH USER
      // =================================
      req.user =
        decoded;

      next();

    } catch (error) {

      console.log(

        "Auth Middleware Error:",

        error.message,
      );

      return res.status(401)
        .json({

          success: false,

          message:
            "Unauthorized access",
        });
    }
  };

module.exports =
  authMiddleware;