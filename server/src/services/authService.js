import API from "./api";

// ============================
// LOGIN
// ============================
export const login =
  async (data) => {

    return API.post(

      "/auth/login",

      data,
    );
  };

// ============================
// REGISTER
// ============================
export const register =
  async (data) => {

    return API.post(

      "/auth/register",

      data,
    );
  };