import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

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

  FaRobot,

  FaMoon,

  FaSun,

  FaBroadcastTower,

  FaChevronLeft,

  FaChevronRight,

  FaWifi,

  FaServer,

  FaLock,

  FaGlobe,

  FaBrain,

  FaFire,

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
  // STATES
  // ===================================
  const [collapsed, setCollapsed] =
    useState(false);

  const [darkMode, setDarkMode] =
    useState(true);

  // ===================================
  // LOAD THEME
  // ===================================
  useEffect(() => {

    const theme =
      localStorage.getItem(
        "trackshield-theme"
      );

    setDarkMode(
      theme !== "light"
    );

  }, []);

  // ===================================
  // TOGGLE THEME
  // ===================================
  const toggleTheme =
    () => {

      const nextTheme =
        darkMode
          ? "light"
          : "dark";

      localStorage.setItem(
        "trackshield-theme",
        nextTheme
      );

      setDarkMode(
        !darkMode
      );

      window.location.reload();
    };

  // ===================================
  // MENUS
  // ===================================
  const menus = [

    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <FaShieldAlt />,
      badge: "",
    },

    {
      title: "Users",
      path: "/users",
      icon: <FaUsers />,
      badge: "12",
    },

    {
      title: "Devices",
      path: "/devices",
      icon: <FaMobileAlt />,
      badge: "84",
    },

    {
      title: "Tracking",
      path: "/tracking",
      icon: <FaMapMarkedAlt />,
      badge: "",
    },

    {
      title: "SOS Alerts",
      path: "/sos",
      icon:
        <FaExclamationTriangle />,
      badge: "5",
      danger: true,
    },

    {
      title: "Alerts",
      path: "/alerts",
      icon: <FaBell />,
      badge: "18",
      danger: true,
    },

    {
      title: "Analytics",
      path: "/analytics",
      icon: <FaChartLine />,
      badge: "",
    },

    {
      title: "Security",
      path: "/security",
      icon:
        <FaLock />,
      badge: "LIVE",
    },

    {
      title: "Settings",
      path: "/settings",
      icon: <FaCog />,
      badge: "",
    },
  ];

  return (

    <div
      style={{

        width:
          collapsed
            ? "110px"
            : "300px",

        height: "100vh",

        background:
          "linear-gradient(to bottom, #020817, #0f172a)",

        color: "white",

        display: "flex",

        flexDirection:
          "column",

        justifyContent:
          "space-between",

        overflow: "hidden",

        transition:
          "all 0.4s ease",

        borderRight:
          "1px solid #1e293b",

        backdropFilter:
          "blur(18px)",
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
        {/* HEADER */}
        {/* ================================= */}
        <div
          style={{

            display: "flex",

            justifyContent:
              "space-between",

            alignItems:
              "center",

            marginBottom:
              "40px",
          }}
        >

          {/* LOGO */}
          {

            !collapsed && (

              <div>

                <h1
                  style={{

                    fontSize:
                      "34px",

                    fontWeight:
                      "bold",

                    background:
                      "linear-gradient(to right, #38bdf8, #8b5cf6)",

                    WebkitBackgroundClip:
                      "text",

                    WebkitTextFillColor:
                      "transparent",

                    marginBottom:
                      "8px",
                  }}
                >

                  TrackShield AI

                </h1>

                <p
                  style={{

                    color:
                      "#94a3b8",

                    fontSize:
                      "14px",
                  }}
                >

                  Enterprise Security Platform

                </p>

              </div>
            )
          }

          {/* COLLAPSE */}
          <button
            onClick={() =>
              setCollapsed(
                !collapsed
              )
            }
            style={collapseButton}
          >

            {

              collapsed
                ? <FaChevronRight />
                : <FaChevronLeft />
            }

          </button>

        </div>

        {/* ================================= */}
        {/* AI STATUS */}
        {/* ================================= */}
        <div
          style={statusCard}
        >

          <div
            style={{

              width: "14px",

              height: "14px",

              borderRadius:
                "50%",

              background:
                "#22c55e",

              boxShadow:
                "0 0 18px #22c55e",
            }}
          />

          {

            !collapsed && (

              <>

                <span
                  style={{
                    fontWeight:
                      "bold",
                  }}
                >

                  AI Engine Online

                </span>

                <FaRobot
                  color="#8b5cf6"
                />

              </>
            )
          }

        </div>

        {/* ================================= */}
        {/* MENUS */}
        {/* ================================= */}
        <div
          style={{
            marginTop: "30px",
          }}
        >

          {

            menus.map(
              (menu) => {

                const isActive =
                  location.pathname ===
                  menu.path;

                return (

                  <Link
                    key={menu.path}
                    to={menu.path}

                    style={{

                      display:
                        "flex",

                      alignItems:
                        "center",

                      justifyContent:
                        collapsed
                          ? "center"
                          : "space-between",

                      padding:
                        "16px 18px",

                      marginBottom:
                        "14px",

                      borderRadius:
                        "20px",

                      textDecoration:
                        "none",

                      color:
                        "white",

                      background:
                        isActive
                          ? "linear-gradient(to right, #2563eb, #4f46e5)"
                          : "rgba(255,255,255,0.03)",

                      border:
                        isActive
                          ? "1px solid rgba(255,255,255,0.2)"
                          : "1px solid transparent",

                      transition:
                        "all 0.3s ease",

                      backdropFilter:
                        "blur(10px)",

                      boxShadow:
                        isActive
                          ? "0 8px 25px rgba(79,70,229,0.35)"
                          : "none",
                    }}
                  >

                    <div
                      style={{

                        display:
                          "flex",

                        alignItems:
                          "center",

                        gap:
                          "14px",
                      }}
                    >

                      <span
                        style={{

                          fontSize:
                            "20px",

                          display:
                            "flex",

                          alignItems:
                            "center",

                          justifyContent:
                            "center",
                        }}
                      >

                        {menu.icon}

                      </span>

                      {

                        !collapsed && (

                          <span
                            style={{

                              fontWeight:
                                isActive
                                  ? "bold"
                                  : "500",
                            }}
                          >

                            {menu.title}

                          </span>
                        )
                      }

                    </div>

                    {

                      !collapsed &&
                      menu.badge && (

                        <span
                          style={{

                            background:
                              menu.danger
                                ? "#ef4444"
                                : "#1e293b",

                            padding:
                              "6px 10px",

                            borderRadius:
                              "12px",

                            fontSize:
                              "12px",

                            fontWeight:
                              "bold",
                          }}
                        >

                          {menu.badge}

                        </span>
                      )
                    }

                  </Link>
                );
              }
            )
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

        {/* QUICK STATUS */}
        {

          !collapsed && (

            <div
              style={footerPanel}
            >

              <FooterItem
                icon={<FaWifi />}
                label="Network"
                value="Stable"
                color="#22c55e"
              />

              <FooterItem
                icon={<FaServer />}
                label="Servers"
                value="48"
                color="#3b82f6"
              />

              <FooterItem
                icon={<FaBrain />}
                label="AI Nodes"
                value="12"
                color="#8b5cf6"
              />

              <FooterItem
                icon={<FaFire />}
                label="Threats"
                value="5"
                color="#ef4444"
              />

            </div>
          )
        }

        {/* ACTIONS */}
        <div
          style={{

            display: "flex",

            flexDirection:
              collapsed
                ? "column"
                : "row",

            gap: "12px",

            marginTop: "20px",
          }}
        >

          {/* THEME */}
          <button
            onClick={
              toggleTheme
            }
            style={themeButton}
          >

            {

              darkMode
                ? <FaSun />
                : <FaMoon />
            }

          </button>

          {/* LOGOUT */}
          <button

            onClick={logout}

            style={logoutButton}
          >

            <FaSignOutAlt />

            {

              !collapsed &&
              "Logout"
            }

          </button>

        </div>

      </div>

    </div>
  );
};

// =====================================
// FOOTER ITEM
// =====================================
const FooterItem = ({
  icon,
  label,
  value,
  color,
}) => (

  <div
    style={{

      display: "flex",

      justifyContent:
        "space-between",

      alignItems:
        "center",

      marginBottom:
        "12px",

      color:
        "#cbd5e1",
    }}
  >

    <div
      style={{

        display:
          "flex",

        alignItems:
          "center",

        gap:
          "10px",
      }}
    >

      <span
        style={{
          color:
            color,
        }}
      >

        {icon}

      </span>

      <span>

        {label}

      </span>

    </div>

    <strong>

      {value}

    </strong>

  </div>
);

// =====================================
// STYLES
// =====================================
const collapseButton = {

  width: "42px",

  height: "42px",

  borderRadius:
    "14px",

  border:
    "1px solid #334155",

  background:
    "rgba(255,255,255,0.04)",

  color:
    "white",

  cursor:
    "pointer",

  display:
    "flex",

  justifyContent:
    "center",

  alignItems:
    "center",
};

const statusCard = {

  display:
    "flex",

  alignItems:
    "center",

  justifyContent:
    "center",

  gap:
    "12px",

  background:
    "rgba(255,255,255,0.04)",

  border:
    "1px solid rgba(255,255,255,0.08)",

  borderRadius:
    "18px",

  padding:
    "16px",

  backdropFilter:
    "blur(12px)",
};

const footerPanel = {

  background:
    "rgba(255,255,255,0.04)",

  border:
    "1px solid rgba(255,255,255,0.08)",

  borderRadius:
    "20px",

  padding:
    "18px",

  backdropFilter:
    "blur(12px)",
};

const themeButton = {

  width: "58px",

  height: "58px",

  borderRadius:
    "18px",

  border:
    "none",

  background:
    "linear-gradient(to right, #f59e0b, #f97316)",

  color:
    "white",

  display:
    "flex",

  justifyContent:
    "center",

  alignItems:
    "center",

  fontSize:
    "20px",

  cursor:
    "pointer",
};

const logoutButton = {

  flex: 1,

  padding:
    "16px",

  borderRadius:
    "18px",

  border:
    "none",

  background:
    "linear-gradient(to right, #dc2626, #ef4444)",

  color:
    "white",

  fontWeight:
    "bold",

  display:
    "flex",

  alignItems:
    "center",

  justifyContent:
    "center",

  gap:
    "10px",

  cursor:
    "pointer",

  fontSize:
    "15px",
};

export default Sidebar;