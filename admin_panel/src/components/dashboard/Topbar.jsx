import {

  FaBell,

  FaUserCircle,

  FaWifi,

  FaShieldAlt,

  FaServer,

  FaMicrochip,

} from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

// =====================================
// TOPBAR
// =====================================
const Topbar = () => {

  const {

    user,

  } = useAuth();

  return (

    <div
      style={{

        height: "85px",

        background: "#111827",

        borderBottom:
          "1px solid #1e293b",

        display: "flex",

        justifyContent:
          "space-between",

        alignItems: "center",

        padding: "0 28px",

        color: "white",
      }}
    >

      {/* ============================= */}
      {/* LEFT */}
      {/* ============================= */}
      <div>

        <h2
          style={{

            fontSize: "28px",

            fontWeight: "bold",
          }}
        >

          Enterprise Security Dashboard

        </h2>

        <p
          style={{

            color: "#94a3b8",

            marginTop: "6px",

            fontSize: "14px",
          }}
        >

          AI-powered realtime protection system

        </p>

      </div>

      {/* ============================= */}
      {/* RIGHT */}
      {/* ============================= */}
      <div
        style={{

          display: "flex",

          alignItems: "center",

          gap: "18px",
        }}
      >

        {/* SECURITY */}
        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "8px",

            background: "#0f172a",

            padding:
              "10px 16px",

            borderRadius: "12px",

            border:
              "1px solid #1e293b",
          }}
        >

          <FaShieldAlt
            color="#22c55e"
          />

          <span>
            Protected
          </span>

        </div>

        {/* NETWORK */}
        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "8px",

            background: "#0f172a",

            padding:
              "10px 16px",

            borderRadius: "12px",

            border:
              "1px solid #1e293b",
          }}
        >

          <FaWifi
            color="#38bdf8"
          />

          <span>
            Online
          </span>

        </div>

        {/* SERVER */}
        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "8px",

            background: "#0f172a",

            padding:
              "10px 16px",

            borderRadius: "12px",

            border:
              "1px solid #1e293b",
          }}
        >

          <FaServer
            color="#f59e0b"
          />

          <span>
            Server Active
          </span>

        </div>

        {/* AI ENGINE */}
        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "8px",

            background: "#0f172a",

            padding:
              "10px 16px",

            borderRadius: "12px",

            border:
              "1px solid #1e293b",
          }}
        >

          <FaMicrochip
            color="#8b5cf6"
          />

          <span>
            AI Running
          </span>

        </div>

        {/* ALERT ICON */}
        <div
          style={{

            position: "relative",

            cursor: "pointer",

            background: "#0f172a",

            padding: "12px",

            borderRadius: "12px",

            border:
              "1px solid #1e293b",
          }}
        >

          <FaBell
            size={20}
          />

          <span
            style={{

              position: "absolute",

              top: "-5px",

              right: "-5px",

              width: "18px",

              height: "18px",

              borderRadius: "50%",

              background: "#ef4444",

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              fontSize: "10px",

              fontWeight: "bold",
            }}
          >

            3

          </span>

        </div>

        {/* USER */}
        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "12px",

            background: "#0f172a",

            padding:
              "10px 16px",

            borderRadius: "14px",

            border:
              "1px solid #1e293b",
          }}
        >

          <FaUserCircle
            size={34}
          />

          <div>

            <div
              style={{

                fontWeight:
                  "bold",
              }}
            >

              {

                user?.name ||
                "Admin"

              }

            </div>

            <div
              style={{

                color: "#94a3b8",

                fontSize: "13px",
              }}
            >

              Super Administrator

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Topbar;