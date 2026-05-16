import {

  useEffect,

  useState,

} from "react";

import Sidebar from "../../components/dashboard/Sidebar";

import Topbar from "../../components/dashboard/Topbar";

import {

  getTrackingData,

} from "../../services/trackingService";

// =====================================
// TRACKING PAGE
// =====================================
const Tracking = () => {

  const [tracking, setTracking] =
    useState([]);

  // ===================================
  // LOAD TRACKING
  // ===================================
  const loadTracking =
    async () => {

      try {

        const response =
          await getTrackingData();

        setTracking(
          response.trackingData || [],
        );

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    loadTracking();

  }, []);

  return (

    <div className="flex bg-black min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-6 text-white">

          <h1 className="text-3xl font-bold mb-6">

            Tracking

          </h1>

          <div className="overflow-auto rounded-xl">

            <table className="w-full bg-zinc-900 rounded-xl">

              <thead>

                <tr className="text-left border-b border-zinc-700">

                  <th className="p-4">

                    Device ID

                  </th>

                  <th className="p-4">

                    Latitude

                  </th>

                  <th className="p-4">

                    Longitude

                  </th>

                  <th className="p-4">

                    Speed

                  </th>

                </tr>

              </thead>

              <tbody>

                {

                  tracking.map((item) => (

                    <tr
                      key={item._id}
                      className="border-b border-zinc-800"
                    >

                      <td className="p-4">

                        {item.deviceId}

                      </td>

                      <td className="p-4">

                        {item.latitude}

                      </td>

                      <td className="p-4">

                        {item.longitude}

                      </td>

                      <td className="p-4">

                        {item.speed}

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

export default Tracking;