import {

  useEffect,

  useState,

} from "react";

import Sidebar from "../../components/dashboard/Sidebar";

import Topbar from "../../components/dashboard/Topbar";

import {

  getDevices,

} from "../../services/devicesService";

// =====================================
// DEVICES PAGE
// =====================================
const Devices = () => {

  const [devices, setDevices] =
    useState([]);

  // ===================================
  // LOAD DEVICES
  // ===================================
  const loadDevices =
    async () => {

      try {

        const response =
          await getDevices();

        setDevices(
          response.devices || [],
        );

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    loadDevices();

  }, []);

  return (

    <div className="flex bg-black min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-6 text-white">

          <h1 className="text-3xl font-bold mb-6">

            Devices

          </h1>

          <div className="overflow-auto rounded-xl">

            <table className="w-full bg-zinc-900 rounded-xl">

              <thead>

                <tr className="text-left border-b border-zinc-700">

                  <th className="p-4">

                    Device Name

                  </th>

                  <th className="p-4">

                    Device ID

                  </th>

                  <th className="p-4">

                    Status

                  </th>

                </tr>

              </thead>

              <tbody>

                {

                  devices.map((device) => (

                    <tr
                      key={device._id}
                      className="border-b border-zinc-800"
                    >

                      <td className="p-4">

                        {device.deviceName}

                      </td>

                      <td className="p-4">

                        {device.deviceId}

                      </td>

                      <td className="p-4">

                        {device.status}

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

export default Devices;