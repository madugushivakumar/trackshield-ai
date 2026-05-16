import {

  FaShieldVirus,

  FaRadiation,

} from "react-icons/fa";

// =====================================
// THREAT ALERT CARD
// =====================================
const ThreatAlertCard = ({

  threat,

  severity,

  description,

}) => {

  const getColor =
    () => {

      switch (severity) {

        case "Critical":
          return "#dc2626";

        case "High":
          return "#f97316";

        case "Medium":
          return "#eab308";

        default:
          return "#22c55e";
      }
    };

  return (

    <div
      style={{

        background: "#111827",

        border:
          `1px solid ${getColor()}`,

        borderRadius: "18px",

        padding: "22px",

        color: "white",

        marginBottom: "18px",
      }}
    >

      {/* HEADER */}
      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          marginBottom: "16px",
        }}
      >

        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "14px",
          }}
        >

          <FaShieldVirus
            size={28}
            color={getColor()}
          />

          <div>

            <h2
              style={{

                fontSize: "20px",

                fontWeight: "bold",
              }}
            >

              {threat}

            </h2>

            <p
              style={{
                color: "#94a3b8",
              }}
            >

              AI Threat Detection

            </p>

          </div>

        </div>

        {/* SEVERITY */}
        <div
          style={{

            background:
              getColor(),

            padding:
              "8px 14px",

            borderRadius: "12px",

            display: "flex",

            alignItems: "center",

            gap: "8px",
          }}
        >

          <FaRadiation />

          {severity}

        </div>

      </div>

      {/* DESCRIPTION */}
      <p
        style={{

          color: "#cbd5e1",

          lineHeight: "24px",
        }}
      >

        {description}

      </p>

    </div>
  );
};

export default ThreatAlertCard;