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

const EnterpriseDevices = () => {

  const [devices,
    setDevices] =
      useState([]);

  useEffect(() => {

    const devicesRef =
      ref(
        database,
        "enterprise_devices/ORG-TRACKSHIELD"
      );

    onValue(
      devicesRef,
      (snapshot) => {

        const data =
          snapshot.val();

        if (data) {

          const loaded =
            Object.entries(data)
              .map(
                ([id, value]) => ({
                  id,
                  ...value,
                })
              );

          setDevices(
            loaded,
          );
        }
      }
    );

  }, []);

  return (

    <AdminLayout>

      <h1
        style={{

          color: "white",

          marginBottom: "30px",
        }}
      >
        Enterprise Device Fleet
      </h1>

      <div
        style={{

          display: "grid",

          gridTemplateColumns:
              "repeat(auto-fit, minmax(350px, 1fr))",

          gap: "24px",
        }}
      >

        {devices.map(
          (
            device,
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

              <h2>
                {device.deviceName}
              </h2>

              <p>
                Device ID:
                {" "}
                {device.deviceId}
              </p>

              <p>
                Status:
                {" "}
                {device.status}
              </p>

              <p>
                Security:
                {" "}
                {device.securityLevel}
              </p>

              <div
                style={{

                  marginTop: "20px",

                  display: "flex",

                  gap: "12px",
                }}
              >

                <button
                  style={{

                    background:
                        "#dc2626",

                    border: "none",

                    padding:
                        "10px 16px",

                    borderRadius:
                        "12px",

                    color: "white",

                    cursor: "pointer",
                  }}
                >
                  Lock
                </button>

                <button
                  style={{

                    background:
                        "#2563eb",

                    border: "none",

                    padding:
                        "10px 16px",

                    borderRadius:
                        "12px",

                    color: "white",

                    cursor: "pointer",
                  }}
                >
                  Track
                </button>

              </div>

            </div>
          )
        )}

      </div>

    </AdminLayout>
  );
};

export default EnterpriseDevices;