import {

  FaExclamationTriangle,

  FaMapMarkerAlt,

  FaShieldAlt,

  FaPhoneAlt,

  FaClock,

  FaSatelliteDish,

  FaArrowRight,

  FaCheckCircle,

  FaBroadcastTower,

  FaHeartbeat,

} from "react-icons/fa";

// =====================================
// SOS ALERT CARD
// =====================================
const SOSAlertCard = ({

  deviceId,

  latitude,

  longitude,

  message,

  emergencyType = "Critical Emergency",

  severity = "HIGH",

  status = "LIVE",

  time = "2 mins ago",

  battery = "82%",

  signal = "Strong",

  responder = "AI Security Team",

  onTrack,

  onResolve,

}) => {

  // =====================================
  // SEVERITY COLOR
  // =====================================
  const severityColor =
    severity === "HIGH"
      ? "#ef4444"
      : severity === "MEDIUM"
      ? "#f59e0b"
      : "#22c55e";

  return (

    <div
      style={{

        background:
          "linear-gradient(145deg, #111827, #7f1d1d)",

        border:
          `1px solid ${severityColor}`,

        borderRadius: "28px",

        padding: "28px",

        color: "white",

        marginBottom: "28px",

        position: "relative",

        overflow: "hidden",

        boxShadow:
          `0 15px 40px rgba(0,0,0,0.4)`,

        transition:
          "all 0.35s ease",
      }}
    >

      {/* ================================= */}
      {/* GLOW EFFECT */}
      {/* ================================= */}
      <div
        style={{

          position: "absolute",

          top: "-120px",

          right: "-120px",

          width: "240px",

          height: "240px",

          borderRadius: "50%",

          background:
            `${severityColor}22`,

          filter: "blur(80px)",

          pointerEvents: "none",
        }}
      />

      {/* ================================= */}
      {/* LIVE PULSE */}
      {/* ================================= */}
      <div
        style={{

          position: "absolute",

          top: "22px",

          right: "22px",

          display: "flex",

          alignItems: "center",

          gap: "10px",

          background:
            "rgba(0,0,0,0.35)",

          border:
            `1px solid ${severityColor}`,

          padding: "8px 14px",

          borderRadius: "999px",

          color: severityColor,

          fontWeight: "bold",

          fontSize: "13px",
        }}
      >

        <div
          style={{

            width: "10px",

            height: "10px",

            borderRadius: "50%",

            background:
              severityColor,

            boxShadow:
              `0 0 15px ${severityColor}`,
          }}
        />

        {status}

      </div>

      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}
      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "flex-start",

          gap: "20px",

          flexWrap: "wrap",

          marginBottom: "26px",
        }}
      >

        {/* LEFT */}
        <div
          style={{

            display: "flex",

            gap: "18px",

            flex: 1,
          }}
        >

          {/* ICON */}
          <div
            style={{

              width: "78px",

              height: "78px",

              borderRadius: "24px",

              background:
                `linear-gradient(135deg, ${severityColor}, #dc2626)`,

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              fontSize: "34px",

              boxShadow:
                `0 10px 30px ${severityColor}55`,
            }}
          >

            <FaExclamationTriangle />

          </div>

          {/* TEXT */}
          <div>

            <div
              style={{

                display: "flex",

                alignItems: "center",

                gap: "12px",

                flexWrap: "wrap",

                marginBottom: "10px",
              }}
            >

              <h2
                style={{

                  fontSize: "28px",

                  fontWeight: "700",

                  margin: 0,
                }}
              >

                Emergency SOS Alert

              </h2>

              <span
                style={{

                  background:
                    `${severityColor}20`,

                  border:
                    `1px solid ${severityColor}`,

                  color:
                    severityColor,

                  padding:
                    "5px 12px",

                  borderRadius:
                    "999px",

                  fontSize: "12px",

                  fontWeight: "bold",
                }}
              >

                {severity}

              </span>

            </div>

            <p
              style={{

                color: "#fecaca",

                fontSize: "16px",

                marginBottom: "12px",
              }}
            >

              {emergencyType}

            </p>

            {/* META */}
            <div
              style={{

                display: "flex",

                flexWrap: "wrap",

                gap: "18px",

                color: "#e2e8f0",

                fontSize: "14px",
              }}
            >

              <div
                style={{

                  display: "flex",

                  alignItems: "center",

                  gap: "8px",
                }}
              >

                <FaClock />

                {time}

              </div>

              <div
                style={{

                  display: "flex",

                  alignItems: "center",

                  gap: "8px",
                }}
              >

                <FaHeartbeat />

                Battery:
                {" "}
                {battery}

              </div>

              <div
                style={{

                  display: "flex",

                  alignItems: "center",

                  gap: "8px",
                }}
              >

                <FaSatelliteDish />

                Signal:
                {" "}
                {signal}

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================================= */}
      {/* GRID SECTION */}
      {/* ================================= */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",

          gap: "20px",

          marginBottom: "24px",
        }}
      >

        {/* DEVICE */}
        <div
          style={cardStyle}
        >

          <div
            style={labelStyle}
          >

            <FaShieldAlt />

            Device ID

          </div>

          <h3
            style={valueStyle}
          >

            {deviceId}

          </h3>

        </div>

        {/* LOCATION */}
        <div
          style={cardStyle}
        >

          <div
            style={labelStyle}
          >

            <FaMapMarkerAlt />

            Live GPS Location

          </div>

          <h3
            style={valueStyle}
          >

            {latitude},
            {" "}
            {longitude}

          </h3>

        </div>

        {/* RESPONSE TEAM */}
        <div
          style={cardStyle}
        >

          <div
            style={labelStyle}
          >

            <FaBroadcastTower />

            Response Team

          </div>

          <h3
            style={valueStyle}
          >

            {responder}

          </h3>

        </div>

      </div>

      {/* ================================= */}
      {/* MESSAGE BOX */}
      {/* ================================= */}
      <div
        style={{

          background:
            "rgba(15,23,42,0.7)",

          border:
            "1px solid rgba(255,255,255,0.08)",

          borderRadius: "20px",

          padding: "22px",

          marginBottom: "24px",
        }}
      >

        <h3
          style={{

            fontSize: "18px",

            marginBottom: "14px",

            color: "#fca5a5",
          }}
        >

          Emergency Description

        </h3>

        <p
          style={{

            lineHeight: "30px",

            color: "#e2e8f0",

            fontSize: "15px",

            margin: 0,
          }}
        >

          {message}

        </p>

      </div>

      {/* ================================= */}
      {/* ACTION BUTTONS */}
      {/* ================================= */}
      <div
        style={{

          display: "flex",

          gap: "16px",

          flexWrap: "wrap",
        }}
      >

        {/* TRACK */}
        <button
          onClick={onTrack}
          style={trackButton}
        >

          <FaMapMarkerAlt />

          Track Live Location

          <FaArrowRight />

        </button>

        {/* CONTACT */}
        <button
          style={callButton}
        >

          <FaPhoneAlt />

          Contact Emergency Team

        </button>

        {/* RESOLVE */}
        <button
          onClick={onResolve}
          style={resolveButton}
        >

          <FaCheckCircle />

          Resolve Alert

        </button>

      </div>

    </div>
  );
};

// =====================================
// SHARED STYLES
// =====================================
const cardStyle = {

  background:
    "rgba(15,23,42,0.65)",

  border:
    "1px solid rgba(255,255,255,0.08)",

  borderRadius: "18px",

  padding: "18px",
};

const labelStyle = {

  display: "flex",

  alignItems: "center",

  gap: "10px",

  color: "#94a3b8",

  fontSize: "14px",

  marginBottom: "12px",
};

const valueStyle = {

  fontSize: "18px",

  fontWeight: "700",

  color: "white",

  margin: 0,
};

const trackButton = {

  background:
    "linear-gradient(135deg, #2563eb, #3b82f6)",

  border: "none",

  color: "white",

  padding: "14px 20px",

  borderRadius: "16px",

  cursor: "pointer",

  fontWeight: "700",

  display: "flex",

  alignItems: "center",

  gap: "10px",

  boxShadow:
    "0 10px 25px rgba(37,99,235,0.35)",
};

const callButton = {

  background:
    "linear-gradient(135deg, #dc2626, #ef4444)",

  border: "none",

  color: "white",

  padding: "14px 20px",

  borderRadius: "16px",

  cursor: "pointer",

  fontWeight: "700",

  display: "flex",

  alignItems: "center",

  gap: "10px",

  boxShadow:
    "0 10px 25px rgba(239,68,68,0.35)",
};

const resolveButton = {

  background:
    "linear-gradient(135deg, #16a34a, #22c55e)",

  border: "none",

  color: "white",

  padding: "14px 20px",

  borderRadius: "16px",

  cursor: "pointer",

  fontWeight: "700",

  display: "flex",

  alignItems: "center",

  gap: "10px",

  boxShadow:
    "0 10px 25px rgba(34,197,94,0.35)",
};

export default SOSAlertCard;