const bcrypt =
    require("bcryptjs");

const jwt =
    require("jsonwebtoken");

const User =
    require("../models/auth.model");

// =====================================
// REGISTER USER
// =====================================
const registerUser =
    async (payload) => {

  const existingUser =
      await User.findOne({

    email:
        payload.email,
  });

  if (existingUser) {

    throw new Error(
      "User already exists",
    );
  }

  // ================================
  // HASH PASSWORD
  // ================================
  const hashedPassword =
      await bcrypt.hash(

    payload.password,

    12,
  );

  // ================================
  // CREATE USER
  // ================================
  const user =
      await User.create({

    name:
        payload.name,

    email:
        payload.email,

    password:
        hashedPassword,
  });

  return user;
};

// =====================================
// LOGIN USER
// =====================================
const loginUser =
    async (

      email,

      password,
    ) => {

  const user =
      await User.findOne({

    email,
  });

  if (!user) {

    throw new Error(
      "Invalid credentials",
    );
  }

  // ================================
  // CHECK PASSWORD
  // ================================
  const isMatch =
      await bcrypt.compare(

    password,

    user.password,
  );

  if (!isMatch) {

    throw new Error(
      "Invalid credentials",
    );
  }

  // ================================
  // JWT TOKEN
  // ================================
  const token =
      jwt.sign(

    {

      id:
          user._id,

      email:
          user.email,

      role:
          user.role,
    },

    process.env.JWT_SECRET,

    {

      expiresIn:
          "7d",
    },
  );

  return {

    token,

    user,
  };
};

// =====================================
// GET PROFILE
// =====================================
const getProfile =
    async (userId) => {

  return await User.findById(
    userId,
  ).select("-password");
};

module.exports = {

  registerUser,

  loginUser,

  getProfile,
};