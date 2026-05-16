import {

  FaBell,

  FaClock,

} from "react-icons/fa";

// =====================================
// ALERT CARD
// =====================================
const AlertCard = ({

  title,

  message,

  time,

  color = "#ef4444",

}) => {

  return (

    <div
      style={{

        background: "#111827",

        border:
          `1px solid ${color}`,

        borderRadius: "18px",

        padding: "20px",

        color: "white",

        marginBottom: "18px",

        boxShadow:
          "0 6px 20px rgba(0,0,0,0.2)",
      }}
    >

      {/* HEADER */}
      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          marginBottom: "14px",
        }}
      >

        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "12px",
          }}
        >

          <div
            style={{

              width: "50px",

              height: "50px",

              borderRadius: "14px",

              background: color,

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",
            }}
          >

            <FaBell size={22} />

          </div>

          <div>

            <h3
              style={{

                fontSize: "18px",

                fontWeight: "bold",
              }}
            >

              {title}

            </h3>

            <p
              style={{
                color: "#94a3b8",
              }}
            >

              Security Notification

            </p>

          </div>

        </div>

      </div>

      {/* MESSAGE */}
      <p
        style={{

          color: "#cbd5e1",

          lineHeight: "24px",

          marginBottom: "18px",
        }}
      >

        {message}

      </p>

      {/* TIME */}
      <div
        style={{

          display: "flex",

          alignItems: "center",

          gap: "10px",

          color: "#94a3b8",

          fontSize: "14px",
        }}
      >

        <FaClock />

        {time}

      </div>

    </div>
  );
};

export default AlertCard;