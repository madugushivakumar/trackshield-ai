const mongoose =
    require("mongoose");

// =====================================
// SIM MONITOR SCHEMA
// =====================================
const simMonitorSchema =
    new mongoose.Schema({

  deviceId: {

    type: String,

    required: true,
  },

  simOperator: {

    type: String,

    default: "",
  },

  simSerial: {

    type: String,

    default: "",
  },

  phoneNumber: {

    type: String,

    default: "",
  },

  eventType: {

    type: String,

    enum: [

      "SIM_INSERTED",

      "SIM_REMOVED",

      "SIM_CHANGED",

      "SIM_SWAP",
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

    default: "HIGH",
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

      "SimMonitor",

      simMonitorSchema,
    );