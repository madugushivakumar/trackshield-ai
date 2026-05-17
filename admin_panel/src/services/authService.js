import axios from "axios";

// =====================================
// API BASE URL
// =====================================
const API =
  "http://localhost:5000/api/auth";

// =====================================
// AXIOS INSTANCE
// =====================================
const authAPI =
  axios.create({

    baseURL: API,

    headers: {

      "Content-Type":
        "application/json",
    },
  });

// =====================================
// REGISTER USER
// =====================================
export const registerUser =
  async (formData) => {

    try {

      const response =
        await authAPI.post(

          "/register",

          formData,
        );

      return response.data;

    } catch (error) {

      console.log(

        "Register Service Error:",

        error,
      );

      throw error;
    }
  };

// =====================================
// LOGIN USER
// =====================================
export const loginUser =
  async (formData) => {

    try {

      const response =
        await authAPI.post(

          "/login",

          formData,
        );

      return response.data;

    } catch (error) {

      console.log(

        "Login Service Error:",

        error,
      );

      throw error;
    }
  };

// =====================================
// GET PROFILE
// =====================================
export const getProfile =
  async () => {

    try {

      const token =
        localStorage.getItem(
          "trackshield_token",
        );

      const response =
        await authAPI.get(

          "/profile",

          {

            headers: {

              Authorization:
                `Bearer ${token}`,
            },
          },
        );

      return response.data;

    } catch (error) {

      console.log(

        "Profile Service Error:",

        error,
      );

      throw error;
    }
  };

// =====================================
// LOGOUT USER
// =====================================
export const logoutUser =
  () => {

    localStorage.removeItem(
      "trackshield_token",
    );

    localStorage.removeItem(
      "trackshield_user",
    );

    window.location.href = "/";
  };

// =====================================
// SAVE AUTH DATA
// =====================================
export const saveAuthData =
  (token, user) => {

    localStorage.setItem(

      "trackshield_token",

      token,
    );

    localStorage.setItem(

      "trackshield_user",

      JSON.stringify(user),
    );
  };

// =====================================
// GET STORED USER
// =====================================
export const getStoredUser =
  () => {

    const user =
      localStorage.getItem(
        "trackshield_user",
      );

    return user
      ? JSON.parse(user)
      : null;
  };