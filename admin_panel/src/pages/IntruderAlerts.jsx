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

const IntruderAlerts = () => {

  const [alerts,
    setAlerts] =
      useState([]);

  useEffect(() => {

    const alertsRef =
      ref(
        database,
        "intruder_alerts"
      );

    onValue(
      alertsRef,
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

          setAlerts(
            loaded.reverse()
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
        Intruder Detection Alerts
      </h1>

      {alerts.map(
        (
          alert,
          index
        ) => (

          <div

            key={index}

            style={{

              background:
                  "#111827",

              padding: "24px",

              borderRadius: "18px",

              marginBottom:
                  "22px",

              border:
                  "1px solid red",

              color: "white",
            }}
          >

            <img

              src={alert.imageUrl}

              alt="intruder"

              style={{

                width: "100%",

                borderRadius: "16px",

                marginBottom: "18px",
              }}
            />

            <h2
              style={{
                color: "red",
              }}
            >
              Intruder Detected
            </h2>

            <p>
              Device:
              {" "}
              {alert.deviceId}
            </p>

            <p>
              Severity:
              {" "}
              {alert.severity}
            </p>

            <p>
              {alert.message}
            </p>

          </div>
        )
      )}

    </AdminLayout>
  );
};

export default IntruderAlerts;