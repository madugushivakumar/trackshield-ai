const bcrypt =
  require("bcryptjs");

const jwt =
  require("jsonwebtoken");

const User =
  require(
    "../models/auth.model",
  );

// =====================================
// GENERATE TOKEN
// =====================================
const generateToken =
  (id) => {

    return jwt.sign(

      {
        id,
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "7d",
      },
    );
  };

// =====================================
// REGISTER
// =====================================
const register =
  async (req, res) => {

    try {

      const {
        name,
        email,
        password,
      } = req.body;

      // =========================
      // VALIDATION
      // =========================
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

      // =========================
      // CHECK EXISTING USER
      // =========================
      const existingUser =
        await User.findOne({

          email:
            email.toLowerCase(),
        });

      if (existingUser) {

        return res.status(400)
          .json({

            success: false,

            message:
              "User already exists",
          });
      }

      // =========================
      // HASH PASSWORD
      // =========================
      const hashedPassword =
        await bcrypt.hash(

          password,

          10,
        );

      // =========================
      // CREATE USER
      // =========================
      const user =
        await User.create({

          name,

          email:
            email.toLowerCase(),

          password:
            hashedPassword,
        });

      // =========================
      // TOKEN
      // =========================
      const token =
        generateToken(
          user._id,
        );

      // =========================
      // RESPONSE
      // =========================
      res.status(201).json({

        success: true,

        message:
          "Registration successful",

        token,

        user: {

          _id:
            user._id,

          name:
            user.name,

          email:
            user.email,
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
const login =
  async (req, res) => {

    try {

      const {
        email,
        password,
      } = req.body;

      // =========================
      // VALIDATION
      // =========================
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

      // =========================
      // FIND USER
      // =========================
      const user =
        await User.findOne({

          email:
            email.toLowerCase(),
        });

      if (!user) {

        return res.status(400)
          .json({

            success: false,

            message:
              "Invalid credentials",
          });
      }

      // =========================
      // CHECK PASSWORD
      // =========================
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

      // =========================
      // TOKEN
      // =========================
      const token =
        generateToken(
          user._id,
        );

      // =========================
      // RESPONSE
      // =========================
      res.status(200).json({

        success: true,

        message:
          "Login successful",

        token,

        user: {

          _id:
            user._id,

          name:
            user.name,

          email:
            user.email,
        },
      });

    } catch (error) {

      console.log(
        "Login Error:",
        error.message,
      );

      res.status(500)
        .json({

          success: false,

          message:
            "Server Error",
        });
    }
  };

// =====================================
// PROFILE
// =====================================
const profile =
  async (req, res) => {

    try {

      const user =
        await User.findById(

          req.user.id,
        ).select(
          "-password",
        );

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

module.exports = {

  register,

  login,

  profile,
};