import AnalyticsChart from "../../components/charts/AnalyticsChart";

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

} from "react-icons/fa";


// =====================================
// ANALYTICS PAGE
// =====================================
const Analytics = () => {

  return (

    <div>

      {/* ================================= */}
      {/* PAGE HEADER */}
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

                fontSize: "16px",
              }}
            >

              Enterprise realtime cyber intelligence and predictive threat analytics

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

            AI MONITORING ACTIVE

          </div>

        </div>

      </div>

      {/* ================================= */}
      {/* PRIMARY STATS */}
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
          value="12,450"
          subtitle="Realtime monitoring logs"
          icon={<FaChartLine />}
          color="#2563eb"
        />

        <StatCard
          title="Protected Devices"
          value="1,280"
          subtitle="AI protected endpoints"
          icon={<FaShieldAlt />}
          color="#22c55e"
        />

        <StatCard
          title="Threats Blocked"
          value="342"
          subtitle="Critical attacks neutralized"
          icon={
            <FaExclamationTriangle />
          }
          color="#ef4444"
        />

        <StatCard
          title="Cloud Servers"
          value="48"
          subtitle="Realtime infrastructure nodes"
          icon={<FaServer />}
          color="#f59e0b"
        />

      </div>

      {/* ================================= */}
      {/* SECONDARY METRICS */}
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
          title="AI Detection Accuracy"
          value="98.9%"
          color="#8b5cf6"
        />

        <MiniCard
          icon={<FaBrain />}
          title="Predictive Intelligence"
          value="ACTIVE"
          color="#06b6d4"
        />

        <MiniCard
          icon={<FaBug />}
          title="Malware Detection"
          value="124"
          color="#dc2626"
        />

        <MiniCard
          icon={<FaLock />}
          title="Zero-Day Protection"
          value="ENABLED"
          color="#14b8a6"
        />

      </div>

      {/* ================================= */}
      {/* MAIN ANALYTICS */}
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
        {/* CHART */}
        {/* ================================= */}
        <div
          style={mainCard}
        >

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

              AI-powered realtime threat analytics engine

            </p>

          </div>

          <AnalyticsChart />

        </div>

        {/* ================================= */}
        {/* THREAT STATUS */}
        {/* ================================= */}
        <div
          style={mainCard}
        >

          <h2
            style={sectionTitle}
          >

            Threat Intelligence

          </h2>

          <div
            style={{

              marginTop: "25px",

              display: "flex",

              flexDirection:
                "column",

              gap: "18px",
            }}
          >

            <ThreatItem
              title="Critical Threats"
              value="12"
              color="#ef4444"
            />

            <ThreatItem
              title="Medium Risk"
              value="48"
              color="#f59e0b"
            />

            <ThreatItem
              title="Low Risk"
              value="120"
              color="#22c55e"
            />

            <ThreatItem
              title="AI Predictions"
              value="34"
              color="#8b5cf6"
            />

          </div>

        </div>

      </div>

      {/* ================================= */}
      {/* ADVANCED PANELS */}
      {/* ================================= */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",

          gap: "24px",
        }}
      >

        {/* ================================= */}
        {/* INFRASTRUCTURE */}
        {/* ================================= */}
        <div
          style={mainCard}
        >

          <h2
            style={sectionTitle}
          >

            Infrastructure Status

          </h2>

          <div
            style={{
              marginTop: "25px",
            }}
          >

            <InfoRow
              icon={<FaCloud />}
              title="Cloud Security"
              value="Operational"
              color="#22c55e"
            />

            <InfoRow
              icon={<FaDatabase />}
              title="Database Security"
              value="Protected"
              color="#06b6d4"
            />

            <InfoRow
              icon={<FaWifi />}
              title="Network Stability"
              value="99.9%"
              color="#f59e0b"
            />

            <InfoRow
              icon={<FaGlobe />}
              title="Global Nodes"
              value="48 Active"
              color="#8b5cf6"
            />

          </div>

        </div>

        {/* ================================= */}
        {/* AI ENGINE */}
        {/* ================================= */}
        <div
          style={mainCard}
        >

          <h2
            style={sectionTitle}
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
              value="Running"
              color="#22c55e"
            />

            <InfoRow
              icon={<FaSatelliteDish />}
              title="Threat Scanner"
              value="Active"
              color="#06b6d4"
            />

            <InfoRow
              icon={<FaFire />}
              title="Attack Prevention"
              value="Realtime"
              color="#ef4444"
            />

            <InfoRow
              icon={<FaRobot />}
              title="AI Automation"
              value="Enabled"
              color="#8b5cf6"
            />

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

        position: "relative",

        overflow: "hidden",
      }}
    >

      <div
        style={{

          position: "absolute",

          top: "-30px",

          right: "-20px",

          fontSize: "120px",

          opacity: 0.05,
        }}
      >

        {icon}

      </div>

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

          marginBottom: "10px",

          fontSize: "15px",
        }}
      >

        {title}

      </div>

      <div
        style={{

          fontSize: "42px",

          fontWeight: "bold",

          marginBottom: "10px",
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

            marginBottom: "6px",
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

        padding: "18px",

        borderRadius: "16px",

        background: "#0f172a",

        border:
          "1px solid #1e293b",
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

          borderRadius:
            "10px",

          fontWeight: "bold",
        }}
      >

        {value}

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

        alignItems: "center",

        justifyContent:
          "space-between",

        padding: "16px 0",

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

            width: "48px",

            height: "48px",

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