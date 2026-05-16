const Family =
    require("../models/family.model");

// =====================================
// ADD MEMBER
// =====================================
const addMember =
    async (payload) => {

  return await Family.create({

    userId:
        payload.userId,

    memberName:
        payload.memberName,

    relationship:
        payload.relationship,

    phone:
        payload.phone,

    email:
        payload.email ||

        "",

    isEmergencyContact:
        payload.isEmergencyContact ||

        false,
  });
};

// =====================================
// GET ALL MEMBERS
// =====================================
const getAllMembers =
    async () => {

  return await Family.find()
      .sort({

        createdAt: -1,
      });
};

// =====================================
// GET USER MEMBERS
// =====================================
const getUserMembers =
    async (userId) => {

  return await Family.find({

    userId,
  });
};

// =====================================
// DELETE MEMBER
// =====================================
const deleteMember =
    async (id) => {

  return await Family.findByIdAndDelete(
    id,
  );
};

module.exports = {

  addMember,

  getAllMembers,

  getUserMembers,

  deleteMember,
};