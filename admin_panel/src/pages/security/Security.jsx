import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  FaShieldAlt,
  FaUserSecret,
  FaExclamationTriangle,
  FaLock,
  FaSearch,
  FaBroadcastTower,
  FaRobot,
  FaBug,
  FaServer,
  FaDatabase,
  FaSyncAlt,
  FaGlobe,
  FaClock,
  FaSatelliteDish,
  FaFingerprint,
  FaBrain,
  FaCloud,
  FaWifi,
  FaFire,
  FaEye,
  FaCheckCircle,
} from "react-icons/fa";

// =====================================
// SECURITY PAGE
// =====================================
const Security = () => {

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [securityLogs, setSecurityLogs] =
    useState([]);

  // ===================================
  // MOCK SECURITY DATA
  // ===================================
  const mockSecurityLogs = [

    {
      id: 1,
      type: "Intrusion Attempt",
      level: "Critical",
      time: "2 mins ago",
      status: "Blocked",
      icon: <FaExclamationTriangle />,
      color: "#ef4444",
      description:
        "AI firewall blocked suspicious intrusion attempt.",
    },

    {
      id: 2,
      type: "Unauthorized Login",
      level: "High",
      time: "10 mins ago",
      status: "Investigating",
      icon: <FaUserSecret />,
      color: "#f59e0b",
      description:
        "Multiple failed admin login attempts detected.",
    },

    {
      id: 3,
      type: "Firewall Protected",
      level: "Safe",
      time: "Realtime",
      status: "Protected",
      icon: <FaShieldAlt />,
      color: "#10b981",
      description:
        "Enterprise firewall actively protecting all endpoints.",
    },

    {
      id: 4,
      type: "Encrypted Connection",
      level: "Secure",
      time: "Running",
      status: "Encrypted",
      icon: <FaLock />,
      color: "#3b82f6",
      description:
        "TLS encryption enabled for all communications.",
    },

    {
      id: 5,
      type: "Malware Detection",
      level: "Critical",
      time: "12 mins ago",
      status: "Neutralized",
      icon: <FaBug />,
      color: "#dc2626",
      description:
        "AI engine detected and neutralized ransomware activity.",
    },

    {
      id: 6,
      type: "Database Protection",
      level: "Protected",
      time: "Active",
      status: "Operational",
      icon: <FaDatabase />,
      color: "#06b6d4",
      description:
        "Database encryption and realtime backup active.",
    },
  ];

  // ===================================
  // LOAD DATA
  // ===================================
  const loadSecurityData =
    async () => {

      setLoading(true);

      setTimeout(() => {

        setSecurityLogs(
          mockSecurityLogs
        );

        setLoading(false);

      }, 1000);
    };

  // ===================================
  // AUTO REFRESH
  // ===================================
  useEffect(() => {

    loadSecurityData();

    const interval =
      setInterval(() => {

        loadSecurityData();

      }, 10000);

    return () =>
      clearInterval(interval);

  }, []);

  // ===================================
  // FILTER
  // ===================================
  const filteredLogs =
    useMemo(() => {

      return securityLogs.filter(
        (item) =>

          item.type
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          item.level
            .toLowerCase()
            .includes(
              search.toLowerCase()
            ) ||

          item.status
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
      );

    }, [
      securityLogs,
      search,
    ]);

  // ===================================
  // STATS
  // ===================================
  const criticalThreats =
    securityLogs.filter(
      (item) =>
        item.level ===
        "Critical"
    ).length;

  const protectedSystems =
    securityLogs.filter(
      (item) =>
        item.status ===
          "Protected" ||
        item.status ===
          "Operational"
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

                fontSize: "42px",

                fontWeight: "bold",

                marginBottom: "10px",
              }}
            >

              AI Security Operations Center

            </h1>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "16px",
              }}
            >

              Enterprise realtime cyber defense and AI protection monitoring

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
                "1px solid #22c55e",

              padding:
                "14px 20px",

              borderRadius:
                "16px",

              color: "#4ade80",

              fontWeight:
                "bold",
            }}
          >

            <FaBroadcastTower />

            SECURITY ACTIVE

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
            "repeat(auto-fit, minmax(240px, 1fr))",

          gap: "24px",

          marginBottom: "35px",
        }}
      >

        <SecurityStat
          title="Critical Threats"
          value={criticalThreats}
          subtitle="AI detected attacks"
          icon={<FaFire />}
          color="#dc2626"
        />

        <SecurityStat
          title="Protected Systems"
          value={protectedSystems}
          subtitle="Realtime protected endpoints"
          icon={<FaShieldAlt />}
          color="#22c55e"
        />

        <SecurityStat
          title="AI Monitoring"
          value="24/7"
          subtitle="Continuous security scanning"
          icon={<FaRobot />}
          color="#8b5cf6"
        />

        <SecurityStat
          title="Security Nodes"
          value="128"
          subtitle="Connected enterprise servers"
          icon={<FaServer />}
          color="#06b6d4"
        />

      </div>

      {/* ================================= */}
      {/* SECURITY INTELLIGENCE */}
      {/* ================================= */}
      <div
        style={{

          background:
            "linear-gradient(to right, #111827, #0f172a)",

          border:
            "1px solid #1e293b",

          borderRadius:
            "24px",

          padding:
            "24px",

          marginBottom:
            "35px",

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(220px, 1fr))",

          gap: "20px",
        }}
      >

        <SecurityInfo
          icon={<FaLock />}
          title="Firewall"
          value="ACTIVE"
          color="#22c55e"
        />

        <SecurityInfo
          icon={<FaBrain />}
          title="AI Engine"
          value="RUNNING"
          color="#8b5cf6"
        />

        <SecurityInfo
          icon={<FaDatabase />}
          title="Database Security"
          value="ENCRYPTED"
          color="#06b6d4"
        />

        <SecurityInfo
          icon={<FaCloud />}
          title="Cloud Shield"
          value="PROTECTED"
          color="#f59e0b"
        />

        <SecurityInfo
          icon={<FaWifi />}
          title="Network Monitor"
          value="STABLE"
          color="#3b82f6"
        />

        <SecurityInfo
          icon={<FaSatelliteDish />}
          title="Threat Scanner"
          value="LIVE"
          color="#ef4444"
        />

      </div>

      {/* ================================= */}
      {/* SEARCH */}
      {/* ================================= */}
      <div
        style={{
          marginBottom: "30px",
          position: "relative",
        }}
      >

        <FaSearch
          style={{

            position: "absolute",

            left: "15px",

            top: "18px",

            color: "#64748b",
          }}
        />

        <input
          type="text"
          placeholder="Search security intelligence..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
          style={{

            width: "100%",

            padding:
              "14px 14px 14px 45px",

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

      {/* ================================= */}
      {/* SECURITY GRID */}
      {/* ================================= */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(340px, 1fr))",

          gap: "24px",
        }}
      >

        {

          loading ? (

            <div
              style={loadingStyle}
            >

              <FaSyncAlt
                className="spin"
                style={{
                  marginRight: "10px",
                }}
              />

              Loading enterprise security intelligence...

            </div>

          ) : (

            filteredLogs.map(
              (item) => (

                <SecurityCard
                  key={item.id}
                  item={item}
                />
              )
            )
          )
        }

      </div>

    </div>
  );
};

// =====================================
// SECURITY CARD
// =====================================
const SecurityCard = ({
  item,
}) => {

  return (

    <div
      style={{

        background:
          "linear-gradient(to bottom right, #111827, #0f172a)",

        border:
          `1px solid ${item.color}`,

        borderRadius:
          "24px",

        padding:
          "26px",

        display:
          "flex",

        flexDirection:
          "column",

        justifyContent:
          "space-between",

        minHeight:
          "320px",

        position:
          "relative",

        overflow:
          "hidden",
      }}
    >

      {/* LIVE INDICATOR */}
      <div
        style={{

          position: "absolute",

          top: 20,

          right: 20,

          width: "14px",

          height: "14px",

          borderRadius:
            "50%",

          background:
            item.color,

          boxShadow:
            `0 0 20px ${item.color}`,
        }}
      />

      {/* TOP */}
      <div>

        <div
          style={{

            width: "78px",

            height: "78px",

            borderRadius:
              "22px",

            background:
              item.color,

            display:
              "flex",

            justifyContent:
              "center",

            alignItems:
              "center",

            color:
              "white",

            fontSize:
              "30px",

            marginBottom:
              "22px",
          }}
        >

          {item.icon}

        </div>

        <h2
          style={{

            color: "white",

            fontSize: "26px",

            marginBottom: "16px",
          }}
        >

          {item.type}

        </h2>

        <p
          style={{

            color: "#cbd5e1",

            lineHeight: "1.7",

            marginBottom: "24px",
          }}
        >

          {item.description}

        </p>

      </div>

      {/* FOOTER */}
      <div>

        <div
          style={{

            display: "flex",

            justifyContent:
              "space-between",

            marginBottom:
              "16px",
          }}
        >

          <Badge
            text={item.level}
            bg={item.color}
          />

          <Badge
            text={item.status}
            bg="#1e293b"
          />

        </div>

        <div
          style={{

            display: "flex",

            alignItems:
              "center",

            justifyContent:
              "space-between",

            color:
              "#94a3b8",
          }}
        >

          <div
            style={{

              display: "flex",

              alignItems:
                "center",

              gap: "10px",
            }}
          >

            <FaClock />

            {item.time}

          </div>

          <div
            style={{

              display: "flex",

              alignItems:
                "center",

              gap: "8px",
            }}
          >

            <FaEye />

            Live

          </div>

        </div>

      </div>

    </div>
  );
};

// =====================================
// SECURITY STAT
// =====================================
const SecurityStat = ({
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
          "24px",

        color: "white",
      }}
    >

      <div
        style={{

          width: "70px",

          height: "70px",

          borderRadius:
            "20px",

          background:
            color,

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          fontSize:
            "28px",

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

        display:
          "flex",

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

          background:
            color,

          display:
            "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          color:
            "white",

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
}) => {

  return (

    <span
      style={{

        background:
          bg,

        color:
          "white",

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

export default Security;