import AdminLayout
from "../layout/AdminLayout";

const LiveSurveillance = () => {

  return (

    <AdminLayout>

      <h1
        style={{

          color: "white",

          marginBottom: "30px",
        }}
      >
        Live Surveillance Center
      </h1>

      <div
        style={{

          display: "grid",

          gridTemplateColumns:
              "repeat(auto-fit, minmax(400px, 1fr))",

          gap: "24px",
        }}
      >

        {/* CAMERA CARD */}
        <div
          style={{

            background:
                "#111827",

            borderRadius:
                "20px",

            padding: "20px",

            border:
                "1px solid #1e293b",
          }}
        >

          <h2
            style={{
              color: "white",
            }}
          >
            Device TS-1001
          </h2>

          <div
            style={{

              height: "300px",

              background:
                  "black",

              borderRadius:
                  "16px",

              marginTop: "20px",

              display: "flex",

              justifyContent:
                  "center",

              alignItems:
                  "center",

              color: "lime",

              fontSize: "20px",
            }}
          >
            LIVE CAMERA FEED
          </div>

          <button
            style={{

              marginTop: "20px",

              width: "100%",

              background:
                  "crimson",

              border: "none",

              padding: "14px",

              borderRadius:
                  "14px",

              color: "white",

              fontWeight:
                  "bold",

              cursor: "pointer",
            }}
          >
            START SURVEILLANCE
          </button>

        </div>

      </div>

    </AdminLayout>
  );
};

export default LiveSurveillance;