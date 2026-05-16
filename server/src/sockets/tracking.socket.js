module.exports =
    (io) => {

  io.on(

    "connection",

    (socket) => {

      // =============================
      // TRACKING UPDATE
      // =============================
      socket.on(

        "tracking-update",

        (data) => {

          io.emit(

            "tracking-data",

            data,
          );
        },
      );
    },
  );
};