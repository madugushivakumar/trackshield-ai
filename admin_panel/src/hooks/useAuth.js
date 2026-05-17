import {
  useContext,
} from "react";

import {
  AuthContext,
} from "../context/AuthContext";

// =====================================
// USE AUTH HOOK
// =====================================
const useAuth = () => {

  const context =
    useContext(AuthContext);

  // ===================================
  // SAFETY CHECK
  // ===================================
  if (!context) {

    console.error(
      "useAuth must be used inside AuthProvider",
    );

    return {

      user: null,

      loading: false,

      login: () => {},

      logout: () => {},
    };
  }

  return context;
};

export default useAuth;