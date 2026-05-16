import AdminLayout
from "../layout/AdminLayout";

import {

  FaCog,
  FaBell,
  FaShieldAlt,
  FaLock,
  FaDatabase,
  FaWifi,
  FaUserShield,
  FaSave,

} from "react-icons/fa";

const Settings = () => {

  const settings = [

    {
      icon: <FaBell />,
      title:
          "Emergency Notifications",

      description:
          "Enable realtime SOS and security alerts",

      enabled: true,
    },

    {
      icon: <FaShieldAlt />,
      title:
          "AI Threat Protection",

      description:
          "Realtime AI intrusion monitoring",

      enabled: true,
    },

    {
      icon: <FaLock />,
      title:
          "Remote Device Lock",

      description:
          "Allow remote locking of devices",

      enabled: true,
    },

    {
      icon: <FaDatabase />,
      title:
          "Cloud Sync",

      description:
          "Sync device data with Firebase",

      enabled: true,
    },

    {
      icon: <FaWifi />,
      title:
          "Realtime Tracking",

      description:
          "Enable continuous GPS tracking",

      enabled: false,
    },

    {
      icon: <FaUserShield />,
      title:
          "Admin Security Mode",

      description:
          "Extra authentication for admin actions",

      enabled: true,
    },
  ];

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
          System Settings
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          Configure enterprise
          security and AI services
        </p>

      </div>

      {/* SETTINGS GRID */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",

          gap: "22px",
        }}
      >

        {settings.map(
          (
            item,
            index
          ) => (

            <div

              key={index}

              style={{

                background:
                    "#111827",

                borderRadius:
                    "20px",

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

                    fontSize: "26px",
                  }}
                >
                  {item.icon}
                </div>

                {/* TOGGLE */}
                <div
                  style={{

                    width: "60px",

                    height: "30px",

                    borderRadius:
                        "20px",

                    background:
                        item.enabled
                            ? "#22c55e"
                            : "#475569",

                    display: "flex",

                    alignItems:
                        "center",

                    padding: "4px",

                    justifyContent:
                        item.enabled
                            ? "flex-end"
                            : "flex-start",
                  }}
                >

                  <div
                    style={{

                      width: "22px",

                      height: "22px",

                      borderRadius:
                          "50%",

                      background:
                          "white",
                    }}
                  />

                </div>

              </div>

              {/* DETAILS */}
              <div
                style={{
                  marginTop: "20px",
                }}
              >

                <h2>
                  {item.title}
                </h2>

                <p
                  style={{

                    marginTop: "12px",

                    color: "#94a3b8",

                    lineHeight: "1.6",
                  }}
                >
                  {item.description}
                </p>

              </div>

            </div>
          )
        )}

      </div>

      {/* SAVE BUTTON */}
      <div
        style={{
          marginTop: "40px",
        }}
      >

        <button
          style={{

            background: "#2563eb",

            color: "white",

            border: "none",

            padding:
                "16px 26px",

            borderRadius: "14px",

            fontSize: "16px",

            fontWeight: "bold",

            display: "flex",

            alignItems: "center",

            gap: "12px",

            cursor: "pointer",
          }}
        >

          <FaSave />

          Save Settings

        </button>

      </div>

    </AdminLayout>
  );
};

export default Settings;