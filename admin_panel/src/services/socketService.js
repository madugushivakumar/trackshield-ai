import { io } from "socket.io-client";

// =====================================
// SOCKET INSTANCE
// =====================================
const socket = io(

  "http://localhost:5000",

  {

    transports: ["websocket"],

    autoConnect: false,
  },
);

// =====================================
// CONNECT SOCKET
// =====================================
export const connectSocket =
  () => {

    if (!socket.connected) {

      socket.connect();

      console.log(
        "Socket Connected",
      );
    }
  };

// =====================================
// DISCONNECT SOCKET
// =====================================
export const disconnectSocket =
  () => {

    if (socket.connected) {

      socket.disconnect();

      console.log(
        "Socket Disconnected",
      );
    }
  };

// =====================================
// GET SOCKET
// =====================================
export default socket;