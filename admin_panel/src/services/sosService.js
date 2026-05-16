import API from "./api";

// =====================================
// GET ALL SOS ALERTS
// =====================================
export const getSOSAlerts =
  async () => {

    const response =
      await API.get(

        "/sos/all",
      );

    return response.data;
  };

// =====================================
// CREATE SOS ALERT
// =====================================
export const createSOSAlert =
  async (data) => {

    const response =
      await API.post(

        "/sos/create",

        data,
      );

    return response.data;
  };

// =====================================
// RESOLVE SOS ALERT
// =====================================
export const resolveSOSAlert =
  async (id) => {

    const response =
      await API.put(

        `/sos/resolve/${id}`,
      );

    return response.data;
  };