const mongoose =
    require("mongoose");

// =====================================
// ANALYTICS SCHEMA
// =====================================
const analyticsSchema =
    new mongoose.Schema({

  deviceId: {

    type: String,

    required: true,
  },

  type: {

    type: String,

    required: true,

    enum: [

      "TRACKING",

      "THREAT",

      "SOS",

      "SECURITY",

      "BATTERY",

      "NETWORK",
    ],
  },

  value: {

    type: Number,

    required: true,
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

      "Analytics",

      analyticsSchema,
    );