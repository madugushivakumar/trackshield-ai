// =====================================
// SAVE TOKEN
// =====================================
export const saveToken =
  (token) => {

    localStorage.setItem(

      "trackshield_token",

      token,
    );
  };

// =====================================
// GET TOKEN
// =====================================
export const getToken =
  () => {

    return localStorage.getItem(

      "trackshield_token",
    );
  };

// =====================================
// REMOVE TOKEN
// =====================================
export const removeToken =
  () => {

    localStorage.removeItem(

      "trackshield_token",
    );
  };

// =====================================
// SAVE USER
// =====================================
export const saveUser =
  (user) => {

    localStorage.setItem(

      "trackshield_user",

      JSON.stringify(user),
    );
  };

// =====================================
// GET USER
// =====================================
export const getUser =
  () => {

    const user =
      localStorage.getItem(

        "trackshield_user",
      );

    return user
      ? JSON.parse(user)
      : null;
  };