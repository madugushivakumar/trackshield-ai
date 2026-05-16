import AdminLayout
from "../layout/AdminLayout";

import {
  useEffect,
  useState,
} from "react";

import {

  FaMobileAlt,
  FaWifi,
  FaBatteryFull,
  FaMapMarkerAlt,
  FaLock,
  FaBell,

} from "react-icons/fa";

import {
  ref,
  set,
  onValue,
} from "firebase/database";

import {
  database,
} from "../services/firebase";

const Devices = () => {

  // =====================================
  // DEVICES STATE
  // =====================================
  const [devices,
    setDevices] =
      useState([]);

  // =====================================
  // LOAD REALTIME DEVICES
  // =====================================
  useEffect(() => {

    const devicesRef =
      ref(
        database,
        "device_status"
      );

    onValue(
      devicesRef,
      (snapshot) => {

        const data =
          snapshot.val();

        if (data) {

          const loadedDevices =
            Object.entries(data)
              .map(
                ([id, value]) => ({

                  id,

                  ...value,
                })
              );

          setDevices(
            loadedDevices
          );
        }
      }
    );

  }, []);

  // =====================================
  // REMOTE LOCK
  // =====================================
  const lockDevice =
    async (deviceId) => {

      await set(

        ref(
          database,
          `remote_commands/${deviceId}`
        ),

        {
          action:
              "LOCK_DEVICE",

          timestamp:
              Date.now(),
        }
      );

      alert(
        `Remote lock sent to ${deviceId}`
      );
    };

  // =====================================
  // REMOTE ALARM
  // =====================================
  const triggerAlarm =
    async (deviceId) => {

      await set(

        ref(
          database,
          `remote_commands/${deviceId}`
        ),

        {
          action:
              "TRIGGER_ALARM",

          timestamp:
              Date.now(),
        }
      );

      alert(
        `Remote alarm sent to ${deviceId}`
      );
    };

  return (

    <AdminLayout>

      {/* HEADER */}
      <div
        style={{
          marginBottom: "30px",
        }}
      >

        <h1
          style={{

            color: "white",

            fontSize: "36px",

            marginBottom: "10px",
          }}
        >
          Device Management
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          Enterprise realtime
          device monitoring
        </p>

      </div>

      {/* DEVICE GRID */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",

          gap: "22px",
        }}
      >

        {devices.map(
          (device, index) => (

            <div

              key={index}

              style={{

                background: "#111827",

                borderRadius: "20px",

                padding: "24px",

                border:
                    "1px solid #1e293b",

                color: "white",
              }}
            >

              {/* TOP */}
              <div
                style={{

                  display: "flex",

                  justifyContent:
                      "space-between",

                  alignItems:
                      "center",
                }}
              >

                <div
                  style={{

                    display: "flex",

                    alignItems:
                        "center",

                    gap: "14px",
                  }}
                >

                  <div
                    style={{

                      width: "60px",

                      height: "60px",

                      borderRadius:
                          "16px",

                      background:
                          "#2563eb",

                      display: "flex",

                      justifyContent:
                          "center",

                      alignItems:
                          "center",

                      fontSize: "28px",
                    }}
                  >

                    <FaMobileAlt />

                  </div>

                  <div>

                    <h2>
                      {device.id}
                    </h2>

                    <p
                      style={{
                        color:
                            "#94a3b8",
                      }}
                    >
                      {device.owner ||
                          "Unknown"}
                    </p>

                  </div>

                </div>

                <div
                  style={{

                    background:
                        device.status ===
                                "ONLINE"
                            ? "#16a34a"
                            : "#dc2626",

                    padding:
                        "8px 14px",

                    borderRadius:
                        "12px",

                    fontSize: "13px",

                    fontWeight:
                        "bold",
                  }}
                >
                  {device.status ||
                      "OFFLINE"}
                </div>

              </div>

              {/* DETAILS */}
              <div
                style={{
                  marginTop: "24px",
                }}
              >

                {/* BATTERY */}
                <div
                  style={{

                    display: "flex",

                    alignItems:
                        "center",

                    gap: "12px",

                    marginBottom:
                        "16px",
                  }}
                >

                  <FaBatteryFull
                    color="#22c55e"
                  />

                  <span>
                    Battery:
                    {" "}
                    {device.battery ||
                        "N/A"}
                  </span>

                </div>

                {/* LOCATION */}
                <div
                  style={{

                    display: "flex",

                    alignItems:
                        "center",

                    gap: "12px",

                    marginBottom:
                        "16px",
                  }}
                >

                  <FaMapMarkerAlt
                    color="#38bdf8"
                  />

                  <span>
                    {device.location ||
                        "Unknown"}
                  </span>

                </div>

                {/* NETWORK */}
                <div
                  style={{

                    display: "flex",

                    alignItems:
                        "center",

                    gap: "12px",

                    marginBottom:
                        "16px",
                  }}
                >

                  <FaWifi
                    color="#facc15"
                  />

                  <span>
                    Firebase Sync
                    Active
                  </span>

                </div>

                {/* SECURITY */}
                <div
                  style={{

                    display: "flex",

                    alignItems:
                        "center",

                    gap: "12px",
                  }}
                >

                  <FaLock
                    color="#7c3aed"
                  />

                  <span>
                    Protected
                  </span>

                </div>

              </div>

              {/* ACTION BUTTONS */}
              <div
                style={{

                  display: "flex",

                  gap: "12px",

                  marginTop: "24px",
                }}
              >

                {/* TRACK */}
                <button
                  style={{

                    flex: 1,

                    background:
                        "#2563eb",

                    border: "none",

                    padding:
                        "12px",

                    borderRadius:
                        "12px",

                    color: "white",

                    cursor: "pointer",

                    fontWeight:
                        "bold",
                  }}
                >
                  Track
                </button>

                {/* LOCK */}
                <button

                  onClick={() =>
                    lockDevice(
                      device.id
                    )
                  }

                  style={{

                    flex: 1,

                    background:
                        "#dc2626",

                    border: "none",

                    padding:
                        "12px",

                    borderRadius:
                        "12px",

                    color: "white",

                    cursor: "pointer",

                    fontWeight:
                        "bold",
                  }}
                >
                  Lock
                </button>

                {/* ALARM */}
                <button

                  onClick={() =>
                    triggerAlarm(
                      device.id
                    )
                  }

                  style={{

                    flex: 1,

                    background:
                        "#f97316",

                    border: "none",

                    padding:
                        "12px",

                    borderRadius:
                        "12px",

                    color: "white",

                    cursor: "pointer",

                    fontWeight:
                        "bold",
                  }}
                >

                  <FaBell />

                </button>

              </div>

            </div>
          )
        )}

      </div>

    </AdminLayout>
  );
};

export default Devices;