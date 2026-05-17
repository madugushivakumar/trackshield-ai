import React from "react";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import App from "./App";

import "./index.css";

// =====================================
// CONTEXT
// =====================================
import {
  AuthProvider,
} from "./context/AuthContext";

import {
  SocketProvider,
} from "./context/SocketContext";

import {
  ThemeProvider,
} from "./context/ThemeContext";

// =====================================
// ROOT
// =====================================
ReactDOM.createRoot(

  document.getElementById("root"),

).render(

  <React.StrictMode>

    <BrowserRouter>

      <ThemeProvider>

        <AuthProvider>

          <SocketProvider>

            <App />

          </SocketProvider>

        </AuthProvider>

      </ThemeProvider>

    </BrowserRouter>

  </React.StrictMode>,
);