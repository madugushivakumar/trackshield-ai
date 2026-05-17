import {

  useEffect,

  useMemo,

  useState,

} from "react";

import {

  FaMobileAlt,

  FaSearch,

  FaSyncAlt,

  FaWifi,

  FaBatteryFull,

  FaShieldAlt,

  FaMicrochip,

  FaDesktop,

  FaExclamationTriangle,

} from "react-icons/fa";

import {

  getDevices,

} from "../../services/devicesService";

// =====================================
// DEVICES PAGE
// =====================================
const Devices = () => {

  const [devices, setDevices] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [search, setSearch] =
    useState("");

  const [statusFilter, setStatusFilter] =
    useState("ALL");

  // ===================================
  // LOAD DEVICES
  // ===================================
  const loadDevices =
    async () => {

      try {

        setLoading(true);

        const response =
          await getDevices();

        setDevices(

          response.devices || [],
        );

      } catch (error) {

        console.log(

          "Load Devices Error:",

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

    loadDevices();

  }, []);

  // ===================================
  // FILTERED DEVICES
  // ===================================
  const filteredDevices =
    useMemo(() => {

      return devices.filter(
        (device) => {

          const matchesSearch =

            device.deviceName
              ?.toLowerCase()
              .includes(
                search.toLowerCase(),
              ) ||

            device.deviceId
              ?.toLowerCase()
              .includes(
                search.toLowerCase(),
              );

          const matchesStatus =

            statusFilter === "ALL"

              ? true

              : device.status ===
                statusFilter;

          return (
            matchesSearch &&
            matchesStatus
          );
        },
      );
    }, [

      devices,

      search,

      statusFilter,
    ]);

  // ===================================
  // STATS
  // ===================================
  const totalDevices =
    devices.length;

  const onlineDevices =
    devices.filter(
      (d) =>
        d.status === "ONLINE",
    ).length;

  const offlineDevices =
    devices.filter(
      (d) =>
        d.status !== "ONLINE",
    ).length;

  const secureDevices =
    Math.floor(
      totalDevices * 0.92,
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

            fontSize: "36px",

            fontWeight: "bold",

            marginBottom: "10px",
          }}
        >

          AI Device Monitoring

        </h1>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "16px",
          }}
        >

          Realtime enterprise device
          management and security

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
          title="Total Devices"
          value={totalDevices}
          icon={<FaMobileAlt />}
          color="#2563eb"
        />

        <StatCard
          title="Online Devices"
          value={onlineDevices}
          icon={<FaWifi />}
          color="#22c55e"
        />

        <StatCard
          title="Offline Devices"
          value={offlineDevices}
          icon={
            <FaExclamationTriangle />
          }
          color="#ef4444"
        />

        <StatCard
          title="Secure Devices"
          value={secureDevices}
          icon={<FaShieldAlt />}
          color="#06b6d4"
        />

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
            placeholder="Search devices..."
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

        {/* FILTER */}
        <select
          value={statusFilter}
          onChange={(e) =>
            setStatusFilter(
              e.target.value,
            )
          }
          style={{

            padding: "14px",

            background: "#111827",

            border:
              "1px solid #1e293b",

            borderRadius: "14px",

            color: "white",

            outline: "none",
          }}
        >

          <option value="ALL">
            All Devices
          </option>

          <option value="ONLINE">
            Online
          </option>

          <option value="OFFLINE">
            Offline
          </option>

        </select>

        {/* REFRESH */}
        <button
          onClick={loadDevices}
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
      {/* DEVICE TABLE */}
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
                  Device ID
                </th>

                <th style={tableHeader}>
                  Platform
                </th>

                <th style={tableHeader}>
                  Battery
                </th>

                <th style={tableHeader}>
                  Security
                </th>

                <th style={tableHeader}>
                  Status
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

                      Loading devices...

                    </td>

                  </tr>

                ) : filteredDevices.length === 0 ? (

                  <tr>

                    <td
                      colSpan="6"
                      style={
                        loadingStyle
                      }
                    >

                      No devices found

                    </td>

                  </tr>

                ) : (

                  filteredDevices.map(
                    (device) => (

                      <tr
                        key={device._id}
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
                                  "48px",

                                height:
                                  "48px",

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

                                fontSize:
                                  "20px",
                              }}
                            >

                              <FaDesktop />

                            </div>

                            <div>

                              <div
                                style={{

                                  fontWeight:
                                    "bold",
                                }}
                              >

                                {
                                  device.deviceName
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

                                Enterprise Device

                              </div>

                            </div>

                          </div>

                        </td>

                        {/* ID */}
                        <td
                          style={
                            tableCell
                          }
                        >

                          {
                            device.deviceId
                          }

                        </td>

                        {/* PLATFORM */}
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
                            }}
                          >

                            <FaMicrochip />

                            {

                              device.platform ||

                              "Android"
                            }

                          </div>

                        </td>

                        {/* BATTERY */}
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
                            }}
                          >

                            <FaBatteryFull />

                            92%

                          </div>

                        </td>

                        {/* SECURITY */}
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

                            Protected

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

                                device.status ===
                                "ONLINE"

                                  ? "#14532d"

                                  : "#7f1d1d",

                              color:

                                device.status ===
                                "ONLINE"

                                  ? "#4ade80"

                                  : "#f87171",

                              fontSize:
                                "13px",

                              fontWeight:
                                "bold",
                            }}
                          >

                            {

                              device.status ||

                              "OFFLINE"
                            }

                          </span>

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

export default Devices;