import API from "./api";

// =====================================
// GET ALL USERS
// =====================================
export const getUsers =
  async () => {

    const response =
      await API.get(

        "/users/all",
      );

    return response.data;
  };

// =====================================
// CREATE USER
// =====================================
export const createUser =
  async (data) => {

    const response =
      await API.post(

        "/users/create",

        data,
      );

    return response.data;
  };

// =====================================
// DELETE USER
// =====================================
export const deleteUser =
  async (id) => {

    const response =
      await API.delete(

        `/users/delete/${id}`,
      );

    return response.data;
  };