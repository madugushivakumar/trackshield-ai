const mongoose =
    require("mongoose");

// =====================================
// NOTIFICATION SCHEMA
// =====================================
const notificationsSchema =
    new mongoose.Schema({

  userId: {

    type: String,

    required: true,
  },

  title: {

    type: String,

    required: true,
  },

  message: {

    type: String,

    required: true,
  },

  type: {

    type: String,

    enum: [

      "SECURITY",

      "SOS",

      "TRACKING",

      "BATTERY",

      "SYSTEM",
    ],

    default: "SYSTEM",
  },

  priority: {

    type: String,

    enum: [

      "LOW",

      "MEDIUM",

      "HIGH",

      "CRITICAL",
    ],

    default: "MEDIUM",
  },

  isRead: {

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

      "Notification",

      notificationsSchema,
    );