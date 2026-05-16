const mongoose =
    require("mongoose");

// =====================================
// USERS SCHEMA
// =====================================
const usersSchema =
    new mongoose.Schema({

  name: {

    type: String,

    required: true,
  },

  email: {

    type: String,

    required: true,

    unique: true,
  },

  phone: {

    type: String,

    default: "",
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

  isActive: {

    type: Boolean,

    default: true,
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

      "Users",

      usersSchema,
    );