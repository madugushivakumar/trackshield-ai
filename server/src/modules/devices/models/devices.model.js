const mongoose =
    require("mongoose");

// =====================================
// DEVICE SCHEMA
// =====================================
const devicesSchema =
    new mongoose.Schema({

  deviceId: {

    type: String,

    required: true,

    unique: true,
  },

  deviceName: {

    type: String,

    required: true,
  },

  platform: {

    type: String,

    enum: [

      "ANDROID",

      "IOS",

      "WEB",
    ],

    default: "ANDROID",
  },

  owner: {

    type: String,

    required: true,
  },

  status: {

    type: String,

    enum: [

      "ONLINE",

      "OFFLINE",

      "LOCKED",

      "STOLEN",
    ],

    default: "ONLINE",
  },

  batteryLevel: {

    type: Number,

    default: 100,
  },

  latitude: {

    type: Number,

    default: 0,
  },

  longitude: {

    type: Number,

    default: 0,
  },

  lastSeen: {

    type: Date,

    default: Date.now,
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

      "Device",

      devicesSchema,
    );