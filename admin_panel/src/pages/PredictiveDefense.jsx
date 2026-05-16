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

const PredictiveDefense = () => {

  const [predictions,
    setPredictions] =
      useState([]);

  useEffect(() => {

    const predictionRef =
      ref(
        database,
        "predictive_threats"
      );

    onValue(
      predictionRef,
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

          setPredictions(
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
        Predictive Cyber Defense
      </h1>

      {predictions.map(
        (
          item,
          index
        ) => (

          <div

            key={index}

            style={{

              background:
                  "#111827",

              padding: "24px",

              borderRadius:
                  "20px",

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
              {item.prediction}
              {" "}
              THREAT FORECAST
            </h2>

            <p>
              Device:
              {" "}
              {item.deviceId}
            </p>

            <p>
              Probability:
              {" "}
              {item.probability}%
            </p>

            <p>
              {item.message}
            </p>

          </div>
        )
      )}

    </AdminLayout>
  );
};

export default PredictiveDefense;