const User =
  require("../models/users.model");

// =====================================
// CREATE USER
// =====================================
exports.createUser =
  async (req, res) => {

    try {

      const {

        name,

        email,

        phone,

        role,

      } = req.body;

      const user =
        await User.create({

          name,

          email,

          phone,

          role,
        });

      res.status(201).json({

        success: true,

        message:
          "User created successfully",

        user,
      });

    } catch (e) {

      console.log(

        "Create User Error:",

        e.message,
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",
      });
    }
  };

// =====================================
// GET USERS
// =====================================
exports.getUsers =
  async (req, res) => {

    try {

      const users =
        await User.find()
          .sort({

            createdAt: -1,
          });

      res.status(200).json({

        success: true,

        count:
          users.length,

        users,
      });

    } catch (e) {

      console.log(

        "Get Users Error:",

        e.message,
      );

      res.status(500).json({

        success: false,

        message:
          "Server Error",
      });
    }
  };