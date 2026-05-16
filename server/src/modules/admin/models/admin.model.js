const mongoose =
    require("mongoose");

// =====================================
// ADMIN SCHEMA
// =====================================
const adminSchema =
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
  },

  password: {

    type: String,

    required: true,
  },

  role: {

    type: String,

    default: "ADMIN",
  },

  permissions: [

    {

      type: String,
    },
  ],

  isActive: {

    type: Boolean,

    default: true,
  },

  lastLogin: {

    type: Date,

    default: null,
  },

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

      "Admin",

      adminSchema,
    );