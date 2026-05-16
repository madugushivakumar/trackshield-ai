const mongoose =
    require("mongoose");

// =====================================
// REMOTE CONTROL SCHEMA
// =====================================
const remoteControlSchema =
    new mongoose.Schema({

  deviceId: {

    type: String,

    required: true,
  },

  command: {

    type: String,

    enum: [

      "LOCK_DEVICE",

      "WIPE_DEVICE",

      "PLAY_SIREN",

      "TAKE_PHOTO",

      "TRACK_DEVICE",
    ],

    required: true,
  },

  status: {

    type: String,

    enum: [

      "PENDING",

      "EXECUTED",

      "FAILED",
    ],

    default: "PENDING",
  },

  issuedBy: {

    type: String,

    required: true,
  },

  metadata: {

    type: Object,

    default: {},
  },

  executedAt: {

    type: Date,

    default: null,
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

      "RemoteControl",

      remoteControlSchema,
    );