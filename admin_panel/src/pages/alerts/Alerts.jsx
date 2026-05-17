import {

  useEffect,

  useMemo,

  useState,

} from "react";

import {

  FaExclamationTriangle,

  FaShieldAlt,

  FaSearch,

  FaSyncAlt,

  FaBug,

  FaFire,

  FaBroadcastTower,

  FaServer,

  FaLock,

  FaGlobe,

  FaRobot,

  FaDatabase,

  FaUserSecret,

  FaWifi,

  FaSatelliteDish,

  FaClock,

  FaSkullCrossbones,

} from "react-icons/fa";


// =====================================
// MOCK ALERTS
// =====================================
const mockAlerts = [

  {

    id: 1,

    type: "Malware Attack",

    severity: "Critical",

    source: "Server Node 12",

    status: "Active",

    description:
      "AI detected malicious ransomware activity inside enterprise network.",

    time: "2 mins ago",
  },

  {

    id: 2,

    type: "Unauthorized Access",

    severity: "High",

    source: "Admin Dashboard",

    status: "Blocked",

    description:
      "Multiple unauthorized login attempts detected from unknown location.",

    time: "8 mins ago",
  },

  {

    id: 3,

    type: "Firewall Breach",

    severity: "Medium",

    source: "Cloud Infrastructure",

    status: "Monitoring",

    description:
      "Suspicious traffic identified by realtime AI firewall system.",

    time: "15 mins ago",
  },

  {

    id: 4,

    type: "Data Leak Attempt",

    severity: "Critical",

    source: "Database Cluster",

    status: "Active",

    description:
      "Sensitive enterprise data transfer blocked automatically.",

    time: "22 mins ago",
  },
];

// =====================================
// ALERTS PAGE
// =====================================
const Alerts = () => {

  const [alerts, setAlerts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  // ===================================
  // LOAD ALERTS
  // ===================================
  const loadAlerts =
    async () => {

      setLoading(true);

      setTimeout(() => {

        setAlerts(mockAlerts);

        setLoading(false);

      }, 1200);
    };

  // ===================================
  // AUTO REFRESH
  // ===================================
  useEffect(() => {

    loadAlerts();

    const interval =
      setInterval(() => {

        loadAlerts();

      }, 10000);

    return () =>
      clearInterval(interval);

  }, []);

  // ===================================
  // FILTER
  // ===================================
  const filteredAlerts =
    useMemo(() => {

      return alerts.filter(
        (alert) =>

          alert.type
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ) ||

          alert.severity
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ) ||

          alert.source
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ),
      );
    }, [

      alerts,

      search,
    ]);

  // ===================================
  // STATS
  // ===================================
  const criticalCount =
    alerts.filter(
      (a) =>
        a.severity ===
        "Critical",
    ).length;

  const activeThreats =
    alerts.filter(
      (a) =>
        a.status === "Active",
    ).length;

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

              AI Threat Intelligence Center

            </h1>

            <p
              style={{
                color: "#94a3b8",

                fontSize: "16px",
              }}
            >

              Enterprise realtime cyber attack monitoring and defense analytics

            </p>

          </div>

          {/* LIVE STATUS */}
          <div
            style={{

              display: "flex",

              alignItems: "center",

              gap: "12px",

              background:
                "#111827",

              border:
                "1px solid #ef4444",

              padding:
                "14px 20px",

              borderRadius:
                "16px",

              color: "#f87171",

              fontWeight:
                "bold",
            }}
          >

            <FaBroadcastTower />

            LIVE THREAT MONITORING

          </div>

        </div>

      </div>

      {/* ================================= */}
      {/* STATS */}
      {/* ================================= */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",

          gap: "24px",

          marginBottom: "35px",
        }}
      >

        <StatCard
          title="Total Threats"
          value={alerts.length}
          subtitle="Detected cyber attacks"
          icon={<FaBug />}
          color="#ef4444"
        />

        <StatCard
          title="Critical Threats"
          value={criticalCount}
          subtitle="High-risk incidents"
          icon={<FaFire />}
          color="#dc2626"
        />

        <StatCard
          title="Active Threats"
          value={activeThreats}
          subtitle="Realtime attack activity"
          icon={
            <FaExclamationTriangle />
          }
          color="#f59e0b"
        />

        <StatCard
          title="Protected Systems"
          value="1,284"
          subtitle="AI-secured endpoints"
          icon={<FaShieldAlt />}
          color="#22c55e"
        />

      </div>

      {/* ================================= */}
      {/* SECURITY PANEL */}
      {/* ================================= */}
      <div
        style={{

          background:
            "linear-gradient(to right, #111827, #0f172a)",

          border:
            "1px solid #1e293b",

          borderRadius: "22px",

          padding: "24px",

          marginBottom: "30px",

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",

          gap: "20px",
        }}
      >

        <SecurityInfo
          icon={<FaLock />}
          title="Firewall Security"
          value="ACTIVE"
          color="#22c55e"
        />

        <SecurityInfo
          icon={<FaDatabase />}
          title="Database Shield"
          value="PROTECTED"
          color="#06b6d4"
        />

        <SecurityInfo
          icon={<FaRobot />}
          title="AI Detection Engine"
          value="RUNNING"
          color="#8b5cf6"
        />

        <SecurityInfo
          icon={<FaSatelliteDish />}
          title="Threat Scanner"
          value="LIVE"
          color="#f59e0b"
        />

      </div>

      {/* ================================= */}
      {/* CONTROLS */}
      {/* ================================= */}
      <div
        style={{

          display: "flex",

          gap: "15px",

          marginBottom: "30px",

          flexWrap: "wrap",
        }}
      >

        {/* SEARCH */}
        <div
          style={{
            position: "relative",
            flex: 1,
            minWidth: "280px",
          }}
        >

          <FaSearch
            style={{

              position: "absolute",

              left: "15px",

              top: "16px",

              color: "#64748b",
            }}
          />

          <input
            type="text"
            placeholder="Search cyber threats..."
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value,
              )
            }
            style={{

              width: "95%",

              padding:
                "14px 14px 14px 40px",

              background:
                "#111827",

              border:
                "1px solid #1e293b",

              borderRadius:
                "14px",

              color: "white",

              outline: "none",
            }}
          />

        </div>

        {/* REFRESH */}
        <button
          onClick={loadAlerts}
          style={{

            padding:
              "14px 18px",

            background:
              "#ef4444",

            border: "none",

            borderRadius:
              "14px",

            color: "white",

            cursor: "pointer",

            fontWeight:
              "bold",

            display: "flex",

            alignItems:
              "center",

            gap: "10px",
          }}
        >

          <FaSyncAlt />

          Refresh

        </button>

      </div>

      {/* ================================= */}
      {/* ALERTS LIST */}
      {/* ================================= */}
      <div
        style={{

          display: "flex",

          flexDirection:
            "column",

          gap: "24px",
        }}
      >

        {

          loading ? (

            <div
              style={loadingStyle}
            >

              Loading AI threat intelligence...

            </div>

          ) : filteredAlerts.length === 0 ? (

            <div
              style={loadingStyle}
            >

              No threats detected

            </div>

          ) : (

            filteredAlerts.map(
              (alert) => (

                <ThreatCard
                  key={alert.id}
                  alert={alert}
                />
              ),
            )
          )
        }

      </div>

    </div>
  );
};

// =====================================
// THREAT CARD
// =====================================
const ThreatCard = ({
  alert,
}) => {

  const severityColor =
    alert.severity ===
    "Critical"
      ? "#dc2626"
      : alert.severity ===
        "High"
      ? "#f59e0b"
      : "#3b82f6";

  return (

    <div
      style={{

        background:
          "linear-gradient(to right, #111827, #0f172a)",

        border:
          `1px solid ${severityColor}`,

        borderRadius:
          "24px",

        padding:
          "28px",

        color: "white",

        position:
          "relative",

        overflow:
          "hidden",

        boxShadow:
          "0 8px 30px rgba(0,0,0,0.25)",
      }}
    >

      {/* LIVE PULSE */}
      <div
        style={{

          position: "absolute",

          top: 20,

          right: 20,

          width: "16px",

          height: "16px",

          borderRadius:
            "50%",

          background:
            severityColor,

          boxShadow:
            `0 0 25px ${severityColor}`,
        }}
      />

      {/* HEADER */}
      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          flexWrap:
            "wrap",

          gap: "20px",

          marginBottom:
            "24px",
        }}
      >

        <div
          style={{

            display: "flex",

            alignItems:
              "center",

            gap: "18px",
          }}
        >

          <div
            style={{

              width: "78px",

              height: "78px",

              borderRadius:
                "22px",

              background:
                severityColor,

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              fontSize:
                "32px",
            }}
          >

            <FaSkullCrossbones />

          </div>

          <div>

            <h2
              style={{

                fontSize:
                  "26px",

                marginBottom:
                  "10px",
              }}
            >

              {alert.type}

            </h2>

            <div
              style={{

                display: "flex",

                gap: "18px",

                flexWrap:
                  "wrap",

                color:
                  "#94a3b8",
              }}
            >

              <span>

                Source:
                {" "}
                {alert.source}

              </span>

              <span>

                {alert.time}

              </span>

            </div>

          </div>

        </div>

        {/* BADGES */}
        <div
          style={{

            display: "flex",

            gap: "12px",

            flexWrap:
              "wrap",
          }}
        >

          <Badge
            text={alert.severity}
            bg="#7f1d1d"
            color="#fca5a5"
          />

          <Badge
            text={alert.status}
            bg="#082f49"
            color="#38bdf8"
          />

          <Badge
            text="AI VERIFIED"
            bg="#14532d"
            color="#4ade80"
          />

        </div>

      </div>

      {/* DESCRIPTION */}
      <div
        style={{
          marginBottom:
            "24px",
        }}
      >

        <div
          style={{

            background:
              "#0f172a",

            border:
              "1px solid #1e293b",

            borderRadius:
              "16px",

            padding:
              "18px",

            lineHeight:
              "1.7",

            color:
              "#cbd5e1",
          }}
        >

          {alert.description}

        </div>

      </div>

      {/* FOOTER */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",

          gap: "18px",
        }}
      >

        <InfoBox
          icon={<FaServer />}
          title="Threat Source"
          value={alert.source}
        />

        <InfoBox
          icon={<FaUserSecret />}
          title="AI Classification"
          value="Advanced Persistent Threat"
        />

        <InfoBox
          icon={<FaGlobe />}
          title="Network Status"
          value="Realtime Monitoring"
        />

        <InfoBox
          icon={<FaClock />}
          title="Detection Time"
          value={alert.time}
        />

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

        borderRadius:
          "22px",

        padding:
          "26px",

        color: "white",
      }}
    >

      <div
        style={{

          width: "72px",

          height: "72px",

          borderRadius:
            "20px",

          background: color,

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          fontSize: "28px",

          marginBottom:
            "20px",
        }}
      >

        {icon}

      </div>

      <div
        style={{
          color: "#94a3b8",
          marginBottom: "10px",
        }}
      >

        {title}

      </div>

      <div
        style={{

          fontSize: "40px",

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
// SECURITY INFO
// =====================================
const SecurityInfo = ({
  icon,
  title,
  value,
  color,
}) => {

  return (

    <div
      style={{

        background:
          "#0f172a",

        border:
          "1px solid #1e293b",

        borderRadius:
          "18px",

        padding:
          "20px",

        display: "flex",

        alignItems:
          "center",

        gap: "16px",
      }}
    >

      <div
        style={{

          width: "58px",

          height: "58px",

          borderRadius:
            "16px",

          background: color,

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          color: "white",

          fontSize:
            "22px",
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

            fontWeight:
              "bold",
          }}
        >

          {value}

        </div>

      </div>

    </div>
  );
};

// =====================================
// BADGE
// =====================================
const Badge = ({
  text,
  bg,
  color,
}) => {

  return (

    <span
      style={{

        background: bg,

        color: color,

        padding:
          "8px 14px",

        borderRadius:
          "12px",

        fontWeight:
          "bold",

        fontSize:
          "13px",
      }}
    >

      {text}

    </span>
  );
};

// =====================================
// INFO BOX
// =====================================
const InfoBox = ({
  icon,
  title,
  value,
}) => {

  return (

    <div
      style={{

        background:
          "#0f172a",

        border:
          "1px solid #1e293b",

        borderRadius:
          "16px",

        padding:
          "18px",

        display: "flex",

        gap: "14px",

        alignItems:
          "center",
      }}
    >

      <div
        style={{

          width: "52px",

          height: "52px",

          borderRadius:
            "14px",

          background:
            "#1e293b",

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          color: "#f87171",

          fontSize:
            "20px",
        }}
      >

        {icon}

      </div>

      <div>

        <div
          style={{

            color: "#94a3b8",

            marginBottom:
              "6px",

            fontSize:
              "14px",
          }}
        >

          {title}

        </div>

        <div
          style={{

            color: "white",

            fontWeight:
              "bold",
          }}
        >

          {value}

        </div>

      </div>

    </div>
  );
};

// =====================================
// STYLES
// =====================================
const loadingStyle = {

  background:
    "#111827",

  borderRadius:
    "20px",

  padding:
    "40px",

  color:
    "#94a3b8",

  textAlign:
    "center",

  border:
    "1px solid #1e293b",
};

export default Alerts;