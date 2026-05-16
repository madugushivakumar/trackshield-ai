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

const ShutdownAlerts = () => {

  const [alerts,
    setAlerts] =
      useState([]);

  useEffect(() => {

    const alertsRef =
      ref(
        database,
        "shutdown_alerts"
      );

    onValue(
      alertsRef,
      (snapshot) => {

        const data =
          snapshot.val();

        if (data) {

          const loaded =
            Object.entries(data)
              .flatMap(

                ([deviceId,
                  values]) =>

                    Object.values(
                      values
                    ).map(
                      (alert) => ({
                        deviceId,
                        ...alert,
                      })
                    )
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
        Shutdown Threat Alerts
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

              padding: "22px",

              borderRadius: "18px",

              marginBottom:
                  "18px",

              border:
                  "1px solid red",

              color: "white",
            }}
          >

            <h2
              style={{
                color: "red",
              }}
            >
              {alert.message}
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

          </div>
        )
      )}

    </AdminLayout>
  );
};

export default ShutdownAlerts;