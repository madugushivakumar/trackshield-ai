import API from "./api";

// =====================================
// GET DEVICES
// =====================================
export const getDevices =
  async () => {

    const response =
      await API.get(

        "/devices/all",
      );

    return response.data;
  };

// =====================================
// CREATE DEVICE
// =====================================
export const createDevice =
  async (data) => {

    const response =
      await API.post(

        "/devices/create",

        data,
      );

    return response.data;
  };

// =====================================
// DELETE DEVICE
// =====================================
export const deleteDevice =
  async (id) => {

    const response =
      await API.delete(

        `/devices/delete/${id}`,
      );

    return response.data;
  };