const mongoose =
    require("mongoose");

// =====================================
// INTRUDER SCHEMA
// =====================================
const intruderSchema =
    new mongoose.Schema({

  deviceId: {

    type: String,

    required: true,
  },

  imageUrl: {

    type: String,

    required: true,
  },

  severity: {

    type: String,

    enum: [

      "LOW",

      "MEDIUM",

      "HIGH",

      "CRITICAL",
    ],

    default: "HIGH",
  },

  location: {

    type: String,

    default: "",
  },

  detectedAt: {

    type: Date,

    default: Date.now,
  },

  resolved: {

    type: Boolean,

    default: false,
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

      "Intruder",

      intruderSchema,
    );