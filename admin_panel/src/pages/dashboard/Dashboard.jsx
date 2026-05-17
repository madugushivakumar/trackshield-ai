import StatusCard from "../../components/dashboard/StatusCard";

import AnalyticsChart from "../../components/charts/AnalyticsChart";

import {

  FaUsers,

  FaMobileAlt,

  FaExclamationTriangle,

  FaBell,

} from "react-icons/fa";

// =====================================
// DASHBOARD
// =====================================
const Dashboard = () => {

  return (

    <div>

      {/* ================================= */}
      {/* PAGE HEADER */}
      {/* ================================= */}
      <div
        style={{
          marginBottom: "30px",
        }}
      >

        <h1
          style={{

            color: "white",

            fontSize: "36px",

            fontWeight: "bold",

            marginBottom: "10px",
          }}
        >

          Enterprise Security Dashboard

        </h1>

        <p
          style={{

            color: "#94a3b8",

            fontSize: "16px",
          }}
        >

          AI-powered realtime protection system

        </p>

      </div>

      {/* ================================= */}
      {/* STATUS CARDS */}
      {/* ================================= */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(260px, 1fr))",

          gap: "24px",

          marginBottom: "35px",
        }}
      >

        {/* USERS */}
        <StatusCard
          title="Users"
          value="120"
          subtitle="Realtime monitoring users"
          color="#3b82f6"
          icon={<FaUsers />}
        />

        {/* DEVICES */}
        <StatusCard
          title="Devices"
          value="80"
          subtitle="Connected enterprise devices"
          color="#10b981"
          icon={<FaMobileAlt />}
        />

        {/* THREATS */}
        <StatusCard
          title="Threats"
          value="12"
          subtitle="AI detected threats"
          color="#ef4444"
          icon={
            <FaExclamationTriangle />
          }
        />

        {/* SOS */}
        <StatusCard
          title="SOS Alerts"
          value="5"
          subtitle="Emergency alerts active"
          color="#f59e0b"
          icon={<FaBell />}
        />

      </div>

      {/* ================================= */}
      {/* ANALYTICS CHART */}
      {/* ================================= */}
      <div
        style={{
          marginTop: "20px",
        }}
      >

        <AnalyticsChart />

      </div>

    </div>
  );
};

export default Dashboard;