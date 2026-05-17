import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  getProfile,
} from "../services/authService";

// =====================================
// CONTEXT
// =====================================
export const AuthContext =
  createContext(null);

// =====================================
// PROVIDER
// =====================================
export const AuthProvider =
  ({ children }) => {

    const [user, setUser] =
      useState(null);

    const [loading, setLoading] =
      useState(true);

    // =================================
    // LOAD USER
    // =================================
    const loadUser =
      async () => {

        try {

          const token =
            localStorage.getItem(
              "trackshield_token",
            );

          // =============================
          // NO TOKEN
          // =============================
          if (!token) {

            setLoading(false);

            return;
          }

          // =============================
          // GET PROFILE
          // =============================
          const response =
            await getProfile();

          if (
            response &&
            response.user
          ) {

            setUser(
              response.user,
            );
          }

        } catch (error) {

          console.log(
            "Auth Load Error:",
            error,
          );

          // =============================
          // CLEAR INVALID TOKEN
          // =============================
          localStorage.removeItem(
            "trackshield_token",
          );

          localStorage.removeItem(
            "trackshield_user",
          );

          setUser(null);

        } finally {

          setLoading(false);
        }
      };

    // =================================
    // INITIAL LOAD
    // =================================
    useEffect(() => {

      loadUser();

    }, []);

    // =================================
    // LOGIN
    // =================================
    const login =
      (
        token,
        userData,
      ) => {

        localStorage.setItem(
          "trackshield_token",
          token,
        );

        localStorage.setItem(
          "trackshield_user",
          JSON.stringify(
            userData,
          ),
        );

        setUser(userData);
      };

    // =================================
    // LOGOUT
    // =================================
    const logout =
      () => {

        localStorage.removeItem(
          "trackshield_token",
        );

        localStorage.removeItem(
          "trackshield_user",
        );

        setUser(null);

        window.location.href = "/";
      };

    return (

      <AuthContext.Provider
        value={{

          user,

          loading,

          login,

          logout,
        }}
      >

        {children}

      </AuthContext.Provider>
    );
  };