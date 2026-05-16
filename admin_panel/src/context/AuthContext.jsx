import {

  createContext,

  useEffect,

  useState,

} from "react";

import {

  getProfile,

  logoutUser,

} from "../services/authService";

// =====================================
// CONTEXT
// =====================================
export const AuthContext =
  createContext();

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

          if (!token) {

            setLoading(false);

            return;
          }

          const response =
            await getProfile();

          setUser(
            response.user,
          );

        } catch (error) {

          console.log(
            error,
          );

          localStorage.removeItem(
            "trackshield_token",
          );
        }

        setLoading(false);
      };

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

        logoutUser();

        setUser(null);
      };

    return (

      <AuthContext.Provider

        value={{

          user,

          login,

          logout,

          loading,
        }}
      >

        {children}

      </AuthContext.Provider>
    );
  };