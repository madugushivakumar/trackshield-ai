const mongoose =
    require("mongoose");

// =====================================
// TRACKING SCHEMA
// =====================================
const trackingSchema =
    new mongoose.Schema({

  deviceId: {

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

  speed: {

    type: Number,

    default: 0,
  },

  accuracy: {

    type: Number,

    default: 0,
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

      "Tracking",

      trackingSchema,
    );