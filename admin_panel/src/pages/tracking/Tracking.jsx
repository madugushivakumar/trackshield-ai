import {

  useEffect,

  useMemo,

  useState,

} from "react";

import {

  FaMapMarkerAlt,

  FaSearch,

  FaSyncAlt,

  FaSatellite,

  FaRoute,

  FaExclamationTriangle,

  FaSignal,

  FaGlobeAsia,

  FaWifi,

  FaCrosshairs,

} from "react-icons/fa";

import {

  getTrackingData,

} from "../../services/trackingService";

// =====================================
// TRACKING PAGE
// =====================================
const Tracking = () => {

  const [tracking, setTracking] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  // ===================================
  // LOAD TRACKING DATA
  // ===================================
  const loadTracking =
    async () => {

      try {

        setLoading(true);

        const response =
          await getTrackingData();

        setTracking(

          response.trackingData || [],
        );

      } catch (error) {

        console.log(

          "Tracking Load Error:",

          error,
        );

      } finally {

        setLoading(false);
      }
    };

  // ===================================
  // USE EFFECT
  // ===================================
  useEffect(() => {

    loadTracking();

    const interval =
      setInterval(() => {

        loadTracking();

      }, 10000);

    return () =>
      clearInterval(interval);

  }, []);

  // ===================================
  // FILTER DATA
  // ===================================
  const filteredTracking =
    useMemo(() => {

      return tracking.filter(
        (item) =>

          item.deviceId
            ?.toLowerCase()
            .includes(
              search.toLowerCase(),
            ),
      );
    }, [

      tracking,

      search,
    ]);

  // ===================================
  // STATS
  // ===================================
  const totalTracking =
    tracking.length;

  const activeDevices =
    tracking.length;

  const avgSpeed =
    tracking.length > 0

      ? Math.floor(

          tracking.reduce(
            (acc, item) =>

              acc +
              Number(
                item.speed || 0,
              ),

            0,
          ) / tracking.length,
        )

      : 0;

  const highRisk =
    tracking.filter(
      (item) =>
        Number(
          item.speed || 0,
        ) > 100,
    ).length;

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

          AI Live Tracking System

        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "16px",
          }}
        >

          Realtime enterprise GPS
          intelligence and monitoring

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
          title="Tracked Devices"
          value={totalTracking}
          icon={<FaSatellite />}
          color="#2563eb"
        />

        <StatCard
          title="Active Signals"
          value={activeDevices}
          icon={<FaSignal />}
          color="#22c55e"
        />

        <StatCard
          title="Average Speed"
          value={`${avgSpeed} km/h`}
          icon={<FaRoute />}
          color="#06b6d4"
        />

        <StatCard
          title="High Risk"
          value={highRisk}
          icon={
            <FaExclamationTriangle />
          }
          color="#ef4444"
        />

      </div>

      {/* ================================= */}
      {/* LIVE STATUS */}
      {/* ================================= */}
      <div
        style={{

          background:
            "linear-gradient(to right, #0f172a, #111827)",

          border:
            "1px solid #1e293b",

          borderRadius: "20px",

          padding: "20px",

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

              fontSize: "20px",

              marginBottom: "8px",
            }}
          >

            AI Realtime Monitoring

          </div>

          <div
            style={{
              color: "#94a3b8",
            }}
          >

            System automatically refreshes every 10 seconds

          </div>

        </div>

        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "10px",

            color: "#4ade80",

            fontWeight: "bold",
          }}
        >

          <FaWifi />

          LIVE CONNECTED

        </div>

      </div>

      {/* ================================= */}
      {/* CONTROLS */}
      {/* ================================= */}
      <div
        style={{

          display: "flex",

          gap: "15px",

          flexWrap: "wrap",

          marginBottom: "25px",
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
            placeholder="Search device ID..."
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
          onClick={loadTracking}
          style={{

            padding:
              "14px 18px",

            background:
              "#2563eb",

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
      {/* TRACKING TABLE */}
      {/* ================================= */}
      <div
        style={{

          background: "#111827",

          borderRadius: "20px",

          overflow: "hidden",

          border:
            "1px solid #1e293b",
        }}
      >

        <div
          style={{
            overflowX: "auto",
          }}
        >

          <table
            style={{

              width: "100%",

              borderCollapse:
                "collapse",

              color: "white",
            }}
          >

            {/* HEADER */}
            <thead
              style={{
                background: "#0f172a",
              }}
            >

              <tr>

                <th style={tableHeader}>
                  Device
                </th>

                <th style={tableHeader}>
                  Latitude
                </th>

                <th style={tableHeader}>
                  Longitude
                </th>

                <th style={tableHeader}>
                  Speed
                </th>

                <th style={tableHeader}>
                  Location Status
                </th>

                <th style={tableHeader}>
                  Tracking
                </th>

              </tr>

            </thead>

            {/* BODY */}
            <tbody>

              {

                loading ? (

                  <tr>

                    <td
                      colSpan="6"
                      style={
                        loadingStyle
                      }
                    >

                      Loading tracking intelligence...

                    </td>

                  </tr>

                ) : filteredTracking.length === 0 ? (

                  <tr>

                    <td
                      colSpan="6"
                      style={
                        loadingStyle
                      }
                    >

                      No tracking data found

                    </td>

                  </tr>

                ) : (

                  filteredTracking.map(
                    (item) => (

                      <tr
                        key={item._id}
                        style={{

                          borderBottom:
                            "1px solid #1e293b",
                        }}
                      >

                        {/* DEVICE */}
                        <td
                          style={
                            tableCell
                          }
                        >

                          <div
                            style={{

                              display:
                                "flex",

                              alignItems:
                                "center",

                              gap: "14px",
                            }}
                          >

                            <div
                              style={{

                                width:
                                  "50px",

                                height:
                                  "50px",

                                borderRadius:
                                  "14px",

                                background:
                                  "#1e293b",

                                display:
                                  "flex",

                                justifyContent:
                                  "center",

                                alignItems:
                                  "center",

                                color:
                                  "#38bdf8",
                              }}
                            >

                              <FaGlobeAsia />

                            </div>

                            <div>

                              <div
                                style={{

                                  fontWeight:
                                    "bold",
                                }}
                              >

                                {
                                  item.deviceId
                                }

                              </div>

                              <div
                                style={{

                                  color:
                                    "#94a3b8",

                                  fontSize:
                                    "13px",
                                }}
                              >

                                Enterprise GPS

                              </div>

                            </div>

                          </div>

                        </td>

                        {/* LAT */}
                        <td
                          style={
                            tableCell
                          }
                        >

                          {
                            item.latitude
                          }

                        </td>

                        {/* LNG */}
                        <td
                          style={
                            tableCell
                          }
                        >

                          {
                            item.longitude
                          }

                        </td>

                        {/* SPEED */}
                        <td
                          style={
                            tableCell
                          }
                        >

                          <span
                            style={{

                              color:

                                Number(
                                  item.speed || 0,
                                ) > 100

                                  ? "#f87171"

                                  : "#4ade80",

                              fontWeight:
                                "bold",
                            }}
                          >

                            {

                              item.speed ||

                              "0"
                            }

                            {" "}
                            km/h

                          </span>

                        </td>

                        {/* STATUS */}
                        <td
                          style={
                            tableCell
                          }
                        >

                          <span
                            style={{

                              padding:
                                "6px 12px",

                              borderRadius:
                                "10px",

                              background:
                                "#082f49",

                              color:
                                "#38bdf8",

                              fontWeight:
                                "bold",

                              fontSize:
                                "13px",
                            }}
                          >

                            TRACKED

                          </span>

                        </td>

                        {/* LIVE */}
                        <td
                          style={
                            tableCell
                          }
                        >

                          <div
                            style={{

                              display:
                                "flex",

                              alignItems:
                                "center",

                              gap: "8px",

                              color:
                                "#4ade80",

                              fontWeight:
                                "bold",
                            }}
                          >

                            <FaCrosshairs />

                            LIVE

                          </div>

                        </td>

                      </tr>
                    ),
                  )
                )
              }

            </tbody>

          </table>

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
// STYLES
// =====================================
const tableHeader = {

  padding: "20px",

  textAlign: "left",

  color: "#94a3b8",

  fontSize: "15px",

  fontWeight: "600",
};

const tableCell = {

  padding: "20px",

  fontSize: "15px",
};

const loadingStyle = {

  padding: "40px",

  textAlign: "center",

  color: "#94a3b8",
};

export default Tracking;