let io;

// =====================================
// INITIALIZE SOCKET
// =====================================
const initSocket =
    (socketIo) => {

  io = socketIo;
};

// =====================================
// GET SOCKET INSTANCE
// =====================================
const getIO =
    () => {

  if (!io) {

    throw new Error(
      "Socket.io not initialized",
    );
  }

  return io;
};

// =====================================
// EMIT EVENT
// =====================================
const emitEvent =
    (

      event,

      data,
    ) => {

  io.emit(

    event,

    data,
  );
};

module.exports = {

  initSocket,

  getIO,

  emitEvent,
};