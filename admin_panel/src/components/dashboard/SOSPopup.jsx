import {

  FaExclamationTriangle,

  FaMapMarkerAlt,

  FaPhoneAlt,

  FaTimesCircle,

  FaLocationArrow,

} from "react-icons/fa";

// =====================================
// SOS POPUP
// =====================================
const SOSPopup = ({

  alert,

  onClose,

  onTrack,

}) => {

  if (!alert) {

    return null;
  }

  return (

    <div
      style={{

        position: "fixed",

        top: "20px",

        right: "20px",

        width: "400px",

        background: "#dc2626",

        color: "white",

        padding: "24px",

        borderRadius: "22px",

        zIndex: 9999,

        boxShadow:
          "0 15px 40px rgba(0,0,0,0.45)",

        border:
          "1px solid rgba(255,255,255,0.2)",

        animation:
          "slideIn 0.4s ease",
      }}
    >

      {/* ========================== */}
      {/* HEADER */}
      {/* ========================== */}
      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          marginBottom: "22px",
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

              background:
                "rgba(255,255,255,0.2)",

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",
            }}
          >

            <FaExclamationTriangle
              size={30}
            />

          </div>

          <div>

            <h2
              style={{

                fontSize: "24px",

                fontWeight: "bold",
              }}
            >

              Emergency SOS

            </h2>

            <p
              style={{

                opacity: 0.9,

                marginTop: "4px",
              }}
            >

              AI threat detected in realtime

            </p>

          </div>

        </div>

        {/* CLOSE */}
        <button

          onClick={onClose}

          style={{

            background: "transparent",

            border: "none",

            color: "white",

            cursor: "pointer",
          }}
        >

          <FaTimesCircle
            size={24}
          />

        </button>

      </div>

      {/* ========================== */}
      {/* DEVICE INFO */}
      {/* ========================== */}
      <div
        style={{

          background:
            "rgba(255,255,255,0.12)",

          padding: "16px",

          borderRadius: "16px",

          marginBottom: "18px",
        }}
      >

        <div
          style={{
            marginBottom: "10px",
          }}
        >

          <strong>

            Device ID:

          </strong>

          {" "}

          {

            alert.deviceId ||
            "Unknown Device"

          }

        </div>

        <div
          style={{
            marginBottom: "10px",
          }}
        >

          <strong>

            Threat Level:

          </strong>

          {" "}

          {

            alert.threatLevel ||
            "High"

          }

        </div>

        <div>

          <strong>

            Timestamp:

          </strong>

          {" "}

          {

            alert.time ||
            new Date()
              .toLocaleTimeString()

          }

        </div>

      </div>

      {/* ========================== */}
      {/* LOCATION */}
      {/* ========================== */}
      <div
        style={{

          display: "flex",

          alignItems: "center",

          gap: "12px",

          marginBottom: "16px",
        }}
      >

        <FaMapMarkerAlt
          size={20}
        />

        <span>

          {

            alert.latitude ||
            "0.0000"

          },

          {" "}

          {

            alert.longitude ||
            "0.0000"

          }

        </span>

      </div>

      {/* ========================== */}
      {/* STATUS */}
      {/* ========================== */}
      <div
        style={{

          display: "flex",

          alignItems: "center",

          gap: "12px",

          marginBottom: "24px",
        }}
      >

        <FaPhoneAlt
          size={18}
        />

        <span>

          Emergency broadcast active

        </span>

      </div>

      {/* ========================== */}
      {/* BUTTONS */}
      {/* ========================== */}
      <div
        style={{

          display: "flex",

          gap: "12px",
        }}
      >

        {/* TRACK */}
        <button

          onClick={onTrack}

          style={{

            flex: 1,

            background: "white",

            color: "#dc2626",

            border: "none",

            padding: "14px",

            borderRadius: "14px",

            fontWeight: "bold",

            cursor: "pointer",

            display: "flex",

            justifyContent:
              "center",

            alignItems:
              "center",

            gap: "10px",
          }}
        >

          <FaLocationArrow />

          Track Now

        </button>

        {/* CLOSE */}
        <button

          onClick={onClose}

          style={{

            flex: 1,

            background:
              "rgba(255,255,255,0.2)",

            color: "white",

            border: "none",

            padding: "14px",

            borderRadius: "14px",

            fontWeight: "bold",

            cursor: "pointer",
          }}
        >

          Dismiss

        </button>

      </div>

    </div>
  );
};

export default SOSPopup;