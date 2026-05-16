module.exports =
    (io) => {

  io.on(

    "connection",

    (socket) => {

      console.log(

        "Socket Connected:",

        socket.id,
      );

      // =============================
      // DISCONNECT
      // =============================
      socket.on(

        "disconnect",

        () => {

          console.log(

            "Socket Disconnected:",

            socket.id,
          );
        },
      );
    },
  );
};