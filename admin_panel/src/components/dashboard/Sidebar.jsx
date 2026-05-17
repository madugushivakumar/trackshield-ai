import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  FaShieldAlt,
  FaMapMarkedAlt,
  FaMobileAlt,
  FaBell,
  FaCog,
  FaExclamationTriangle,
  FaChartLine,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

// =====================================
// SIDEBAR
// =====================================
const Sidebar = () => {

  const location =
    useLocation();

  const {
    logout,
  } = useAuth();

  // ===================================
  // MENUS
  // ===================================
  const menus = [

    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FaShieldAlt />,
    },

    {
      title: "Users",
      path: "/users",
      icon: <FaUsers />,
    },

    {
      title: "Devices",
      path: "/devices",
      icon: <FaMobileAlt />,
    },

    {
      title: "Tracking",
      path: "/tracking",
      icon: <FaMapMarkedAlt />,
    },

    {
      title: "SOS Alerts",
      path: "/sos",
      icon:
        <FaExclamationTriangle />,
    },

    {
      title: "Alerts",
      path: "/alerts",
      icon: <FaBell />,
    },

    {
      title: "Analytics",
      path: "/analytics",
      icon: <FaChartLine />,
    },

    {
      title: "Security",
      path: "/security",
      icon:
        <FaExclamationTriangle />,
    },

    {
      title: "Settings",
      path: "/settings",
      icon: <FaCog />,
    },
  ];

  return (

    <div
      style={{

        width: "100%",

        height: "100vh",

        background: "#020817",

        color: "white",

        display: "flex",

        flexDirection: "column",

        justifyContent:
          "space-between",

        overflow: "hidden",
      }}
    >

      {/* ================================= */}
      {/* TOP */}
      {/* ================================= */}
      <div
        style={{

          flex: 1,

          overflowY: "auto",

          padding: "24px",

          scrollbarWidth: "none",
        }}
      >

        {/* ================================= */}
        {/* LOGO */}
        {/* ================================= */}
        <div
          style={{
            marginBottom: "40px",
          }}
        >

          <h1
            style={{

              fontSize: "36px",

              fontWeight: "bold",

              color: "#38bdf8",

              lineHeight: "1.2",

              marginBottom: "10px",
            }}
          >

            TrackShield AI

          </h1>

          <p
            style={{

              color: "#94a3b8",

              fontSize: "14px",
            }}
          >

            Enterprise Security

          </p>

        </div>

        {/* ================================= */}
        {/* MENUS */}
        {/* ================================= */}
        <div>

          {

            menus.map((menu) => {

              const isActive =
                location.pathname ===
                menu.path;

              return (

                <Link
                  key={menu.path}
                  to={menu.path}

                  style={{

                    display: "flex",

                    alignItems: "center",

                    gap: "14px",

                    padding:
                      "16px 18px",

                    marginBottom: "14px",

                    borderRadius: "18px",

                    textDecoration: "none",

                    color: "white",

                    background:
                      isActive
                        ? "#1e293b"
                        : "transparent",

                    border:
                      isActive
                        ? "1px solid #334155"
                        : "1px solid transparent",

                    transition:
                      "all 0.3s ease",

                    fontWeight:
                      isActive
                        ? "600"
                        : "500",
                  }}
                >

                  {/* ICON */}
                  <span
                    style={{

                      fontSize: "20px",

                      display: "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        "center",

                      minWidth: "24px",
                    }}
                  >

                    {menu.icon}

                  </span>

                  {/* TITLE */}
                  <span
                    style={{

                      fontSize: "16px",

                      whiteSpace:
                        "nowrap",
                    }}
                  >

                    {menu.title}

                  </span>

                </Link>
              );
            })
          }

        </div>

      </div>

      {/* ================================= */}
      {/* FOOTER */}
      {/* ================================= */}
      <div
        style={{
          padding: "24px",
        }}
      >

        {/* STATUS */}
        <div
          style={{

            padding: "18px",

            background: "#111827",

            borderRadius: "18px",

            border:
              "1px solid #334155",

            marginBottom: "20px",
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

            <FaShieldAlt
              color="#22c55e"
              size={18}
            />

            <span
              style={{
                fontWeight: "600",
              }}
            >

              AI Protection Active

            </span>

          </div>

          <p
            style={{

              color: "#94a3b8",

              fontSize: "14px",

              lineHeight: "1.5",
            }}
          >

            Real-time monitoring enabled

          </p>

        </div>

        {/* LOGOUT */}
        <button

          onClick={logout}

          style={{

            width: "100%",

            padding: "15px",

            borderRadius: "18px",

            border: "none",

            background: "#dc2626",

            color: "white",

            fontWeight: "bold",

            display: "flex",

            alignItems: "center",

            justifyContent:
              "center",

            gap: "10px",

            cursor: "pointer",

            fontSize: "16px",

            transition:
              "all 0.3s ease",
          }}
        >

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </div>
  );
};

export default Sidebar;