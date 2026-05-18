import {
  useEffect,
  useState,
} from "react";

import StatusCard from "../../components/dashboard/StatusCard";

import AnalyticsChart from "../../components/charts/AnalyticsChart";

import {
  getAIAnalytics,
  getRealtimeMonitor,
  getAIStatus,
} from "../../services/aiService";

import {

  FaUsers,

  FaMobileAlt,

  FaExclamationTriangle,

  FaBell,

  FaBrain,

  FaShieldAlt,

  FaBroadcastTower,

  FaServer,

  FaDatabase,

  FaCloud,

  FaWifi,

  FaLock,

  FaRobot,

  FaSyncAlt,

} from "react-icons/fa";

// =====================================
// DASHBOARD
// =====================================
const Dashboard = () => {

  const [analytics, setAnalytics] =
    useState(null);

  const [monitor, setMonitor] =
    useState(null);

  const [aiStatus, setAIStatus] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // ===================================
  // LOAD DATA
  // ===================================
  const loadDashboard =
    async () => {

      try {

        setLoading(true);

        const analyticsData =
          await getAIAnalytics();

        const monitorData =
          await getRealtimeMonitor();

        const statusData =
          await getAIStatus();

        setAnalytics(
          analyticsData
        );

        setMonitor(
          monitorData
        );

        setAIStatus(
          statusData
        );

      } catch (error) {

        console.log(
          "Dashboard Error:",
          error
        );

      } finally {

        setLoading(false);
      }
    };

  // ===================================
  // INITIAL LOAD
  // ===================================
  useEffect(() => {

    loadDashboard();

    const interval =
      setInterval(() => {

        loadDashboard();

      }, 10000);

    return () =>
      clearInterval(interval);

  }, []);

  // ===================================
  // LOADING
  // ===================================
  if (loading) {

    return (

      <div
        style={{

          height: "80vh",

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          color: "white",

          gap: "12px",

          fontSize: "22px",
        }}
      >

        <FaSyncAlt
          className="spin"
        />

        Loading Enterprise Dashboard...

      </div>
    );
  }

  return (

    <div>

      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}
      <div
        style={{
          marginBottom: "35px",
        }}
      >

        <div
          style={{

            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            flexWrap: "wrap",

            gap: "20px",
          }}
        >

          <div>

            <h1
              style={{

                color: "white",

                fontSize: "38px",

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

              AI-powered realtime enterprise protection

            </p>

          </div>

          {/* AI STATUS */}
          <div
            style={{

              display: "flex",

              alignItems: "center",

              gap: "12px",

              background: "#111827",

              border:
                "1px solid #1e293b",

              padding:
                "14px 20px",

              borderRadius: "16px",

              color: "#4ade80",

              fontWeight: "bold",
            }}
          >

            <FaBroadcastTower />

            {
              aiStatus?.engine ||
              "ACTIVE"
            }

          </div>

        </div>

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

        <StatusCard
          title="Users"
          value={
            analytics?.analytics
              ?.overview
              ?.active_users || 0
          }
          subtitle="Realtime active users"
          color="#3b82f6"
          icon={<FaUsers />}
        />

        <StatusCard
          title="Devices"
          value={
            analytics?.analytics
              ?.overview
              ?.total_devices || 0
          }
          subtitle="Protected AI devices"
          color="#10b981"
          icon={<FaMobileAlt />}
        />

        <StatusCard
          title="Threats"
          value={
            analytics?.analytics
              ?.overview
              ?.blocked_threats || 0
          }
          subtitle="Threats neutralized"
          color="#ef4444"
          icon={
            <FaExclamationTriangle />
          }
        />

        <StatusCard
          title="SOS Alerts"
          value={
            monitor?.active_alerts || 0
          }
          subtitle="Emergency alerts active"
          color="#f59e0b"
          icon={<FaBell />}
        />

      </div>

      {/* ================================= */}
      {/* AI METRICS */}
      {/* ================================= */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",

          gap: "20px",

          marginBottom: "35px",
        }}
      >

        <MetricCard
          title="AI Accuracy"
          value={
            analytics?.analytics
              ?.ai_metrics
              ?.prediction_accuracy ||
            "0%"
          }
          icon={<FaBrain />}
          color="#8b5cf6"
        />

        <MetricCard
          title="Threat Detection"
          value="ACTIVE"
          icon={<FaShieldAlt />}
          color="#22c55e"
        />

        <MetricCard
          title="Servers Online"
          value={
            analytics?.analytics
              ?.network
              ?.connected_servers || 0
          }
          icon={<FaServer />}
          color="#06b6d4"
        />

        <MetricCard
          title="Realtime Scanner"
          value="RUNNING"
          icon={<FaRobot />}
          color="#f97316"
        />

      </div>

      {/* ================================= */}
      {/* MAIN GRID */}
      {/* ================================= */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "2fr 1fr",

          gap: "24px",

          marginBottom: "35px",
        }}
      >

        {/* ================================= */}
        {/* ANALYTICS */}
        {/* ================================= */}
        <div style={cardStyle}>

          <div
            style={{
              marginBottom: "25px",
            }}
          >

            <h2
              style={titleStyle}
            >

              Threat Analytics

            </h2>

            <p
              style={subStyle}
            >

              Live enterprise AI monitoring

            </p>

          </div>

          <AnalyticsChart />

        </div>

        {/* ================================= */}
        {/* AI STATUS */}
        {/* ================================= */}
        <div style={cardStyle}>

          <h2
            style={titleStyle}
          >

            AI Engine Status

          </h2>

          <div
            style={{
              marginTop: "25px",
            }}
          >

            <InfoRow
              icon={<FaBrain />}
              title="Neural Engine"
              value="ONLINE"
              color="#22c55e"
            />

            <InfoRow
              icon={<FaDatabase />}
              title="Database"
              value="CONNECTED"
              color="#06b6d4"
            />

            <InfoRow
              icon={<FaCloud />}
              title="Cloud Security"
              value="ACTIVE"
              color="#8b5cf6"
            />

            <InfoRow
              icon={<FaWifi />}
              title="Network"
              value="STABLE"
              color="#f59e0b"
            />

            <InfoRow
              icon={<FaLock />}
              title="Protection"
              value="ENABLED"
              color="#ef4444"
            />

          </div>

        </div>

      </div>

    </div>
  );
};

// =====================================
// METRIC CARD
// =====================================
const MetricCard = ({
  title,
  value,
  icon,
  color,
}) => {

  return (

    <div
      style={{

        background:
          "linear-gradient(to bottom right, #111827, #0f172a)",

        border:
          "1px solid #1e293b",

        borderRadius: "20px",

        padding: "22px",

        display: "flex",

        alignItems: "center",

        gap: "18px",
      }}
    >

      <div
        style={{

          width: "60px",

          height: "60px",

          borderRadius: "16px",

          background: color,

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          color: "white",

          fontSize: "24px",
        }}
      >

        {icon}

      </div>

      <div>

        <div
          style={{
            color: "#94a3b8",
          }}
        >

          {title}

        </div>

        <div
          style={{

            color: "white",

            fontSize: "24px",

            fontWeight: "bold",
          }}
        >

          {value}

        </div>

      </div>

    </div>
  );
};

// =====================================
// INFO ROW
// =====================================
const InfoRow = ({
  icon,
  title,
  value,
  color,
}) => {

  return (

    <div
      style={{

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        padding: "14px 0",

        borderBottom:
          "1px solid #1e293b",
      }}
    >

      <div
        style={{

          display: "flex",

          alignItems: "center",

          gap: "14px",
        }}
      >

        <div
          style={{

            width: "46px",

            height: "46px",

            borderRadius:
              "14px",

            background: color,

            display: "flex",

            justifyContent:
              "center",

            alignItems:
              "center",

            color: "white",
          }}
        >

          {icon}

        </div>

        <div
          style={{
            color: "#cbd5e1",
          }}
        >

          {title}

        </div>

      </div>

      <div
        style={{

          color: "white",

          fontWeight: "bold",
        }}
      >

        {value}

      </div>

    </div>
  );
};

// =====================================
// STYLES
// =====================================
const cardStyle = {

  background:
    "linear-gradient(to bottom right, #111827, #0f172a)",

  borderRadius: "22px",

  padding: "26px",

  border:
    "1px solid #1e293b",
};

const titleStyle = {

  color: "white",

  fontSize: "24px",

  marginBottom: "8px",
};

const subStyle = {

  color: "#94a3b8",
};

export default Dashboard;