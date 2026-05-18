import {
  useEffect,
  useState,
} from "react";

import AnalyticsChart from "../../components/charts/AnalyticsChart";

import {
  getAIAnalytics,
  getAIStatus,
  getRealtimeMonitor,
} from "../../services/aiService";

import {
  FaChartLine,
  FaShieldAlt,
  FaExclamationTriangle,
  FaServer,
  FaRobot,
  FaBroadcastTower,
  FaBug,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaSatelliteDish,
  FaLock,
  FaWifi,
  FaGlobe,
  FaFire,
  FaSyncAlt,
} from "react-icons/fa";

// =====================================
// ANALYTICS PAGE
// =====================================
const Analytics = () => {

  const [analytics, setAnalytics] =
    useState(null);

  const [monitor, setMonitor] =
    useState(null);

  const [aiStatus, setAIStatus] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // ===================================
  // LOAD AI DATA
  // ===================================
  const loadAIData =
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
          "AI Analytics Error:",
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

    loadAIData();

    // Realtime refresh
    const interval =
      setInterval(() => {

        loadAIData();

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

          fontSize: "24px",

          gap: "14px",
        }}
      >

        <FaSyncAlt
          className="spin"
        />

        Loading AI Analytics...

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

                fontSize: "40px",

                fontWeight: "bold",

                marginBottom: "10px",
              }}
            >

              AI Security Intelligence

            </h1>

            <p
              style={{
                color: "#94a3b8",
              }}
            >

              Enterprise realtime cyber intelligence analytics

            </p>

          </div>

          {/* LIVE STATUS */}
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
      {/* MAIN STATS */}
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

        <StatCard
          title="Security Events"
          value={
            analytics?.analytics
              ?.overview
              ?.active_alerts || 0
          }
          subtitle="Realtime AI logs"
          icon={<FaChartLine />}
          color="#2563eb"
        />

        <StatCard
          title="Protected Devices"
          value={
            analytics?.analytics
              ?.overview
              ?.total_devices || 0
          }
          subtitle="AI monitored devices"
          icon={<FaShieldAlt />}
          color="#22c55e"
        />

        <StatCard
          title="Blocked Threats"
          value={
            analytics?.analytics
              ?.overview
              ?.blocked_threats || 0
          }
          subtitle="Critical attacks stopped"
          icon={
            <FaExclamationTriangle />
          }
          color="#ef4444"
        />

        <StatCard
          title="Servers Online"
          value={
            analytics?.analytics
              ?.network
              ?.connected_servers || 0
          }
          subtitle="Cloud infrastructure"
          icon={<FaServer />}
          color="#f59e0b"
        />

      </div>

      {/* ================================= */}
      {/* AI METRICS */}
      {/* ================================= */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(230px, 1fr))",

          gap: "20px",

          marginBottom: "35px",
        }}
      >

        <MiniCard
          icon={<FaRobot />}
          title="AI Accuracy"
          value={
            analytics?.analytics
              ?.ai_metrics
              ?.prediction_accuracy ||
            "0%"
          }
          color="#8b5cf6"
        />

        <MiniCard
          icon={<FaBrain />}
          title="AI Engine"
          value={
            analytics?.analytics
              ?.ai_metrics
              ?.ai_engine_status ||
            "OFFLINE"
          }
          color="#06b6d4"
        />

        <MiniCard
          icon={<FaBug />}
          title="Threat Scanner"
          value={
            monitor?.blocked_threats ||
            0
          }
          color="#dc2626"
        />

        <MiniCard
          icon={<FaLock />}
          title="Realtime Security"
          value="ACTIVE"
          color="#14b8a6"
        />

      </div>

      {/* ================================= */}
      {/* ANALYTICS GRID */}
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

        {/* CHART */}
        <div style={mainCard}>

          <div
            style={{
              marginBottom: "25px",
            }}
          >

            <h2
              style={sectionTitle}
            >

              Threat Detection Overview

            </h2>

            <p
              style={sectionSub}
            >

              Live AI analytics engine

            </p>

          </div>

          <AnalyticsChart />

        </div>

        {/* THREATS */}
        <div style={mainCard}>

          <h2
            style={sectionTitle}
          >

            Threat Intelligence

          </h2>

          <div
            style={{
              marginTop: "25px",
            }}
          >

            {
              analytics?.analytics
                ?.threat_report?.map(
                  (
                    item,
                    index
                  ) => (

                    <ThreatItem
                      key={index}
                      title={
                        item.type
                      }
                      value={
                        item.count
                      }
                      color={
                        index === 0
                          ? "#ef4444"
                          : index === 1
                          ? "#f59e0b"
                          : index === 2
                          ? "#8b5cf6"
                          : "#22c55e"
                      }
                    />
                  )
                )
            }

          </div>

        </div>

      </div>

    </div>
  );
};

// =====================================
// STAT CARD
// =====================================
const StatCard = ({
  title,
  value,
  subtitle,
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

        borderRadius: "22px",

        padding: "26px",

        color: "white",
      }}
    >

      <div
        style={{

          width: "70px",

          height: "70px",

          borderRadius: "20px",

          background: color,

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          fontSize: "28px",

          marginBottom: "22px",
        }}
      >

        {icon}

      </div>

      <div
        style={{
          color: "#94a3b8",
        }}
      >

        {title}

      </div>

      <div
        style={{

          fontSize: "42px",

          fontWeight: "bold",

          margin: "10px 0",
        }}
      >

        {value}

      </div>

      <div
        style={{
          color: "#cbd5e1",
        }}
      >

        {subtitle}

      </div>

    </div>
  );
};

// =====================================
// MINI CARD
// =====================================
const MiniCard = ({
  icon,
  title,
  value,
  color,
}) => {

  return (

    <div
      style={{

        background: "#111827",

        border:
          "1px solid #1e293b",

        borderRadius: "18px",

        padding: "20px",

        display: "flex",

        alignItems: "center",

        gap: "18px",
      }}
    >

      <div
        style={{

          width: "58px",

          height: "58px",

          borderRadius: "16px",

          background: color,

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          color: "white",

          fontSize: "22px",
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

            fontWeight: "bold",

            fontSize: "20px",
          }}
        >

          {value}

        </div>

      </div>

    </div>
  );
};

// =====================================
// THREAT ITEM
// =====================================
const ThreatItem = ({
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

        padding: "16px",

        background: "#0f172a",

        borderRadius: "14px",

        border:
          "1px solid #1e293b",

        marginBottom: "14px",
      }}
    >

      <div
        style={{
          color: "#cbd5e1",
        }}
      >

        {title}

      </div>

      <div
        style={{

          background: color,

          color: "white",

          padding:
            "8px 14px",

          borderRadius: "10px",

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
const mainCard = {

  background:
    "linear-gradient(to bottom right, #111827, #0f172a)",

  borderRadius: "22px",

  padding: "26px",

  border:
    "1px solid #1e293b",
};

const sectionTitle = {

  color: "white",

  fontSize: "24px",

  marginBottom: "8px",
};

const sectionSub = {

  color: "#94a3b8",
};

export default Analytics;