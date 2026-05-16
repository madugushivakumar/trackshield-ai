const mongoose =
    require("mongoose");

// =====================================
// NETWORK MONITOR SCHEMA
// =====================================
const networkMonitorSchema =
    new mongoose.Schema({

  deviceId: {

    type: String,

    required: true,
  },

  networkType: {

    type: String,

    enum: [

      "WIFI",

      "MOBILE_DATA",

      "ETHERNET",

      "UNKNOWN",
    ],

    default: "UNKNOWN",
  },

  ipAddress: {

    type: String,

    default: "",
  },

  macAddress: {

    type: String,

    default: "",
  },

  signalStrength: {

    type: Number,

    default: 0,
  },

  isVpnEnabled: {

    type: Boolean,

    default: false,
  },

  isConnected: {

    type: Boolean,

    default: true,
  },

  suspiciousActivity: {

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

      "NetworkMonitor",

      networkMonitorSchema,
    );