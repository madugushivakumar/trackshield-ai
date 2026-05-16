import {

  createContext,

  useEffect,

  useState,

} from "react";

import socket from "../socket/socket";

// =====================================
// SOCKET CONTEXT
// =====================================
export const SocketContext =
  createContext({

    socket: null,

    connected: false,
  });

// =====================================
// SOCKET PROVIDER
// =====================================
export const SocketProvider =
  ({ children }) => {

    const [connected, setConnected] =
      useState(false);

    // =================================
    // SOCKET EVENTS
    // =================================
    useEffect(() => {

      // ===============================
      // CONNECT
      // ===============================
      socket.on(

        "connect",

        () => {

          console.log(

            "Socket Connected:",
            socket.id,
          );

          setConnected(true);
        },
      );

      // ===============================
      // DISCONNECT
      // ===============================
      socket.on(

        "disconnect",

        () => {

          console.log(
            "Socket Disconnected",
          );

          setConnected(false);
        },
      );

      // ===============================
      // CONNECTION ERROR
      // ===============================
      socket.on(

        "connect_error",

        (error) => {

          console.log(

            "Socket Error:",

            error.message,
          );
        },
      );

      // ===============================
      // CLEANUP
      // ===============================
      return () => {

        socket.off("connect");

        socket.off("disconnect");

        socket.off("connect_error");
      };

    }, []);

    return (

      <SocketContext.Provider

        value={{

          socket,

          connected,
        }}
      >

        {children}

      </SocketContext.Provider>
    );
  };