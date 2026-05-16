const User =
    require("../models/users.model");

// =====================================
// CREATE USER
// =====================================
const createUser =
    async (payload) => {

  return await User.create({

    name:
        payload.name,

    email:
        payload.email,

    phone:
        payload.phone ||

        "",

    role:
        payload.role ||

        "USER",
  });
};

// =====================================
// GET ALL USERS
// =====================================
const getAllUsers =
    async () => {

  return await User.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET USER BY ID
// =====================================
const getUserById =
    async (id) => {

  return await User.findById(id);
};

// =====================================
// DELETE USER
// =====================================
const deleteUser =
    async (id) => {

  return await User.findByIdAndDelete(
    id,
  );
};

module.exports = {

  createUser,

  getAllUsers,

  getUserById,

  deleteUser,
};