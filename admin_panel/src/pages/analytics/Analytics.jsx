import Sidebar from "../../components/dashboard/Sidebar";

import Topbar from "../../components/dashboard/Topbar";

import AnalyticsChart from "../../components/charts/AnalyticsChart";

// =====================================
// ANALYTICS PAGE
// =====================================
const Analytics = () => {

  return (

    <div className="flex bg-black min-h-screen">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <div className="p-6 text-white">

          <h1 className="text-3xl font-bold mb-6">

            Analytics

          </h1>

          <AnalyticsChart />

        </div>

      </div>

    </div>
  );
};

export default Analytics;