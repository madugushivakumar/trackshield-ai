const mongoose =
    require("mongoose");

// =====================================
// USER SCHEMA
// =====================================
const userSchema =
    new mongoose.Schema({

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

  profileImage: {

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

  lastLogin: {

    type: Date,

    default: null,
  },

  devices: [

    {

      type:
          mongoose.Schema.Types.ObjectId,

      ref: "Device",
    },
  ],

  createdAt: {

    type: Date,

    default: Date.now,
  },
});

// =====================================
// EXPORT MODEL
// =====================================
module.exports =
    mongoose.model(

      "User",

      userSchema,
    );