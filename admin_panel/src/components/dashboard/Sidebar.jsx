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

      // FIXED HERE
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

        width: "270px",

        minHeight: "100vh",

        background: "#020817",

        color: "white",

        padding: "20px",

        borderRight:
          "1px solid #1e293b",

        display: "flex",

        flexDirection: "column",

        justifyContent:
          "space-between",
      }}
    >

      <div>

        {/* ========================== */}
        {/* LOGO */}
        {/* ========================== */}
        <div
          style={{
            marginBottom: "40px",
          }}
        >

          <h1
            style={{

              fontSize: "30px",

              fontWeight: "bold",

              color: "#38bdf8",
            }}
          >

            TrackShield AI

          </h1>

          <p
            style={{

              color: "#94a3b8",

              marginTop: "8px",

              fontSize: "14px",
            }}
          >

            Enterprise Security

          </p>

        </div>

        {/* ========================== */}
        {/* MENUS */}
        {/* ========================== */}
        <div>

          {

            menus.map((menu) => (

              <Link
                key={menu.path}
                to={menu.path}

                style={{

                  display: "flex",

                  alignItems: "center",

                  gap: "14px",

                  padding: "14px",

                  marginBottom: "12px",

                  borderRadius: "14px",

                  textDecoration: "none",

                  color: "white",

                  background:

                    location.pathname ===
                    menu.path

                      ? "#1e293b"

                      : "transparent",

                  border:

                    location.pathname ===
                    menu.path

                      ? "1px solid #334155"

                      : "1px solid transparent",

                  transition: "0.3s",
                }}
              >

                <span
                  style={{
                    fontSize: "20px",
                  }}
                >

                  {menu.icon}

                </span>

                <span
                  style={{
                    fontSize: "16px",
                  }}
                >

                  {menu.title}

                </span>

              </Link>
            ))
          }

        </div>

      </div>

      {/* ========================== */}
      {/* FOOTER */}
      {/* ========================== */}
      <div>

        {/* SECURITY STATUS */}
        <div
          style={{

            padding: "18px",

            background: "#111827",

            borderRadius: "16px",

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
            }}
          >

            <FaShieldAlt
              color="#22c55e"
            />

            <span>
              AI Protection Active
            </span>

          </div>

          <p
            style={{

              marginTop: "10px",

              color: "#94a3b8",

              fontSize: "14px",
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

            padding: "14px",

            borderRadius: "14px",

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