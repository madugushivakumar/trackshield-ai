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
  // MOCK DATA
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
          mockSecurityLogs,
        );

        setLoading(false);

      }, 1000);
    };

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
              search.toLowerCase(),
            ) ||

          item.level
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ) ||

          item.status
            .toLowerCase()
            .includes(
              search.toLowerCase(),
            ),
      );
    }, [
      securityLogs,
      search,
    ]);

  return (

    <div>

      {/* HEADER */}
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

              AI Security Operations Center

            </h1>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "16px",
              }}
            >

              Enterprise realtime cyber defense system

            </p>

          </div>

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

      {/* SEARCH */}
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
          placeholder="Search security logs..."
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value,
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

      {/* SECURITY GRID */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",

          gap: "24px",
        }}
      >

        {

          loading ? (

            <div
              style={{

                background:
                  "#111827",

                padding:
                  "40px",

                borderRadius:
                  "20px",

                color:
                  "#94a3b8",
              }}
            >

              Loading security intelligence...

            </div>

          ) : (

            filteredLogs.map(
              (item) => (

                <div
                  key={item.id}
                  style={{

                    background:
                      "#111827",

                    border:
                      `1px solid ${item.color}`,

                    borderRadius:
                      "24px",

                    padding:
                      "26px",

                    minHeight:
                      "300px",

                    display:
                      "flex",

                    flexDirection:
                      "column",

                    justifyContent:
                      "space-between",
                  }}
                >

                  {/* TOP */}
                  <div>

                    <div
                      style={{

                        width: "75px",

                        height: "75px",

                        borderRadius:
                          "20px",

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
                          "28px",

                        marginBottom:
                          "20px",
                      }}
                    >

                      {item.icon}

                    </div>

                    <h2
                      style={{

                        color:
                          "white",

                        fontSize:
                          "26px",

                        marginBottom:
                          "15px",
                      }}
                    >

                      {item.type}

                    </h2>

                    <p
                      style={{

                        color:
                          "#cbd5e1",

                        lineHeight:
                          "1.7",
                      }}
                    >

                      {item.description}

                    </p>

                  </div>

                  {/* BOTTOM */}
                  <div>

                    <div
                      style={{

                        display:
                          "flex",

                        justifyContent:
                          "space-between",

                        marginBottom:
                          "12px",
                      }}
                    >

                      <span
                        style={{
                          color:
                            "#94a3b8",
                        }}
                      >

                        Status

                      </span>

                      <span
                        style={{

                          color:
                            item.color,

                          fontWeight:
                            "bold",
                        }}
                      >

                        {item.status}

                      </span>

                    </div>

                    <div
                      style={{

                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: "10px",

                        color:
                          "#94a3b8",
                      }}
                    >

                      <FaClock />

                      {item.time}

                    </div>

                  </div>

                </div>
              ),
            )
          )
        }

      </div>

    </div>
  );
};

export default Security;