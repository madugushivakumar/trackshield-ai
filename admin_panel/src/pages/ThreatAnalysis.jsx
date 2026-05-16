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

const ThreatAnalysis = () => {

  const [threats,
    setThreats] =
      useState([]);

  useEffect(() => {

    const threatRef =
      ref(
        database,
        "critical_threats"
      );

    onValue(
      threatRef,
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

          setThreats(
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
        AI Threat Analysis
      </h1>

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
              Threat Level:
              {" "}
              {threat.level}
            </h2>

            <p>
              Device:
              {" "}
              {threat.deviceId}
            </p>

            <p>
              Threat Score:
              {" "}
              {threat.score}
            </p>

            <p>
              {threat.message}
            </p>

          </div>
        )
      )}

    </AdminLayout>
  );
};

export default ThreatAnalysis;