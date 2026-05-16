const mongoose =
    require("mongoose");

// =====================================
// SOS SCHEMA
// =====================================
const sosSchema =
    new mongoose.Schema({

  deviceId: {

    type: String,

    required: true,
  },

  userId: {

    type: String,

    required: true,
  },

  latitude: {

    type: Number,

    required: true,
  },

  longitude: {

    type: Number,

    required: true,
  },

  message: {

    type: String,

    default: "Emergency SOS Triggered",
  },

  emergencyType: {

    type: String,

    enum: [

      "MEDICAL",

      "THEFT",

      "ACCIDENT",

      "FIRE",

      "OTHER",
    ],

    default: "OTHER",
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

      "SOS",

      sosSchema,
    );