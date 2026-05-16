const mongoose =
    require("mongoose");

// =====================================
// AUDIT SCHEMA
// =====================================
const auditSchema =
    new mongoose.Schema({

  userId: {

    type: String,

    required: true,
  },

  action: {

    type: String,

    required: true,
  },

  module: {

    type: String,

    required: true,
  },

  ipAddress: {

    type: String,

    default: "",
  },

  metadata: {

    type: Object,

    default: {},
  },

  severity: {

    type: String,

    enum: [

      "LOW",

      "MEDIUM",

      "HIGH",

      "CRITICAL",
    ],

    default: "LOW",
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

      "Audit",

      auditSchema,
    );