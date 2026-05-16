const mongoose =
    require("mongoose");

// =====================================
// REPORT SCHEMA
// =====================================
const reportsSchema =
    new mongoose.Schema({

  deviceId: {

    type: String,

    required: true,
  },

  reportType: {

    type: String,

    enum: [

      "SECURITY",

      "THREAT",

      "BATTERY",

      "NETWORK",

      "TRACKING",

      "SOS",
    ],

    required: true,
  },

  title: {

    type: String,

    required: true,
  },

  description: {

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

    default: "MEDIUM",
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

      "Report",

      reportsSchema,
    );