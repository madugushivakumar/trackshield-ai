import Sidebar from "../../components/dashboard/Sidebar";

import Topbar from "../../components/dashboard/Topbar";

// =====================================
// ALERTS PAGE
// =====================================
const Alerts = () => {

  return (

    <div className="flex bg-black min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-6 text-white">

          <h1 className="text-3xl font-bold mb-6">

            Security Alerts

          </h1>

          <div className="bg-zinc-900 p-5 rounded-xl">

            No alerts available

          </div>

        </div>

      </div>

    </div>
  );
};

export default Alerts;