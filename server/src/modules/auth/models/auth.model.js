const mongoose =
  require("mongoose");

// =====================================
// AUTH USER SCHEMA
// =====================================
const authSchema =
  new mongoose.Schema(

    {
      name: {

        type: String,

        required: true,

        trim: true,
      },

      email: {

        type: String,

        required: true,

        unique: true,

        lowercase: true,

        trim: true,
      },

      password: {

        type: String,

        required: true,
      },

      role: {

        type: String,

        enum: [

          "USER",

          "ADMIN",

          "SECURITY",
        ],

        default: "USER",
      },

      phone: {

        type: String,

        default: "",
      },

      isVerified: {

        type: Boolean,

        default: false,
      },

      isBlocked: {

        type: Boolean,

        default: false,
      },

      loginAttempts: {

        type: Number,

        default: 0,
      },

      lastLogin: {

        type: Date,

        default: null,
      },

      refreshToken: {

        type: String,

        default: "",
      },
    },

    {
      timestamps: true,
    },
  );

// =====================================
// REMOVE PASSWORD FROM RESPONSE
// =====================================
authSchema.methods.toJSON =
  function () {

    const user =
      this.toObject();

    delete user.password;

    return user;
  };

// =====================================
// EXPORT MODEL
// =====================================
module.exports =
  mongoose.model(

    "AuthUser",

    authSchema,
  );