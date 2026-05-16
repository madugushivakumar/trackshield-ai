import axios from "axios";

// =====================================
// API INSTANCE
// =====================================
const API = axios.create({

  baseURL:
    "http://localhost:5000/api",

  headers: {

    "Content-Type":
      "application/json",
  },
});

// =====================================
// REQUEST INTERCEPTOR
// =====================================
API.interceptors.request.use(

  (config) => {

    const token =
      localStorage.getItem(
        "trackshield_token",
      );

    // ================================
    // ADD TOKEN
    // ================================
    if (token) {

      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },

  (error) => {

    return Promise.reject(error);
  },
);

// =====================================
// RESPONSE INTERCEPTOR
// =====================================
API.interceptors.response.use(

  (response) => {

    return response;
  },

  (error) => {

    // ================================
    // UNAUTHORIZED
    // ================================
    if (

      error.response &&

      error.response.status === 401
    ) {

      localStorage.removeItem(
        "trackshield_token",
      );

      localStorage.removeItem(
        "trackshield_user",
      );

      window.location.href = "/";
    }

    return Promise.reject(error);
  },
);

export default API;