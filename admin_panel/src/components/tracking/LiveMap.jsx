import {

  FaMapMarkedAlt,

} from "react-icons/fa";

// =====================================
// LIVE MAP
// =====================================
const LiveMap = () => {

  return (

    <div
      style={{

        width: "100%",

        height: "500px",

        background: "#111827",

        borderRadius: "22px",

        border:
          "1px solid #1e293b",

        overflow: "hidden",

        position: "relative",
      }}
    >

      {/* HEADER */}
      <div
        style={{

          padding: "20px",

          borderBottom:
            "1px solid #1e293b",

          display: "flex",

          alignItems: "center",

          gap: "12px",

          color: "white",
        }}
      >

        <FaMapMarkedAlt
          size={24}
          color="#38bdf8"
        />

        <div>

          <h2
            style={{

              fontSize: "22px",

              fontWeight: "bold",
            }}
          >

            Live Device Tracking

          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >

            Real-time location monitoring

          </p>

        </div>

      </div>

      {/* MAP PLACEHOLDER */}
      <div
        style={{

          width: "100%",

          height:
            "calc(100% - 90px)",

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          color: "#94a3b8",

          fontSize: "20px",
        }}
      >

        Google Maps Integration Here

      </div>

    </div>
  );
};

export default LiveMap;