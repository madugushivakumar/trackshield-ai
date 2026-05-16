const Family =
    require("../models/family.model");

// =====================================
// ADD FAMILY MEMBER
// =====================================
exports.addFamilyMember =
    async (req, res) => {

  try {

    const member =
        await Family.create({

      userId:
          req.body.userId,

      memberName:
          req.body.memberName,

      relationship:
          req.body.relationship,

      phone:
          req.body.phone,

      email:
          req.body.email,
    });

    res.status(201).json({

      success: true,

      member,
    });

  } catch (e) {

    console.log(
      "Add Family Member Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};

// =====================================
// GET FAMILY MEMBERS
// =====================================
exports.getFamilyMembers =
    async (req, res) => {

  try {

    const members =
        await Family.find()
            .sort({

              createdAt: -1,
            });

    res.status(200).json({

      success: true,

      members,
    });

  } catch (e) {

    console.log(
      "Get Family Members Error:",
      e.message,
    );

    res.status(500).json({

      success: false,

      message:
          "Server Error",
    });
  }
};