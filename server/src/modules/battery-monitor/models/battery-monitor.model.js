const mongoose =
    require("mongoose");

// =====================================
// BATTERY SCHEMA
// =====================================
const batterySchema =
    new mongoose.Schema({

  deviceId: {

    type: String,

    required: true,
  },

  batteryLevel: {

    type: Number,

    required: true,

    min: 0,

    max: 100,
  },

  charging: {

    type: Boolean,

    default: false,
  },

  temperature: {

    type: Number,

    default: 0,
  },

  health: {

    type: String,

    enum: [

      "GOOD",

      "NORMAL",

      "LOW",

      "CRITICAL",
    ],

    default: "GOOD",
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

      "Battery",

      batterySchema,
    );