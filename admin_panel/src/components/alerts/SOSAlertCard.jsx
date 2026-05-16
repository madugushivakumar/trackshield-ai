import {

  FaExclamationTriangle,

  FaMapMarkerAlt,

} from "react-icons/fa";

// =====================================
// SOS ALERT CARD
// =====================================
const SOSAlertCard = ({

  deviceId,

  latitude,

  longitude,

  message,

}) => {

  return (

    <div
      style={{

        background: "#7f1d1d",

        border:
          "1px solid #ef4444",

        borderRadius: "18px",

        padding: "22px",

        color: "white",

        marginBottom: "20px",
      }}
    >

      {/* HEADER */}
      <div
        style={{

          display: "flex",

          alignItems: "center",

          gap: "14px",

          marginBottom: "16px",
        }}
      >

        <FaExclamationTriangle
          size={28}
          color="#facc15"
        />

        <div>

          <h2
            style={{

              fontSize: "22px",

              fontWeight: "bold",
            }}
          >

            Emergency SOS Alert

          </h2>

          <p
            style={{
              opacity: 0.9,
            }}
          >

            High priority emergency

          </p>

        </div>

      </div>

      {/* DEVICE */}
      <div
        style={{
          marginBottom: "12px",
        }}
      >

        <strong>
          Device ID:
        </strong>

        {" "}

        {deviceId}

      </div>

      {/* LOCATION */}
      <div
        style={{

          display: "flex",

          alignItems: "center",

          gap: "10px",

          marginBottom: "12px",
        }}
      >

        <FaMapMarkerAlt />

        <span>

          {latitude},
          {" "}
          {longitude}

        </span>

      </div>

      {/* MESSAGE */}
      <p
        style={{
          lineHeight: "24px",
        }}
      >

        {message}

      </p>

    </div>
  );
};

export default SOSAlertCard;