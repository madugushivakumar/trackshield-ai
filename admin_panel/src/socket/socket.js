import { io } from "socket.io-client";

// =====================================
// SOCKET INSTANCE
// =====================================
const socket = io(

  "http://localhost:5000",

  {

    autoConnect: false,

    transports: ["websocket"],
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
        "Socket Connecting...",
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

export default socket;