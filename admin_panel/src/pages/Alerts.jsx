import AdminLayout
from "../layout/AdminLayout";

import {

  FaExclamationTriangle,
  FaBell,
  FaShieldAlt,
  FaUserSecret,
  FaMapMarkerAlt,
  FaClock,

} from "react-icons/fa";

const Alerts = () => {

  const alerts = [

    {
      type: "SOS ALERT",

      device: "TS-1001",

      location: "Hyderabad",

      time: "2 mins ago",

      severity: "CRITICAL",

      color: "#dc2626",
    },

    {
      type:
          "Intruder Face Detected",

      device: "TS-2004",

      location: "Bangalore",

      time: "10 mins ago",

      severity: "HIGH",

      color: "#f97316",
    },

    {
      type:
          "Suspicious Device Movement",

      device: "TS-3001",

      location: "Chennai",

      time: "18 mins ago",

      severity: "MEDIUM",

      color: "#facc15",
    },

    {
      type:
          "Remote Lock Activated",

      device: "TS-1002",

      location: "Mumbai",

      time: "25 mins ago",

      severity: "INFO",

      color: "#2563eb",
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
          Security Alerts
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          Real-time emergency and
          AI threat notifications
        </p>

      </div>

      {/* ALERT SUMMARY */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",

          gap: "20px",

          marginBottom: "30px",
        }}
      >

        {/* TOTAL ALERTS */}
        <div
          style={{

            background: "#111827",

            padding: "22px",

            borderRadius: "18px",

            border:
                "1px solid #1e293b",

            color: "white",
          }}
        >

          <FaBell
            color="#38bdf8"

            size={28}
          />

          <h2
            style={{
              marginTop: "16px",
            }}
          >
            48
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Total Alerts
          </p>

        </div>

        {/* CRITICAL */}
        <div
          style={{

            background: "#111827",

            padding: "22px",

            borderRadius: "18px",

            border:
                "1px solid #dc2626",

            color: "white",
          }}
        >

          <FaExclamationTriangle
            color="#dc2626"

            size={28}
          />

          <h2
            style={{
              marginTop: "16px",
            }}
          >
            12
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Critical Threats
          </p>

        </div>

        {/* SECURITY */}
        <div
          style={{

            background: "#111827",

            padding: "22px",

            borderRadius: "18px",

            border:
                "1px solid #22c55e",

            color: "white",
          }}
        >

          <FaShieldAlt
            color="#22c55e"

            size={28}
          />

          <h2
            style={{
              marginTop: "16px",
            }}
          >
            Active
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            AI Protection Status
          </p>

        </div>

      </div>

      {/* ALERT LIST */}
      <div
        style={{

          background: "#111827",

          borderRadius: "20px",

          padding: "24px",

          border:
              "1px solid #1e293b",
        }}
      >

        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "12px",

            marginBottom: "25px",
          }}
        >

          <FaBell
            color="#facc15"

            size={26}
          />

          <h2
            style={{
              color: "white",
            }}
          >
            Live Threat Feed
          </h2>

        </div>

        {alerts.map(
          (alert, index) => (

            <div

              key={index}

              style={{

                background:
                    "#1e293b",

                padding: "20px",

                borderRadius: "16px",

                marginBottom:
                    "18px",

                borderLeft:
                    `6px solid ${alert.color}`,

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

                    gap: "12px",
                  }}
                >

                  <FaUserSecret
                    color={
                      alert.color
                    }

                    size={22}
                  />

                  <h3>
                    {alert.type}
                  </h3>

                </div>

                <div
                  style={{

                    background:
                        alert.color,

                    padding:
                        "8px 14px",

                    borderRadius:
                        "12px",

                    fontSize: "12px",

                    fontWeight:
                        "bold",
                  }}
                >
                  {alert.severity}
                </div>

              </div>

              {/* DETAILS */}
              <div
                style={{
                  marginTop: "18px",
                }}
              >

                {/* DEVICE */}
                <p
                  style={{
                    marginBottom:
                        "10px",
                  }}
                >
                  Device:
                  {" "}
                  {alert.device}
                </p>

                {/* LOCATION */}
                <div
                  style={{

                    display: "flex",

                    alignItems:
                        "center",

                    gap: "10px",

                    marginBottom:
                        "10px",

                    color:
                        "#cbd5e1",
                  }}
                >

                  <FaMapMarkerAlt />

                  <span>
                    {alert.location}
                  </span>

                </div>

                {/* TIME */}
                <div
                  style={{

                    display: "flex",

                    alignItems:
                        "center",

                    gap: "10px",

                    color:
                        "#94a3b8",
                  }}
                >

                  <FaClock />

                  <span>
                    {alert.time}
                  </span>

                </div>

              </div>

            </div>
          )
        )}

      </div>

    </AdminLayout>
  );
};

export default Alerts;