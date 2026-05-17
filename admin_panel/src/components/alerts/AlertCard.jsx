import {
  FaBell,
  FaClock,
  FaShieldAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaArrowRight,
  FaRobot,
  FaMapMarkerAlt,
} from "react-icons/fa";

// =====================================
// ALERT CARD
// =====================================
const AlertCard = ({

  title,

  message,

  time,

  color = "#ef4444",

  severity = "Critical",

  status = "Active",

  location = "Enterprise Server",

  aiConfidence = "98%",

  category = "Cyber Threat",

  onResolve,

}) => {

  // =====================================
  // STATUS COLORS
  // =====================================
  const severityColor =
    severity === "Critical"
      ? "#ef4444"
      : severity === "High"
      ? "#f59e0b"
      : severity === "Medium"
      ? "#3b82f6"
      : "#22c55e";

  return (

    <div
      style={{

        background:
          "linear-gradient(145deg, #0f172a, #111827)",

        border:
          `1px solid ${severityColor}`,

        borderRadius: "24px",

        padding: "24px",

        color: "white",

        marginBottom: "24px",

        position: "relative",

        overflow: "hidden",

        boxShadow:
          `0 10px 35px rgba(0,0,0,0.35)`,

        transition:
          "all 0.35s ease",
      }}
    >

      {/* ================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================= */}
      <div
        style={{

          position: "absolute",

          top: "-80px",

          right: "-80px",

          width: "180px",

          height: "180px",

          borderRadius: "50%",

          background:
            `${severityColor}18`,

          filter: "blur(60px)",

          pointerEvents: "none",
        }}
      />

      {/* ================================= */}
      {/* TOP HEADER */}
      {/* ================================= */}
      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "flex-start",

          gap: "20px",

          flexWrap: "wrap",

          marginBottom: "22px",
        }}
      >

        {/* LEFT */}
        <div
          style={{

            display: "flex",

            gap: "16px",

            flex: 1,
          }}
        >

          {/* ICON */}
          <div
            style={{

              width: "68px",

              height: "68px",

              minWidth: "68px",

              borderRadius: "20px",

              background:
                `linear-gradient(135deg, ${severityColor}, ${color})`,

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              boxShadow:
                `0 10px 25px ${severityColor}50`,
            }}
          >

            <FaBell
              size={28}
            />

          </div>

          {/* INFO */}
          <div
            style={{
              flex: 1,
            }}
          >

            <div
              style={{

                display: "flex",

                alignItems: "center",

                gap: "10px",

                flexWrap: "wrap",

                marginBottom: "8px",
              }}
            >

              <h3
                style={{

                  fontSize: "24px",

                  fontWeight: "700",

                  margin: 0,
                }}
              >

                {title}

              </h3>

              <span
                style={{

                  background:
                    `${severityColor}20`,

                  color:
                    severityColor,

                  border:
                    `1px solid ${severityColor}`,

                  padding:
                    "4px 12px",

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

                color: "#94a3b8",

                marginBottom: "10px",

                fontSize: "15px",
              }}
            >

              AI Security Intelligence Alert

            </p>

            {/* META INFO */}
            <div
              style={{

                display: "flex",

                gap: "18px",

                flexWrap: "wrap",

                fontSize: "14px",

                color: "#cbd5e1",
              }}
            >

              <div
                style={{

                  display: "flex",

                  alignItems: "center",

                  gap: "8px",
                }}
              >

                <FaShieldAlt />

                {category}

              </div>

              <div
                style={{

                  display: "flex",

                  alignItems: "center",

                  gap: "8px",
                }}
              >

                <FaMapMarkerAlt />

                {location}

              </div>

            </div>

          </div>

        </div>

        {/* STATUS */}
        <div
          style={{

            background:
              "rgba(15,23,42,0.8)",

            border:
              "1px solid #334155",

            borderRadius: "18px",

            padding: "14px 18px",

            minWidth: "170px",
          }}
        >

          <p
            style={{

              color: "#94a3b8",

              marginBottom: "8px",

              fontSize: "13px",
            }}
          >

            Threat Status

          </p>

          <h3
            style={{

              color:
                severityColor,

              fontSize: "22px",

              marginBottom: "8px",
            }}
          >

            {status}

          </h3>

          <div
            style={{

              display: "flex",

              alignItems: "center",

              gap: "8px",

              color: "#22c55e",

              fontSize: "13px",

              fontWeight: "bold",
            }}
          >

            <FaRobot />

            AI Confidence:
            {" "}
            {aiConfidence}

          </div>

        </div>

      </div>

      {/* ================================= */}
      {/* MESSAGE */}
      {/* ================================= */}
      <div
        style={{

          background:
            "rgba(15,23,42,0.65)",

          border:
            "1px solid rgba(51,65,85,0.5)",

          borderRadius: "18px",

          padding: "18px",

          marginBottom: "22px",
        }}
      >

        <p
          style={{

            color: "#e2e8f0",

            lineHeight: "30px",

            fontSize: "15px",

            margin: 0,
          }}
        >

          {message}

        </p>

      </div>

      {/* ================================= */}
      {/* FOOTER */}
      {/* ================================= */}
      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          flexWrap: "wrap",

          gap: "18px",
        }}
      >

        {/* TIME */}
        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "12px",

            color: "#94a3b8",

            fontSize: "14px",
          }}
        >

          <div
            style={{

              width: "38px",

              height: "38px",

              borderRadius: "12px",

              background:
                "rgba(15,23,42,0.9)",

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              border:
                "1px solid #334155",
            }}
          >

            <FaClock />

          </div>

          Detected
          {" "}
          {time}

        </div>

        {/* ACTION BUTTONS */}
        <div
          style={{

            display: "flex",

            gap: "14px",

            flexWrap: "wrap",
          }}
        >

          {/* VIEW DETAILS */}
          <button
            style={{

              background:
                "rgba(37,99,235,0.15)",

              border:
                "1px solid #2563eb",

              color: "#60a5fa",

              padding:
                "12px 18px",

              borderRadius: "14px",

              cursor: "pointer",

              fontWeight: "600",

              display: "flex",

              alignItems: "center",

              gap: "10px",

              transition:
                "0.3s ease",
            }}
          >

            View Details

            <FaArrowRight />

          </button>

          {/* RESOLVE */}
          <button
            onClick={onResolve}
            style={{

              background:
                "linear-gradient(135deg, #16a34a, #22c55e)",

              border: "none",

              color: "white",

              padding:
                "12px 18px",

              borderRadius: "14px",

              cursor: "pointer",

              fontWeight: "700",

              display: "flex",

              alignItems: "center",

              gap: "10px",

              boxShadow:
                "0 8px 20px rgba(34,197,94,0.3)",
            }}
          >

            <FaCheckCircle />

            Resolve Alert

          </button>

        </div>

      </div>

      {/* ================================= */}
      {/* LIVE INDICATOR */}
      {/* ================================= */}
      <div
        style={{

          position: "absolute",

          top: "18px",

          right: "18px",

          width: "12px",

          height: "12px",

          borderRadius: "50%",

          background:
            severityColor,

          boxShadow:
            `0 0 15px ${severityColor}`,
        }}
      />

    </div>
  );
};

export default AlertCard;