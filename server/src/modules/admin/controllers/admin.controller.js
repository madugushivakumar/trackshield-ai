const User =
    require("../../users/models/users.model");

// =====================================
// GET ALL USERS
// =====================================
exports.getAllUsers =
    async (req, res) => {

  try {

    const users =
        await User.find()
            .select("-password");

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

// =====================================
// BLOCK USER
// =====================================
exports.blockUser =
    async (req, res) => {

  try {

    const user =
        await User.findByIdAndUpdate(

      req.params.id,

      {

        isBlocked: true,
      },

      {

        new: true,
      },
    );

    if (!user) {

      return res.status(404)
          .json({

        success: false,

        message:
            "User Not Found",
      });
    }

    res.status(200).json({

      success: true,

      message:
          "User Blocked",

      user,
    });

  } catch (e) {

    console.log(
      "Block User Error:",
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
// DELETE USER
// =====================================
exports.deleteUser =
    async (req, res) => {

  try {

    const user =
        await User.findByIdAndDelete(

      req.params.id,
    );

    if (!user) {

      return res.status(404)
          .json({

        success: false,

        message:
            "User Not Found",
      });
    }

    res.status(200).json({

      success: true,

      message:
          "User Deleted",
    });

  } catch (e) {

    console.log(
      "Delete User Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};