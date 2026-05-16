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

const VoiceSOSAlerts = () => {

  const [alerts,
    setAlerts] =
      useState([]);

  useEffect(() => {

    const alertsRef =
      ref(
        database,
        "voice_sos_alerts"
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
        Voice SOS Alerts
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
                  "18px",

              border:
                  "1px solid orange",

              color: "white",
            }}
          >

            <h2
              style={{
                color: "orange",
              }}
            >
              Voice Emergency Triggered
            </h2>

            <p>
              Device:
              {" "}
              {alert.deviceId}
            </p>

            <p>
              Phrase:
              {" "}
              {alert.phrase}
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

export default VoiceSOSAlerts;