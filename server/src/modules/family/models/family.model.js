const mongoose =
    require("mongoose");

// =====================================
// FAMILY SCHEMA
// =====================================
const familySchema =
    new mongoose.Schema({

  userId: {

    type: String,

    required: true,
  },

  memberName: {

    type: String,

    required: true,
  },

  relationship: {

    type: String,

    required: true,
  },

  phone: {

    type: String,

    required: true,
  },

  email: {

    type: String,

    default: "",
  },

  isEmergencyContact: {

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

      "Family",

      familySchema,
    );