import API from "./api";

// =====================================
// GET TRACKING DATA
// =====================================
export const getTrackingData =
  async () => {

    const response =
      await API.get(

        "/tracking/all",
      );

    return response.data;
  };

// =====================================
// GET DEVICE TRACKING
// =====================================
export const getDeviceTracking =
  async (deviceId) => {

    const response =
      await API.get(

        `/tracking/device/${deviceId}`,
      );

    return response.data;
  };

// =====================================
// CREATE TRACKING
// =====================================
export const createTracking =
  async (data) => {

    const response =
      await API.post(

        "/tracking/create",

        data,
      );

    return response.data;
  };