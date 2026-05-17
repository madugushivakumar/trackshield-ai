import {

  FaBell,

  FaUserCircle,

  FaWifi,

  FaShieldAlt,

  FaServer,

  FaMicrochip,

  FaMoon,

  FaSun,

  FaSearch,

} from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

import {

  useTheme,

} from "../../context/ThemeContext";

// =====================================
// TOPBAR
// =====================================
const Topbar = () => {

  const {
    user,
  } = useAuth();

  const {
    theme,
    toggleTheme,
  } = useTheme();

  return (

    <div
      style={{

        width: "100%",

        background:
          theme === "dark"
            ? "rgba(15,23,42,0.92)"
            : "rgba(255,255,255,0.92)",

        borderBottom:
          theme === "dark"
            ? "1px solid #1e293b"
            : "1px solid #dbeafe",

        padding: "18px 24px",

        boxSizing: "border-box",

        position: "sticky",

        top: 0,

        zIndex: 999,

        backdropFilter:
          "blur(14px)",

        overflow: "hidden",

        transition:
          "all 0.3s ease",
      }}
    >

      {/* ================================= */}
      {/* MAIN FLEX */}
      {/* ================================= */}
      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems: "center",

          gap: "20px",

          flexWrap: "wrap",
        }}
      >

        {/* ================================= */}
        {/* LEFT SECTION */}
        {/* ================================= */}
        <div
          style={{

            flex: "1",

            minWidth: "240px",
          }}
        >

          <h2
            style={{

              fontSize: "30px",

              fontWeight: "700",

              color:
                theme === "dark"
                  ? "white"
                  : "#0f172a",

              margin: 0,

              lineHeight: "1.2",
            }}
          >

            TrackShield AI

          </h2>

          <p
            style={{

              color:
                theme === "dark"
                  ? "#94a3b8"
                  : "#475569",

              fontSize: "14px",

              marginTop: "8px",
            }}
          >

            Enterprise AI Security Command Center

          </p>

        </div>

        {/* ================================= */}
        {/* RIGHT SECTION */}
        {/* ================================= */}
        <div
          style={{

            display: "flex",

            alignItems: "center",

            gap: "14px",

            flexWrap: "wrap",

            justifyContent:
              "flex-end",
          }}
        >

          {/* SEARCH */}
          <div
            style={{

              position: "relative",

              minWidth: "220px",
            }}
          >

            <FaSearch
              style={{

                position: "absolute",

                top: "15px",

                left: "14px",

                color:
                  theme === "dark"
                    ? "#94a3b8"
                    : "#64748b",
              }}
            />

            <input
              type="text"
              placeholder="Search..."
              style={{

                width: "100%",

                padding:
                  "12px 14px 12px 42px",

                borderRadius: "14px",

                border:
                  theme === "dark"
                    ? "1px solid #1e293b"
                    : "1px solid #cbd5e1",

                background:
                  theme === "dark"
                    ? "#0f172a"
                    : "#ffffff",

                color:
                  theme === "dark"
                    ? "white"
                    : "#0f172a",

                outline: "none",

                fontSize: "14px",
              }}
            />

          </div>

          {/* STATUS ITEMS */}
          <StatusItem
            icon={
              <FaShieldAlt
                color="#22c55e"
              />
            }
            text="Protected"
            theme={theme}
          />

          <StatusItem
            icon={
              <FaWifi
                color="#38bdf8"
              />
            }
            text="Online"
            theme={theme}
          />

          <StatusItem
            icon={
              <FaServer
                color="#f59e0b"
              />
            }
            text="Servers"
            theme={theme}
          />

          <StatusItem
            icon={
              <FaMicrochip
                color="#8b5cf6"
              />
            }
            text="AI Active"
            theme={theme}
          />

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            style={{

              width: "52px",

              height: "52px",

              borderRadius: "16px",

              border:
                theme === "dark"
                  ? "1px solid #1e293b"
                  : "1px solid #dbeafe",

              background:
                theme === "dark"
                  ? "#0f172a"
                  : "#ffffff",

              color:
                theme === "dark"
                  ? "#facc15"
                  : "#0f172a",

              cursor: "pointer",

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              transition:
                "all 0.3s ease",

              boxShadow:
                "0 5px 18px rgba(0,0,0,0.12)",
            }}
          >

            {

              theme === "dark"
                ? <FaSun size={18} />
                : <FaMoon size={18} />
            }

          </button>

          {/* NOTIFICATIONS */}
          <div
            style={{

              position: "relative",

              width: "52px",

              height: "52px",

              background:
                theme === "dark"
                  ? "#0f172a"
                  : "#ffffff",

              border:
                theme === "dark"
                  ? "1px solid #1e293b"
                  : "1px solid #dbeafe",

              borderRadius: "16px",

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              cursor: "pointer",

              boxShadow:
                "0 5px 18px rgba(0,0,0,0.12)",
            }}
          >

            <FaBell
              size={18}
              color={
                theme === "dark"
                  ? "white"
                  : "#0f172a"
              }
            />

            <span
              style={{

                position: "absolute",

                top: "-5px",

                right: "-5px",

                width: "22px",

                height: "22px",

                borderRadius: "50%",

                background: "#ef4444",

                display: "flex",

                justifyContent:
                  "center",

                alignItems:
                  "center",

                fontSize: "11px",

                fontWeight: "bold",

                color: "white",

                boxShadow:
                  "0 0 12px rgba(239,68,68,0.6)",
              }}
            >

              3

            </span>

          </div>

          {/* USER PROFILE */}
          <div
            style={{

              display: "flex",

              alignItems: "center",

              gap: "12px",

              background:
                theme === "dark"
                  ? "#0f172a"
                  : "#ffffff",

              border:
                theme === "dark"
                  ? "1px solid #1e293b"
                  : "1px solid #dbeafe",

              borderRadius: "18px",

              padding: "10px 16px",

              minWidth: "210px",

              maxWidth: "250px",

              boxShadow:
                "0 5px 18px rgba(0,0,0,0.10)",
            }}
          >

            <FaUserCircle
              size={36}
              color="#3b82f6"
            />

            <div
              style={{
                overflow: "hidden",
              }}
            >

              <div
                style={{

                  color:
                    theme === "dark"
                      ? "white"
                      : "#0f172a",

                  fontWeight: "bold",

                  fontSize: "15px",

                  whiteSpace:
                    "nowrap",

                  overflow: "hidden",

                  textOverflow:
                    "ellipsis",
                }}
              >

                {

                  user?.name ||
                  "Administrator"

                }

              </div>

              <div
                style={{

                  color:
                    theme === "dark"
                      ? "#94a3b8"
                      : "#64748b",

                  fontSize: "12px",
                }}
              >

                Super Admin

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

// =====================================
// STATUS ITEM
// =====================================
const StatusItem = ({

  icon,

  text,

  theme,

}) => {

  return (

    <div
      style={{

        display: "flex",

        alignItems: "center",

        gap: "8px",

        background:
          theme === "dark"
            ? "#0f172a"
            : "#ffffff",

        border:
          theme === "dark"
            ? "1px solid #1e293b"
            : "1px solid #dbeafe",

        padding: "10px 14px",

        borderRadius: "14px",

        color:
          theme === "dark"
            ? "white"
            : "#0f172a",

        fontSize: "14px",

        fontWeight: "500",

        whiteSpace: "nowrap",

        boxShadow:
          "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >

      {icon}

      <span>

        {text}

      </span>

    </div>
  );
};

export default Topbar;