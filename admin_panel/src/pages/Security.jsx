import AdminLayout
from "../layout/AdminLayout";

import {

  FaShieldAlt,
  FaUserSecret,
  FaLock,
  FaExclamationTriangle,
  FaFingerprint,
  FaRobot,
  FaBell,

} from "react-icons/fa";

const Security = () => {

  const threats = [

    {
      title:
          "AI Intrusion Detection",

      status: "ACTIVE",

      description:
          "Monitoring suspicious activity",

      color: "#22c55e",
    },

    {
      title:
          "Remote Device Lock",

      status: "READY",

      description:
          "Remote protection available",

      color: "#2563eb",
    },

    {
      title:
          "Face Intrusion Alert",

      status: "3 ALERTS",

      description:
          "Unauthorized faces detected",

      color: "#dc2626",
    },

    {
      title:
          "Threat Prediction Engine",

      status: "RUNNING",

      description:
          "AI risk analysis active",

      color: "#7c3aed",
    },
  ];

  const activities = [

    "Suspicious login attempt blocked",

    "AI motion anomaly detected",

    "Remote wipe request initialized",

    "Unknown face detected on TS-1002",

    "Emergency SOS activated",

    "Threat score increased to HIGH",
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
          Security Center
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          Enterprise AI security
          monitoring and protection
        </p>

      </div>

      {/* SECURITY STATUS */}
      <div
        style={{

          background: "#111827",

          borderRadius: "22px",

          padding: "30px",

          border:
              "1px solid #1e293b",

          marginBottom: "30px",

          display: "flex",

          justifyContent:
              "space-between",

          alignItems: "center",
        }}
      >

        <div>

          <div
            style={{

              display: "flex",

              alignItems: "center",

              gap: "14px",
            }}
          >

            <FaShieldAlt
              color="#22c55e"

              size={36}
            />

            <h2
              style={{
                color: "white",
              }}
            >
              AI Security Active
            </h2>

          </div>

          <p
            style={{

              marginTop: "14px",

              color: "#94a3b8",

              fontSize: "16px",
            }}
          >
            Enterprise protection
            system is actively
            monitoring all devices
          </p>

        </div>

        <div
          style={{

            background: "#16a34a",

            color: "white",

            padding:
                "16px 24px",

            borderRadius: "16px",

            fontWeight: "bold",

            fontSize: "18px",
          }}
        >
          SECURE
        </div>

      </div>

      {/* THREAT GRID */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",

          gap: "22px",

          marginBottom: "30px",
        }}
      >

        {threats.map(
          (
            threat,
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
                    `1px solid ${threat.color}`,

                color: "white",
              }}
            >

              {/* ICON */}
              <div
                style={{

                  width: "70px",

                  height: "70px",

                  borderRadius:
                      "18px",

                  background:
                      threat.color,

                  display: "flex",

                  justifyContent:
                      "center",

                  alignItems:
                      "center",

                  fontSize: "30px",

                  marginBottom:
                      "20px",
                }}
              >

                {index === 0 &&
                    <FaRobot />}

                {index === 1 &&
                    <FaLock />}

                {index === 2 &&
                    <FaFingerprint />}

                {index === 3 &&
                    <FaExclamationTriangle />}

              </div>

              <h2>
                {threat.title}
              </h2>

              <div
                style={{

                  marginTop: "16px",

                  background:
                      threat.color,

                  display:
                      "inline-block",

                  padding:
                      "8px 14px",

                  borderRadius:
                      "12px",

                  fontWeight:
                      "bold",

                  fontSize: "13px",
                }}
              >
                {threat.status}
              </div>

              <p
                style={{

                  marginTop: "18px",

                  color: "#cbd5e1",

                  lineHeight: "1.6",
                }}
              >
                {threat.description}
              </p>

            </div>
          )
        )}

      </div>

      {/* LIVE ACTIVITY */}
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

            marginBottom: "24px",
          }}
        >

          <FaBell
            color="#facc15"

            size={24}
          />

          <h2
            style={{
              color: "white",
            }}
          >
            Security Activity Feed
          </h2>

        </div>

        {activities.map(
          (
            activity,
            index
          ) => (

            <div

              key={index}

              style={{

                background:
                    "#1e293b",

                padding: "18px",

                borderRadius: "14px",

                marginBottom:
                    "14px",

                display: "flex",

                alignItems:
                    "center",

                gap: "14px",

                color: "white",
              }}
            >

              <FaUserSecret
                color="#38bdf8"
              />

              <span>
                {activity}
              </span>

            </div>
          )
        )}

      </div>

    </AdminLayout>
  );
};

export default Security;