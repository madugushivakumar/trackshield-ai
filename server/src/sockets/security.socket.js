module.exports =
    (io) => {

  io.on(

    "connection",

    (socket) => {

      // =============================
      // SECURITY ALERT
      // =============================
      socket.on(

        "security-alert",

        (data) => {

          io.emit(

            "security-warning",

            data,
          );
        },
      );
    },
  );
};