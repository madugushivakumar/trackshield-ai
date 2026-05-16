const { Server } =
    require("socket.io");

// =====================================
// SOCKET INITIALIZER
// =====================================
const initializeSocket =
    (server) => {

  const io =
      new Server(server, {

    cors: {

      origin:
          process.env.CLIENT_URL ||

          "*",

      credentials: true,
    },

    transports: [

      "websocket",

      "polling",
    ],
  });

  // ===================================
  // CONNECTION
  // ===================================
  io.on(

    "connection",

    (socket) => {

      console.log(

        `Socket Connected: ${socket.id}`,
      );

      // ===============================
      // JOIN DEVICE ROOM
      // ===============================
      socket.on(

        "join-device",

        (deviceId) => {

          socket.join(deviceId);

          console.log(

            `Joined Device Room: ${deviceId}`,
          );
        },
      );

      // ===============================
      // LIVE LOCATION
      // ===============================
      socket.on(

        "live-location",

        (payload) => {

          io.to(
            payload.deviceId,
          ).emit(

            "location-update",

            payload,
          );
        },
      );

      // ===============================
      // SECURITY ALERT
      // ===============================
      socket.on(

        "security-alert",

        (payload) => {

          io.emit(

            "security-alert",

            payload,
          );
        },
      );

      // ===============================
      // SOS ALERT
      // ===============================
      socket.on(

        "sos-alert",

        (payload) => {

          io.emit(

            "sos-alert",

            payload,
          );
        },
      );

      // ===============================
      // DISCONNECT
      // ===============================
      socket.on(

        "disconnect",

        () => {

          console.log(

            `Socket Disconnected: ${socket.id}`,
          );
        },
      );
    },
  );

  return io;
};

module.exports =
    initializeSocket;