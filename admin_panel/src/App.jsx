import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// =====================================
// AUTH
// =====================================
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
// =====================================
// LAYOUT
// =====================================
import MainLayout from "./layouts/MainLayout";

// =====================================
// PAGES
// =====================================
import Dashboard from "./pages/dashboard/Dashboard";

import Users from "./pages/users/Users";

import Devices from "./pages/devices/Devices";

import Tracking from "./pages/tracking/Tracking";

import Alerts from "./pages/alerts/Alerts";

import SOSAlerts from "./pages/sos/SOSAlerts";

import Analytics from "./pages/analytics/Analytics";

import Settings from "./pages/settings/Settings";

import Security from "./pages/security/Security";

// =====================================
// AUTH HOOK
// =====================================
import useAuth from "./hooks/useAuth";

// =====================================
// PROTECTED ROUTE
// =====================================
const ProtectedRoute = ({
  children,
}) => {

  const {
    user,
    loading,
  } = useAuth();

  // ===================================
  // LOADING SCREEN
  // ===================================
  if (loading) {

    return (

      <div
        style={{

          height: "100vh",

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          background: "#020817",

          color: "white",

          fontSize: "24px",

          fontWeight: "bold",
        }}
      >

        Loading...

      </div>
    );
  }

  // ===================================
  // NOT LOGGED IN
  // ===================================
  if (!user) {

    return <Navigate to="/" replace />;
  }

  return children;
};

// =====================================
// APP
// =====================================
function App() {

  return (

    <Routes>

      {/* ================================= */}
      {/* LOGIN */}
      {/* ================================= */}
      <Route
        path="/"
        element={<Login />}
      />
      <Route
  path="/signup"
  element={<Signup />}
/>

      {/* ================================= */}
      {/* PROTECTED LAYOUT */}
      {/* ================================= */}
      <Route
        element={

          <ProtectedRoute>

            <MainLayout />

          </ProtectedRoute>
        }
      >

        {/* DEFAULT */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* USERS */}
        <Route
          path="/users"
          element={<Users />}
        />

        {/* DEVICES */}
        <Route
          path="/devices"
          element={<Devices />}
        />

        {/* TRACKING */}
        <Route
          path="/tracking"
          element={<Tracking />}
        />

        {/* ALERTS */}
        <Route
          path="/alerts"
          element={<Alerts />}
        />

        {/* SOS */}
        <Route
          path="/sos"
          element={<SOSAlerts />}
        />

        {/* ANALYTICS */}
        <Route
          path="/analytics"
          element={<Analytics />}
        />

        {/* SECURITY */}
        <Route
          path="/security"
          element={<Security />}
        />

        {/* SETTINGS */}
        <Route
          path="/settings"
          element={<Settings />}
        />

      </Route>

      {/* ================================= */}
      {/* 404 */}
      {/* ================================= */}
      <Route
        path="*"
        element={

          <div
            style={{

              height: "100vh",

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              background: "#020817",

              color: "white",

              fontSize: "42px",

              fontWeight: "bold",
            }}
          >

            404 Page Not Found

          </div>
        }
      />

    </Routes>
  );
}

export default App;