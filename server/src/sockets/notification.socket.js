module.exports =
    (io) => {

  io.on(

    "connection",

    (socket) => {

      // =============================
      // SEND NOTIFICATION
      // =============================
      socket.on(

        "send-notification",

        (data) => {

          io.emit(

            "receive-notification",

            data,
          );
        },
      );
    },
  );
};