const express =
    require("express");

const router =
    express.Router();

const authMiddleware =
    require(

      "../../../middleware/authMiddleware",
    );

const {

  createRemoteCommand,

  getRemoteCommands,

} = require(

  "../controllers/remote-control.controller",
);

// =====================================
// CREATE REMOTE COMMAND
// =====================================
router.post(

  "/create",

  authMiddleware,

  createRemoteCommand,
);

// =====================================
// GET REMOTE COMMANDS
// =====================================
router.get(

  "/all",

  authMiddleware,

  getRemoteCommands,
);

module.exports =
    router;