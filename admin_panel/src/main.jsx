import React from "react";

import ReactDOM from "react-dom/client";

import App from "./App";


// =====================================
// CONTEXT PROVIDERS
// =====================================
import {

  AuthProvider,

} from "./context/AuthContext";

import {

  SocketProvider,

} from "./context/SocketContext";

// =====================================
// ROOT
// =====================================
ReactDOM.createRoot(

  document.getElementById("root"),

).render(

  <React.StrictMode>

    {/* AUTH */}
    <AuthProvider>

      {/* SOCKET */}
      <SocketProvider>

        <App />

      </SocketProvider>

    </AuthProvider>

  </React.StrictMode>,
);