const mongoose =
    require("mongoose");

// =====================================
// AI THREAT SCHEMA
// =====================================
const aiThreatSchema =
    new mongoose.Schema({

  deviceId: {

    type: String,

    required: true,
  },

  threatType: {

    type: String,

    required: true,

    enum: [

      "SIM_SWAP",

      "INTRUDER",

      "FACE_INTRUSION",

      "VOICE_SOS",

      "DEVICE_THEFT",

      "MALWARE",

      "GPS_TAMPERING",

      "REMOTE_ACCESS",
    ],
  },

  severity: {

    type: String,

    required: true,

    enum: [

      "LOW",

      "MEDIUM",

      "HIGH",

      "CRITICAL",
    ],

    default: "MEDIUM",
  },

  message: {

    type: String,

    required: true,
  },

  resolved: {

    type: Boolean,

    default: false,
  },

  metadata: {

    type: Object,

    default: {},
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

      "AIThreat",

      aiThreatSchema,
    );