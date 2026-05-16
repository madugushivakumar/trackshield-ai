import AdminLayout
from "../layout/AdminLayout";

import {
  useEffect,
  useState,
} from "react";

import {
  ref,
  onValue,
} from "firebase/database";

import {
  database,
} from "../services/firebase";

const IncidentResponseCenter = () => {

  const [incidents,
    setIncidents] =
      useState([]);

  useEffect(() => {

    const sources = [

      "critical_threats",

      "behavior_threats",

      "face_intrusion_alerts",

      "sim_alerts",

      "shutdown_alerts",

      "voice_sos_alerts",
    ];

    const allIncidents = [];

    sources.forEach(
      (source) => {

        const sourceRef =
          ref(
            database,
            source
          );

        onValue(
          sourceRef,
          (snapshot) => {

            const data =
              snapshot.val();

            if (data) {

              const loaded =
                Object.entries(data)
                  .flatMap(
                    ([key, value]) => {

                      // nested alerts
                      if (

                      typeof value ===
                      "object"

                      ) {

                        return Object.values(
                          value
                        ).map(
                          (item) => ({

                            source,

                            ...item,
                          })
                        );
                      }

                      return [];
                    }
                  );

              allIncidents.push(
                ...loaded
              );

              // SORT BY TIME
              allIncidents.sort(

                (a, b) =>

                  (b.timestamp || 0) -
                  (a.timestamp || 0)
              );

              setIncidents([
                ...allIncidents,
              ]);
            }
          }
        );
      }
    );

  }, []);

  // =====================================
  // COLORS
  // =====================================
  const getColor = (
    level
  ) => {

    if (
      level === "CRITICAL"
    ) {
      return "#dc2626";
    }

    if (
      level === "HIGH"
    ) {
      return "#f97316";
    }

    if (
      level === "MEDIUM"
    ) {
      return "#facc15";
    }

    return "#22c55e";
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

            marginBottom: "10px",
          }}
        >
          Incident Response Center
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          Enterprise cybersecurity
          incident command dashboard
        </p>

      </div>

      {/* INCIDENTS */}
      <div
        style={{

          display: "flex",

          flexDirection:
              "column",

          gap: "20px",
        }}
      >

        {incidents.map(
          (
            incident,
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
                    `1px solid ${getColor(incident.level || incident.severity)}`,

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

                  marginBottom:
                      "18px",
                }}
              >

                <div>

                  <h2
                    style={{

                      color:
                          getColor(
                            incident.level ||
                            incident.severity
                          ),
                    }}
                  >
                    {incident.level ||
                        incident.severity ||
                        "ALERT"}
                  </h2>

                  <p
                    style={{
                      color:
                          "#94a3b8",
                    }}
                  >
                    {incident.source}
                  </p>

                </div>

                <div
                  style={{

                    background:
                        getColor(
                          incident.level ||
                          incident.severity
                        ),

                    padding:
                        "8px 16px",

                    borderRadius:
                        "12px",

                    fontWeight:
                        "bold",
                  }}
                >
                  ACTIVE
                </div>

              </div>

              {/* INFO */}
              <div
                style={{

                  display: "grid",

                  gridTemplateColumns:
                      "repeat(auto-fit, minmax(220px, 1fr))",

                  gap: "16px",
                }}
              >

                <div>

                  <p
                    style={{
                      color:
                          "#94a3b8",
                    }}
                  >
                    Device ID
                  </p>

                  <h3>
                    {incident.deviceId ||
                        "UNKNOWN"}
                  </h3>

                </div>

                <div>

                  <p
                    style={{
                      color:
                          "#94a3b8",
                    }}
                  >
                    Threat Score
                  </p>

                  <h3>
                    {incident.score ||
                        "N/A"}
                  </h3>

                </div>

                <div>

                  <p
                    style={{
                      color:
                          "#94a3b8",
                    }}
                  >
                    Message
                  </p>

                  <h3>
                    {incident.message ||
                        "Threat detected"}
                  </h3>

                </div>

              </div>

              {/* ACTIONS */}
              <div
                style={{

                  display: "flex",

                  gap: "14px",

                  marginTop: "24px",
                }}
              >

                <button
                  style={{

                    background:
                        "#dc2626",

                    border: "none",

                    padding:
                        "12px 20px",

                    borderRadius:
                        "12px",

                    color: "white",

                    cursor: "pointer",

                    fontWeight:
                        "bold",
                  }}
                >
                  Lock Device
                </button>

                <button
                  style={{

                    background:
                        "#2563eb",

                    border: "none",

                    padding:
                        "12px 20px",

                    borderRadius:
                        "12px",

                    color: "white",

                    cursor: "pointer",

                    fontWeight:
                        "bold",
                  }}
                >
                  Start Surveillance
                </button>

                <button
                  style={{

                    background:
                        "#16a34a",

                    border: "none",

                    padding:
                        "12px 20px",

                    borderRadius:
                        "12px",

                    color: "white",

                    cursor: "pointer",

                    fontWeight:
                        "bold",
                  }}
                >
                  Resolve Incident
                </button>

              </div>

            </div>
          )
        )}

      </div>

    </AdminLayout>
  );
};

export default IncidentResponseCenter;