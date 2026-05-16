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

const FaceIntrusionAlerts = () => {

  const [alerts,
    setAlerts] =
      useState([]);

  useEffect(() => {

    const alertsRef =
      ref(
        database,
        "face_intrusion_alerts"
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
        Face Intrusion Alerts
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
                  "20px",

              border:
                  "1px solid crimson",

              color: "white",
            }}
          >

            <h2
              style={{
                color: "crimson",
              }}
            >
              Unknown Face Detected
            </h2>

            <p>
              Device:
              {" "}
              {alert.deviceId}
            </p>

            <p>
              Faces:
              {" "}
              {alert.facesDetected}
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

export default FaceIntrusionAlerts;