const User =
    require("../../users/models/users.model");

const Admin =
    require("../models/admin.model");

// =====================================
// GET DASHBOARD STATS
// =====================================
const getDashboardStats =
    async () => {

  const totalUsers =
      await User.countDocuments();

  const totalAdmins =
      await Admin.countDocuments();

  const activeUsers =
      await User.countDocuments({

        isBlocked: false,
      });

  const blockedUsers =
      await User.countDocuments({

        isBlocked: true,
      });

  return {

    totalUsers,

    totalAdmins,

    activeUsers,

    blockedUsers,
  };
};

// =====================================
// BLOCK USER
// =====================================
const blockUserById =
    async (userId) => {

  return await User.findByIdAndUpdate(

    userId,

    {

      isBlocked: true,
    },

    {

      new: true,
    },
  );
};

// =====================================
// DELETE USER
// =====================================
const deleteUserById =
    async (userId) => {

  return await User.findByIdAndDelete(
    userId,
  );
};

module.exports = {

  getDashboardStats,

  blockUserById,

  deleteUserById,
};