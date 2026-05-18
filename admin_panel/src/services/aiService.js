import axios from "axios";

// =====================================
// AI ENGINE API
// =====================================
const AI_API =
  "http://127.0.0.1:8000/api/ai";

// =====================================
// GET AI STATUS
// =====================================
export const getAIStatus =
  async () => {

    try {

      const response =
        await axios.get(
          `${AI_API}/status`
        );

      return response.data;

    } catch (error) {

      console.log(
        "AI Status Error:",
        error
      );

      return null;
    }
  };

// =====================================
// GET ANALYTICS
// =====================================
export const getAIAnalytics =
  async () => {

    try {

      const response =
        await axios.get(
          `${AI_API}/analytics`
        );

      return response.data;

    } catch (error) {

      console.log(
        "Analytics Error:",
        error
      );

      return null;
    }
  };

// =====================================
// REALTIME MONITOR
// =====================================
export const getRealtimeMonitor =
  async () => {

    try {

      const response =
        await axios.get(
          `${AI_API}/monitor`
        );

      return response.data;

    } catch (error) {

      console.log(
        "Monitor Error:",
        error
      );

      return null;
    }
  };

// =====================================
// THREAT DETECTION
// =====================================
export const detectThreat =
  async (payload) => {

    try {

      const response =
        await axios.post(

          `${AI_API}/detect-threat`,

          payload
        );

      return response.data;

    } catch (error) {

      console.log(
        "Threat Detection Error:",
        error
      );

      return null;
    }
  };

// =====================================
// ANOMALY DETECTION
// =====================================
export const detectAnomaly =
  async (payload) => {

    try {

      const response =
        await axios.post(

          `${AI_API}/anomaly`,

          payload
        );

      return response.data;

    } catch (error) {

      console.log(
        "Anomaly Error:",
        error
      );

      return null;
    }
  };