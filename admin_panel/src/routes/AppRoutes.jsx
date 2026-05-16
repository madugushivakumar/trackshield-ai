import {

  BrowserRouter,

  Routes,

  Route,

  Navigate,

} from "react-router-dom";

import Login from "../pages/auth/Login";

import Dashboard from "../pages/dashboard/Dashboard";

import Users from "../pages/users/Users";

import Devices from "../pages/devices/Devices";

import Tracking from "../pages/tracking/Tracking";

import Alerts from "../pages/alerts/Alerts";

import Analytics from "../pages/analytics/Analytics";

import Settings from "../pages/settings/Settings";

import SOSAlerts from "../pages/sos/SOSAlerts";

import useAuth from "../hooks/useAuth";

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

  if (loading) {

    return null;
  }

  if (!user) {

    return <Navigate to="/" />;
  }

  return children;
};

// =====================================
// APP ROUTES
// =====================================
const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={<Login />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

        {/* USERS */}
        <Route
          path="/users"
          element={

            <ProtectedRoute>

              <Users />

            </ProtectedRoute>
          }
        />

        {/* DEVICES */}
        <Route
          path="/devices"
          element={

            <ProtectedRoute>

              <Devices />

            </ProtectedRoute>
          }
        />

        {/* TRACKING */}
        <Route
          path="/tracking"
          element={

            <ProtectedRoute>

              <Tracking />

            </ProtectedRoute>
          }
        />

        {/* ALERTS */}
        <Route
          path="/alerts"
          element={

            <ProtectedRoute>

              <Alerts />

            </ProtectedRoute>
          }
        />

        {/* ANALYTICS */}
        <Route
          path="/analytics"
          element={

            <ProtectedRoute>

              <Analytics />

            </ProtectedRoute>
          }
        />

        {/* SETTINGS */}
        <Route
          path="/settings"
          element={

            <ProtectedRoute>

              <Settings />

            </ProtectedRoute>
          }
        />

        {/* SOS */}
        <Route
          path="/sos"
          element={

            <ProtectedRoute>

              <SOSAlerts />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;