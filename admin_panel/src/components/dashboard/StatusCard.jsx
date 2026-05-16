import {

  FaArrowUp,

} from "react-icons/fa";

// =====================================
// STATUS CARD
// =====================================
const StatusCard = ({

  title,

  value,

  icon,

  color,

  subtitle,

  percentage,

}) => {

  return (

    <div
      style={{

        background: "#111827",

        border:
          `1px solid ${color}`,

        borderRadius: "22px",

        padding: "24px",

        color: "white",

        minHeight: "200px",

        display: "flex",

        flexDirection: "column",

        justifyContent:
          "space-between",

        boxShadow:
          "0 8px 25px rgba(0,0,0,0.25)",

        transition: "0.3s",
      }}
    >

      {/* ========================== */}
      {/* TOP */}
      {/* ========================== */}
      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "flex-start",
        }}
      >

        <div>

          <h3
            style={{

              color: "#94a3b8",

              fontSize: "16px",

              marginBottom: "12px",

              fontWeight: "500",
            }}
          >

            {title}

          </h3>

          <h1
            style={{

              fontSize: "42px",

              fontWeight: "bold",

              marginBottom: "10px",
            }}
          >

            {value}

          </h1>

          {/* TREND */}
          <div
            style={{

              display: "flex",

              alignItems: "center",

              gap: "6px",

              color: "#22c55e",

              fontSize: "14px",
            }}
          >

            <FaArrowUp />

            <span>

              {

                percentage ||
                "+12.5%"

              }

            </span>

          </div>

        </div>

        {/* ====================== */}
        {/* ICON */}
        {/* ====================== */}
        <div
          style={{

            width: "78px",

            height: "78px",

            borderRadius: "20px",

            background: color,

            display: "flex",

            justifyContent:
              "center",

            alignItems:
              "center",

            fontSize: "34px",

            color: "white",

            boxShadow:
              "0 6px 18px rgba(0,0,0,0.3)",
          }}
        >

          {icon}

        </div>

      </div>

      {/* ========================== */}
      {/* BOTTOM */}
      {/* ========================== */}
      <div>

        <p
          style={{

            marginTop: "18px",

            color: "#cbd5e1",

            fontSize: "15px",

            lineHeight: "24px",
          }}
        >

          {

            subtitle ||

            "Realtime monitoring data from enterprise security system."

          }

        </p>

      </div>

    </div>
  );
};

export default StatusCard;