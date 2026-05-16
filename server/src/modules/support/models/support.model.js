const mongoose =
    require("mongoose");

// =====================================
// SUPPORT SCHEMA
// =====================================
const supportSchema =
    new mongoose.Schema({

  userId: {

    type: String,

    required: true,
  },

  subject: {

    type: String,

    required: true,
  },

  message: {

    type: String,

    required: true,
  },

  priority: {

    type: String,

    enum: [

      "LOW",

      "MEDIUM",

      "HIGH",

      "CRITICAL",
    ],

    default: "MEDIUM",
  },

  status: {

    type: String,

    enum: [

      "OPEN",

      "IN_PROGRESS",

      "RESOLVED",
    ],

    default: "OPEN",
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

      "Support",

      supportSchema,
    );