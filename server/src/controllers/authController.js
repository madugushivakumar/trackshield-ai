const bcrypt =
  require("bcryptjs");

const jwt =
  require("jsonwebtoken");

const User =
  require("../models/User");

// =====================================
// GENERATE JWT TOKEN
// =====================================
const generateToken =
  (user) => {

    return jwt.sign(

      {

        id:
          user._id,

        email:
          user.email,
      },

      process.env.JWT_SECRET,

      {

        expiresIn:
          "7d",
      },
    );
  };

// =====================================
// REGISTER
// =====================================
exports.register =
  async (req, res) => {

    console.log(
      "REGISTER BODY:",
      req.body,
    );

    try {

      // ==============================
      // VALIDATE BODY
      // ==============================
      if (!req.body) {

        return res.status(400)
          .json({

            success: false,

            message:
              "Request body missing",
          });
      }

      const {

        name,

        email,

        password,
      } = req.body;

      // ==============================
      // CHECK REQUIRED FIELDS
      // ==============================
      if (

        !name ||

        !email ||

        !password
      ) {

        return res.status(400)
          .json({

            success: false,

            message:
              "All fields are required",
          });
      }

      // ==============================
      // CHECK EXISTING USER
      // ==============================
      const existingUser =
        await User.findOne({

          email,
        });

      if (existingUser) {

        return res.status(400)
          .json({

            success: false,

            message:
              "User already exists",
          });
      }

      // ==============================
      // HASH PASSWORD
      // ==============================
      const hashedPassword =
        await bcrypt.hash(

          password,

          10,
        );

      // ==============================
      // CREATE USER
      // ==============================
      const user =
        await User.create({

          name,

          email,

          password:
            hashedPassword,
        });

      // ==============================
      // TOKEN
      // ==============================
      const token =
        generateToken(user);

      // ==============================
      // RESPONSE
      // ==============================
      res.status(201).json({

        success: true,

        message:
          "User registered successfully",

        token,

        user: {

          id:
            user._id,

          name:
            user.name,

          email:
            user.email,

          role:
            user.role,
        },
      });

    } catch (error) {

      console.log(

        "Register Error:",

        error.message,
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",
      });
    }
  };

// =====================================
// LOGIN
// =====================================
exports.login =
  async (req, res) => {

    console.log(
      "LOGIN BODY:",
      req.body,
    );

    try {

      // ==============================
      // VALIDATE BODY
      // ==============================
      if (!req.body) {

        return res.status(400)
          .json({

            success: false,

            message:
              "Request body missing",
          });
      }

      const {

        email,

        password,
      } = req.body;

      // ==============================
      // CHECK REQUIRED FIELDS
      // ==============================
      if (

        !email ||

        !password
      ) {

        return res.status(400)
          .json({

            success: false,

            message:
              "Email and password required",
          });
      }

      // ==============================
      // FIND USER
      // ==============================
      const user =
        await User.findOne({

          email,
        });

      if (!user) {

        return res.status(400)
          .json({

            success: false,

            message:
              "Invalid credentials",
          });
      }

      // ==============================
      // COMPARE PASSWORD
      // ==============================
      const isMatch =
        await bcrypt.compare(

          password,

          user.password,
        );

      if (!isMatch) {

        return res.status(400)
          .json({

            success: false,

            message:
              "Invalid credentials",
          });
      }

      // ==============================
      // TOKEN
      // ==============================
      const token =
        generateToken(user);

      // ==============================
      // UPDATE LAST LOGIN
      // ==============================
      user.lastLogin =
        new Date();

      await user.save();

      // ==============================
      // RESPONSE
      // ==============================
      res.status(200).json({

        success: true,

        message:
          "Login successful",

        token,

        user: {

          id:
            user._id,

          name:
            user.name,

          email:
            user.email,

          role:
            user.role,
        },
      });

    } catch (error) {

      console.log(

        "Login Error:",

        error.message,
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",
      });
    }
  };

// =====================================
// GET PROFILE
// =====================================
exports.getProfile =
  async (req, res) => {

    try {

      const user =
        await User.findById(

          req.user.id,
        ).select("-password");

      if (!user) {

        return res.status(404)
          .json({

            success: false,

            message:
              "User not found",
          });
      }

      res.status(200).json({

        success: true,

        user,
      });

    } catch (error) {

      console.log(

        "Profile Error:",

        error.message,
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",
      });
    }
  };