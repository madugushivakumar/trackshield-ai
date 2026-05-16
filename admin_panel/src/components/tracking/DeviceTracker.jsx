import {

  FaMobileAlt,

  FaBatteryHalf,

  FaWifi,

  FaMapMarkerAlt,

} from "react-icons/fa";

// =====================================
// DEVICE TRACKER
// =====================================
const DeviceTracker = ({

  deviceName,

  deviceId,

  battery,

  status,

  location,

}) => {

  return (

    <div
      style={{

        background: "#111827",

        border:
          "1px solid #1e293b",

        borderRadius: "20px",

        padding: "22px",

        color: "white",

        marginBottom: "20px",
      }}
    >

      {/* HEADER */}
      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          marginBottom: "18px",
        }}
      >

        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "14px",
          }}
        >

          <div
            style={{

              width: "60px",

              height: "60px",

              borderRadius: "16px",

              background: "#1e293b",

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",
            }}
          >

            <FaMobileAlt
              size={28}
              color="#38bdf8"
            />

          </div>

          <div>

            <h2
              style={{

                fontSize: "22px",

                fontWeight: "bold",
              }}
            >

              {deviceName}

            </h2>

            <p
              style={{
                color: "#94a3b8",
              }}
            >

              {deviceId}

            </p>

          </div>

        </div>

        {/* STATUS */}
        <div
          style={{

            padding:
              "8px 14px",

            borderRadius: "12px",

            background:

              status === "Online"

                ? "#22c55e"

                : "#ef4444",
          }}
        >

          {status}

        </div>

      </div>

      {/* DETAILS */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(3,1fr)",

          gap: "18px",
        }}
      >

        {/* BATTERY */}
        <div
          style={{

            background: "#0f172a",

            padding: "16px",

            borderRadius: "14px",
          }}
        >

          <div
            style={{

              display: "flex",

              alignItems: "center",

              gap: "10px",

              marginBottom: "10px",
            }}
          >

            <FaBatteryHalf
              color="#22c55e"
            />

            Battery

          </div>

          <h3>

            {battery}%

          </h3>

        </div>

        {/* NETWORK */}
        <div
          style={{

            background: "#0f172a",

            padding: "16px",

            borderRadius: "14px",
          }}
        >

          <div
            style={{

              display: "flex",

              alignItems: "center",

              gap: "10px",

              marginBottom: "10px",
            }}
          >

            <FaWifi
              color="#38bdf8"
            />

            Network

          </div>

          <h3>

            Connected

          </h3>

        </div>

        {/* LOCATION */}
        <div
          style={{

            background: "#0f172a",

            padding: "16px",

            borderRadius: "14px",
          }}
        >

          <div
            style={{

              display: "flex",

              alignItems: "center",

              gap: "10px",

              marginBottom: "10px",
            }}
          >

            <FaMapMarkerAlt
              color="#ef4444"
            />

            Location

          </div>

          <h3>

            {location}

          </h3>

        </div>

      </div>

    </div>
  );
};

export default DeviceTracker;