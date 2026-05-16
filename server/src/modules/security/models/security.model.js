const mongoose =
    require("mongoose");

// =====================================
// SECURITY SCHEMA
// =====================================
const securitySchema =
    new mongoose.Schema({

  deviceId: {

    type: String,

    required: true,
  },

  eventType: {

    type: String,

    enum: [

      "LOGIN_ATTEMPT",

      "DEVICE_LOCK",

      "INTRUDER",

      "SIM_SWAP",

      "ROOT_DETECTED",

      "VPN_DETECTED",
    ],

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

  description: {

    type: String,

    required: true,
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

      "Security",

      securitySchema,
    );