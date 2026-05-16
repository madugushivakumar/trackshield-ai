const mongoose =
    require("mongoose");

// =====================================
// GEOFENCE SCHEMA
// =====================================
const geofenceSchema =
    new mongoose.Schema({

  deviceId: {

    type: String,

    required: true,
  },

  name: {

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

  radius: {

    type: Number,

    required: true,
  },

  active: {

    type: Boolean,

    default: true,
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

      "Geofence",

      geofenceSchema,
    );