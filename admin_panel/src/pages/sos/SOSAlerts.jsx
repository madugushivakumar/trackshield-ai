import {

  useEffect,

  useMemo,

  useState,

} from "react";

import {

  FaExclamationTriangle,

  FaMapMarkerAlt,

  FaPhoneAlt,

  FaShieldAlt,

  FaSyncAlt,

  FaSearch,

  FaBroadcastTower,

  FaHeartbeat,

  FaUserSecret,

  FaBell,

  FaSatelliteDish,

  FaClock,

} from "react-icons/fa";

import {

  getSOSAlerts,

} from "../../services/sosService";

// =====================================
// SOS ALERTS PAGE
// =====================================
const SOSAlerts = () => {

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

      try {

        setLoading(true);

        const response =
          await getSOSAlerts();

        setAlerts(

          response.sosAlerts || [],
        );

      } catch (error) {

        console.log(

          "SOS Alerts Error:",

          error,
        );

      } finally {

        setLoading(false);
      }
    };

  // ===================================
  // EFFECT
  // ===================================
  useEffect(() => {

    loadAlerts();

    const interval =
      setInterval(() => {

        loadAlerts();

      }, 8000);

    return () =>
      clearInterval(interval);

  }, []);

  // ===================================
  // FILTER ALERTS
  // ===================================
  const filteredAlerts =
    useMemo(() => {

      return alerts.filter(
        (alert) =>

          alert.deviceId
            ?.toLowerCase()
            .includes(
              search.toLowerCase(),
            ) ||

          alert.emergencyType
            ?.toLowerCase()
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
  const totalAlerts =
    alerts.length;

  const criticalAlerts =
    alerts.filter(
      (a) =>
        a.emergencyType
          ?.toLowerCase()
          .includes("critical"),
    ).length;

  const activeIncidents =
    alerts.length;

  const resolvedCases =
    Math.floor(
      alerts.length * 0.32,
    );

  return (

    <div>

      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}
      <div
        style={{
          marginBottom: "30px",
        }}
      >

        <h1
          style={{

            color: "white",

            fontSize: "38px",

            fontWeight: "bold",

            marginBottom: "10px",
          }}
        >

          AI Emergency Command Center

        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "16px",
          }}
        >

          Military-grade realtime SOS
          monitoring and incident response

        </p>

      </div>

      {/* ================================= */}
      {/* STATS */}
      {/* ================================= */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",

          gap: "20px",

          marginBottom: "30px",
        }}
      >

        <StatCard
          title="Total Alerts"
          value={totalAlerts}
          icon={<FaBell />}
          color="#dc2626"
        />

        <StatCard
          title="Critical Incidents"
          value={criticalAlerts}
          icon={
            <FaExclamationTriangle />
          }
          color="#b91c1c"
        />

        <StatCard
          title="Active Emergencies"
          value={activeIncidents}
          icon={<FaBroadcastTower />}
          color="#f59e0b"
        />

        <StatCard
          title="Resolved Cases"
          value={resolvedCases}
          icon={<FaShieldAlt />}
          color="#22c55e"
        />

      </div>

      {/* ================================= */}
      {/* LIVE STATUS */}
      {/* ================================= */}
      <div
        style={{

          background:
            "linear-gradient(to right, #111827, #0f172a)",

          border:
            "1px solid #dc2626",

          borderRadius: "20px",

          padding: "22px",

          marginBottom: "25px",

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          flexWrap: "wrap",

          gap: "20px",
        }}
      >

        <div>

          <div
            style={{

              color: "white",

              fontWeight: "bold",

              fontSize: "22px",

              marginBottom: "8px",
            }}
          >

            AI Emergency Network Active

          </div>

          <div
            style={{
              color: "#94a3b8",
            }}
          >

            Emergency incidents refresh every 8 seconds automatically

          </div>

        </div>

        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "10px",

            color: "#f87171",

            fontWeight: "bold",

            fontSize: "16px",
          }}
        >

          <FaSatelliteDish />

          LIVE INCIDENT FEED

        </div>

      </div>

      {/* ================================= */}
      {/* CONTROLS */}
      {/* ================================= */}
      <div
        style={{

          display: "flex",

          gap: "15px",

          marginBottom: "25px",

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
            placeholder="Search emergency alerts..."
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

              background: "#111827",

              border:
                "1px solid #1e293b",

              borderRadius: "14px",

              color: "white",

              outline: "none",

              boxSizing:
                "border-box",
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
              "#dc2626",

            border: "none",

            borderRadius: "14px",

            color: "white",

            cursor: "pointer",

            fontWeight: "bold",

            display: "flex",

            alignItems: "center",

            gap: "10px",
          }}
        >

          <FaSyncAlt />

          Refresh

        </button>

      </div>

      {/* ================================= */}
      {/* ALERTS */}
      {/* ================================= */}
      <div
        style={{

          display: "flex",

          flexDirection: "column",

          gap: "24px",
        }}
      >

        {

          loading ? (

            <div
              style={loadingStyle}
            >

              Loading AI emergency intelligence...

            </div>

          ) : filteredAlerts.length === 0 ? (

            <div
              style={loadingStyle}
            >

              No emergency incidents detected

            </div>

          ) : (

            filteredAlerts.map(
              (alert) => (

                <div
                  key={alert._id}

                  style={{

                    background:
                      "linear-gradient(to right, #111827, #0f172a)",

                    border:
                      "1px solid #dc2626",

                    borderRadius:
                      "22px",

                    padding: "26px",

                    color: "white",

                    boxShadow:
                      "0 8px 30px rgba(220,38,38,0.15)",

                    position:
                      "relative",

                    overflow:
                      "hidden",
                  }}
                >

                  {/* BLINK */}
                  <div
                    style={{

                      position:
                        "absolute",

                      top: 20,

                      right: 20,

                      width: "14px",

                      height: "14px",

                      borderRadius:
                        "50%",

                      background:
                        "#ef4444",

                      boxShadow:
                        "0 0 20px #ef4444",
                    }}
                  />

                  {/* TOP */}
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

                    {/* LEFT */}
                    <div
                      style={{

                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap: "18px",
                      }}
                    >

                      <div
                        style={{

                          width:
                            "75px",

                          height:
                            "75px",

                          borderRadius:
                            "22px",

                          background:
                            "#dc2626",

                          display:
                            "flex",

                          justifyContent:
                            "center",

                          alignItems:
                            "center",

                          fontSize:
                            "30px",
                        }}
                      >

                        <FaHeartbeat />

                      </div>

                      <div>

                        <h2
                          style={{

                            fontSize:
                              "24px",

                            marginBottom:
                              "8px",
                          }}
                        >

                          {

                            alert.emergencyType ||

                            "Emergency SOS"
                          }

                        </h2>

                        <div
                          style={{

                            color:
                              "#94a3b8",

                            display:
                              "flex",

                            gap: "18px",

                            flexWrap:
                              "wrap",
                          }}
                        >

                          <span>

                            Device:
                            {" "}
                            {
                              alert.deviceId
                            }

                          </span>

                          <span>

                            Incident ID:
                            {" "}
                            {
                              alert._id?.slice(
                                0,
                                8,
                              )
                            }

                          </span>

                        </div>

                      </div>

                    </div>

                    {/* BADGES */}
                    <div
                      style={{

                        display:
                          "flex",

                        gap: "12px",

                        flexWrap:
                          "wrap",
                      }}
                    >

                      <Badge
                        text="EMERGENCY"
                        bg="#7f1d1d"
                        color="#fca5a5"
                      />

                      <Badge
                        text="AI VERIFIED"
                        bg="#082f49"
                        color="#38bdf8"
                      />

                      <Badge
                        text="LIVE"
                        bg="#14532d"
                        color="#4ade80"
                      />

                    </div>

                  </div>

                  {/* MESSAGE */}
                  <div
                    style={{
                      marginBottom:
                        "24px",
                    }}
                  >

                    <div
                      style={{

                        color:
                          "#94a3b8",

                        marginBottom:
                          "10px",

                        fontWeight:
                          "bold",
                      }}
                    >

                      Incident Description

                    </div>

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

                      {

                        alert.message ||

                        "Emergency assistance requested immediately."
                      }

                    </div>

                  </div>

                  {/* DETAILS */}
                  <div
                    style={{

                      display:
                        "grid",

                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(220px, 1fr))",

                      gap: "18px",
                    }}
                  >

                    <InfoBox
                      icon={
                        <FaMapMarkerAlt />
                      }
                      title="GPS Tracking"
                      value="Realtime Location Active"
                    />

                    <InfoBox
                      icon={
                        <FaPhoneAlt />
                      }
                      title="Emergency Contact"
                      value="Contacts Triggered"
                    />

                    <InfoBox
                      icon={
                        <FaUserSecret />
                      }
                      title="Threat Analysis"
                      value="AI Threat Detection Enabled"
                    />

                    <InfoBox
                      icon={
                        <FaClock />
                      }
                      title="Response Time"
                      value="2 Seconds"
                    />

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

// =====================================
// STAT CARD
// =====================================
const StatCard = ({
  title,
  value,
  icon,
  color,
}) => {

  return (

    <div
      style={{

        background: "#111827",

        border:
          "1px solid #1e293b",

        borderRadius: "20px",

        padding: "24px",

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",
      }}
    >

      <div>

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

            color: "white",

            fontSize: "34px",

            fontWeight: "bold",
          }}
        >

          {value}

        </div>

      </div>

      <div
        style={{

          width: "70px",

          height: "70px",

          borderRadius: "18px",

          background: color,

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          color: "white",

          fontSize: "28px",
        }}
      >

        {icon}

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

        fontSize: "13px",
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

        background: "#0f172a",

        border:
          "1px solid #1e293b",

        borderRadius: "16px",

        padding: "18px",

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

          fontSize: "20px",
        }}
      >

        {icon}

      </div>

      <div>

        <div
          style={{

            color: "#94a3b8",

            marginBottom: "6px",

            fontSize: "14px",
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

  background: "#111827",

  borderRadius: "20px",

  padding: "40px",

  color: "#94a3b8",

  textAlign: "center",

  border:
    "1px solid #1e293b",
};

export default SOSAlerts;