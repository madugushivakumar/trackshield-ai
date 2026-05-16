import {

  useEffect,

  useState,

} from "react";

import Sidebar from "../../components/dashboard/Sidebar";

import Topbar from "../../components/dashboard/Topbar";

import {

  getSOSAlerts,

} from "../../services/sosService";

// =====================================
// SOS ALERTS PAGE
// =====================================
const SOSAlerts = () => {

  const [alerts, setAlerts] =
    useState([]);

  // ===================================
  // LOAD SOS ALERTS
  // ===================================
  const loadAlerts =
    async () => {

      try {

        const response =
          await getSOSAlerts();

        setAlerts(
          response.sosAlerts || [],
        );

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    loadAlerts();

  }, []);

  return (

    <div className="flex bg-black min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-6 text-white">

          <h1 className="text-3xl font-bold mb-6">

            SOS Alerts

          </h1>

          <div className="overflow-auto rounded-xl">

            <table className="w-full bg-zinc-900 rounded-xl">

              <thead>

                <tr className="text-left border-b border-zinc-700">

                  <th className="p-4">

                    Device ID

                  </th>

                  <th className="p-4">

                    Emergency Type

                  </th>

                  <th className="p-4">

                    Message

                  </th>

                </tr>

              </thead>

              <tbody>

                {

                  alerts.map((alert) => (

                    <tr
                      key={alert._id}
                      className="border-b border-zinc-800"
                    >

                      <td className="p-4">

                        {alert.deviceId}

                      </td>

                      <td className="p-4">

                        {alert.emergencyType}

                      </td>

                      <td className="p-4">

                        {alert.message}

                      </td>

                    </tr>
                  ))
                }

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SOSAlerts;