const mongoose =
    require("mongoose");

// =====================================
// HEALTH SCHEMA
// =====================================
const healthSchema =
    new mongoose.Schema({

  service: {

    type: String,

    required: true,
  },

  status: {

    type: String,

    enum: [

      "HEALTHY",

      "WARNING",

      "CRITICAL",
    ],

    default: "HEALTHY",
  },

  cpuUsage: {

    type: Number,

    default: 0,
  },

  memoryUsage: {

    type: Number,

    default: 0,
  },

  diskUsage: {

    type: Number,

    default: 0,
  },

  uptime: {

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

      "Health",

      healthSchema,
    );