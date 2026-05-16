const jwt =
    require("jsonwebtoken");

// =====================================
// AUTH GUARD
// =====================================
const authGuard =
    async (

      req,
      res,
      next,
    ) => {

  try {

    // ================================
    // GET TOKEN
    // ================================
    const authHeader =
        req.headers.authorization;

    if (!authHeader) {

      return res.status(401)
          .json({

        success: false,

        message:
            "Authorization header missing",
      });
    }

    const token =
        authHeader.split(" ")[1];

    if (!token) {

      return res.status(401)
          .json({

        success: false,

        message:
            "Token missing",
      });
    }

    // ================================
    // VERIFY TOKEN
    // ================================
    const decoded =
        jwt.verify(

      token,

      process.env.JWT_SECRET,
    );

    // ================================
    // ATTACH USER
    // ================================
    req.user = {

      id:
          decoded.id,

      email:
          decoded.email,

      role:
          decoded.role,
    };

    next();

  } catch (e) {

    console.log(
      "Auth Guard Error:",
      e.message,
    );

    return res.status(401)
        .json({

      success: false,

      message:
          "Unauthorized Access",
    });
  }
};

module.exports =
    authGuard;