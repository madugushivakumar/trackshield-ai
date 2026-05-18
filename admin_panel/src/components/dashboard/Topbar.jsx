import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

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

  FaRobot,

  FaGlobe,

  FaChevronDown,

  FaBroadcastTower,

  FaExclamationTriangle,

  FaCheckCircle,

  FaLock,

  FaBrain,

  FaFire,

  FaDatabase,

  FaCloud,

  FaTimes,

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
    logout,
  } = useAuth();

  const {
    theme,
    toggleTheme,
  } = useTheme();

  const [search, setSearch] =
    useState("");

  const [showNotifications,
    setShowNotifications] =
    useState(false);

  const [showProfile,
    setShowProfile] =
    useState(false);

  const [time,
    setTime] =
    useState(
      new Date()
    );

  const notificationRef =
    useRef(null);

  const profileRef =
    useRef(null);

  // ===================================
  // CLOCK
  // ===================================
  useEffect(() => {

    const interval =
      setInterval(() => {

        setTime(
          new Date()
        );

      }, 1000);

    return () =>
      clearInterval(
        interval
      );

  }, []);

  // ===================================
  // CLOSE DROPDOWNS
  // ===================================
  useEffect(() => {

    const handleClick =
      (e) => {

        if (
          notificationRef.current &&
          !notificationRef.current.contains(
            e.target
          )
        ) {

          setShowNotifications(
            false
          );
        }

        if (
          profileRef.current &&
          !profileRef.current.contains(
            e.target
          )
        ) {

          setShowProfile(
            false
          );
        }
      };

    document.addEventListener(
      "mousedown",
      handleClick
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClick
      );
    };

  }, []);

  // ===================================
  // NOTIFICATIONS
  // ===================================
  const notifications =
    useMemo(() => [

      {
        id: 1,
        title:
          "AI threat detected",
        message:
          "Firewall blocked suspicious traffic.",
        color:
          "#ef4444",
      },

      {
        id: 2,
        title:
          "Realtime sync complete",
        message:
          "Cloud backup completed successfully.",
        color:
          "#22c55e",
      },

      {
        id: 3,
        title:
          "New device connected",
        message:
          "Enterprise node connected to AI network.",
        color:
          "#3b82f6",
      },

    ], []);

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
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid #dbeafe",

        padding: "18px 24px",

        boxSizing:
          "border-box",

        position:
          "sticky",

        top: 0,

        zIndex: 999,

        backdropFilter:
          "blur(16px)",

        transition:
          "all 0.3s ease",

        boxShadow:
          "0 8px 30px rgba(0,0,0,0.08)",
      }}
    >

      {/* ================================= */}
      {/* MAIN */}
      {/* ================================= */}
      <div
        style={{

          display: "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          gap: "20px",

          flexWrap:
            "wrap",
        }}
      >

        {/* ================================= */}
        {/* LEFT */}
        {/* ================================= */}
        <div
          style={{

            display: "flex",

            alignItems:
              "center",

            gap: "20px",

            flexWrap:
              "wrap",

            flex: 1,
          }}
        >

          {/* TITLE */}
          <div>

            <h2
              style={{

                fontSize:
                  "30px",

                fontWeight:
                  "bold",

                margin: 0,

                background:
                  "linear-gradient(to right, #38bdf8, #8b5cf6)",

                WebkitBackgroundClip:
                  "text",

                WebkitTextFillColor:
                  "transparent",
              }}
            >

              TrackShield AI

            </h2>

            <p
              style={{

                marginTop:
                  "6px",

                color:
                  theme === "dark"
                    ? "#94a3b8"
                    : "#475569",

                fontSize:
                  "13px",
              }}
            >

              Enterprise Security Command Center

            </p>

          </div>

          {/* SEARCH */}
          <div
            style={{
              position:
                "relative",

              minWidth:
                "320px",

              maxWidth:
                "450px",

              flex: 1,
            }}
          >

            <FaSearch
              style={{

                position:
                  "absolute",

                left: "16px",

                top: "16px",

                color:
                  theme === "dark"
                    ? "#94a3b8"
                    : "#64748b",
              }}
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              placeholder="Search users, threats, devices, analytics..."
              style={{

                width:
                  "100%",

                padding:
                  "14px 18px 14px 48px",

                borderRadius:
                  "18px",

                border:
                  theme === "dark"
                    ? "1px solid rgba(255,255,255,0.08)"
                    : "1px solid #dbeafe",

                background:
                  theme === "dark"
                    ? "rgba(255,255,255,0.04)"
                    : "#ffffff",

                color:
                  theme === "dark"
                    ? "white"
                    : "#0f172a",

                outline:
                  "none",

                fontSize:
                  "14px",

                backdropFilter:
                  "blur(10px)",
              }}
            />

          </div>

        </div>

        {/* ================================= */}
        {/* RIGHT */}
        {/* ================================= */}
        <div
          style={{

            display:
              "flex",

            alignItems:
              "center",

            gap:
              "14px",

            flexWrap:
              "wrap",
          }}
        >

          {/* SOC STATUS */}
          <RealtimeBadge
            icon={
              <FaBroadcastTower />
            }
            text="SOC LIVE"
            color="#22c55e"
            theme={theme}
          />

          <RealtimeBadge
            icon={
              <FaRobot />
            }
            text="AI ACTIVE"
            color="#8b5cf6"
            theme={theme}
          />

          <RealtimeBadge
            icon={
              <FaShieldAlt />
            }
            text="SECURED"
            color="#3b82f6"
            theme={theme}
          />

          {/* CLOCK */}
          <div
            style={clockStyle(
              theme
            )}
          >

            {time.toLocaleTimeString()}

          </div>

          {/* QUICK STATUS */}
          <QuickStatus
            icon={
              <FaWifi />
            }
            color="#22c55e"
            theme={theme}
          />

          <QuickStatus
            icon={
              <FaServer />
            }
            color="#f59e0b"
            theme={theme}
          />

          <QuickStatus
            icon={
              <FaBrain />
            }
            color="#8b5cf6"
            theme={theme}
          />

          {/* THEME */}
          <button
            onClick={
              toggleTheme
            }
            style={iconButton(
              theme
            )}
          >

            {

              theme === "dark"

                ? <FaSun />

                : <FaMoon />
            }

          </button>

          {/* NOTIFICATIONS */}
          <div
            ref={
              notificationRef
            }
            style={{
              position:
                "relative",
            }}
          >

            <button
              onClick={() =>
                setShowNotifications(
                  !showNotifications
                )
              }
              style={iconButton(
                theme
              )}
            >

              <FaBell />

              <span
                style={badgeStyle}
              >

                3

              </span>

            </button>

            {

              showNotifications && (

                <div
                  style={dropdownStyle(
                    theme
                  )}
                >

                  <div
                    style={dropdownHeader(
                      theme
                    )}
                  >

                    <span>

                      Notifications

                    </span>

                    <button
                      onClick={() =>
                        setShowNotifications(
                          false
                        )
                      }
                      style={closeButton}
                    >

                      <FaTimes />

                    </button>

                  </div>

                  {

                    notifications.map(
                      (
                        item
                      ) => (

                        <div
                          key={
                            item.id
                          }
                          style={notificationItem(
                            theme
                          )}
                        >

                          <div
                            style={{

                              width:
                                "12px",

                              height:
                                "12px",

                              borderRadius:
                                "50%",

                              background:
                                item.color,

                              marginTop:
                                "6px",
                            }}
                          />

                          <div>

                            <div
                              style={{

                                color:
                                  theme === "dark"
                                    ? "white"
                                    : "#0f172a",

                                fontWeight:
                                  "bold",

                                marginBottom:
                                  "6px",
                              }}
                            >

                              {
                                item.title
                              }

                            </div>

                            <div
                              style={{

                                color:
                                  theme === "dark"
                                    ? "#94a3b8"
                                    : "#64748b",

                                fontSize:
                                  "13px",
                              }}
                            >

                              {
                                item.message
                              }

                            </div>

                          </div>

                        </div>
                      )
                    )
                  }

                </div>
              )
            }

          </div>

          {/* PROFILE */}
          <div
            ref={profileRef}
            style={{
              position:
                "relative",
            }}
          >

            <button
              onClick={() =>
                setShowProfile(
                  !showProfile
                )
              }
              style={profileButton(
                theme
              )}
            >

              <FaUserCircle
                size={38}
                color="#3b82f6"
              />

              <div
                style={{
                  textAlign:
                    "left",
                }}
              >

                <div
                  style={{

                    color:
                      theme === "dark"
                        ? "white"
                        : "#0f172a",

                    fontWeight:
                      "bold",

                    fontSize:
                      "14px",
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

                    fontSize:
                      "12px",
                  }}
                >

                  Super Admin

                </div>

              </div>

              <FaChevronDown
                color={
                  theme === "dark"
                    ? "#94a3b8"
                    : "#64748b"
                }
              />

            </button>

            {

              showProfile && (

                <div
                  style={profileDropdown(
                    theme
                  )}
                >

                  <ProfileItem
                    icon={<FaUserCircle />}
                    label="Profile"
                    theme={theme}
                  />

                  <ProfileItem
                    icon={<FaShieldAlt />}
                    label="Security"
                    theme={theme}
                  />

                  <ProfileItem
                    icon={<FaDatabase />}
                    label="Database"
                    theme={theme}
                  />

                  <ProfileItem
                    icon={<FaCloud />}
                    label="Cloud Sync"
                    theme={theme}
                  />

                  <div
                    style={{
                      marginTop:
                        "10px",
                    }}
                  >

                    <button
                      onClick={
                        logout
                      }
                      style={logoutButton(
                        theme
                      )}
                    >

                      Logout

                    </button>

                  </div>

                </div>
              )
            }

          </div>

        </div>

      </div>

    </div>
  );
};

// =====================================
// REALTIME BADGE
// =====================================
const RealtimeBadge = ({
  icon,
  text,
  color,
  theme,
}) => (

  <div
    style={{

      display:
        "flex",

      alignItems:
        "center",

      gap:
        "10px",

      padding:
        "12px 16px",

      borderRadius:
        "16px",

      background:
        theme === "dark"
          ? "rgba(255,255,255,0.04)"
          : "#ffffff",

      border:
        `1px solid ${color}`,

      color:
        color,

      fontWeight:
        "bold",

      fontSize:
        "13px",

      boxShadow:
        `0 0 18px ${color}25`,
    }}
  >

    {icon}

    {text}

  </div>
);

// =====================================
// QUICK STATUS
// =====================================
const QuickStatus = ({
  icon,
  color,
  theme,
}) => (

  <div
    style={{

      width:
        "52px",

      height:
        "52px",

      borderRadius:
        "16px",

      background:
        theme === "dark"
          ? "rgba(255,255,255,0.04)"
          : "#ffffff",

      border:
        "1px solid rgba(255,255,255,0.08)",

      display:
        "flex",

      justifyContent:
        "center",

      alignItems:
        "center",

      color:
        color,

      boxShadow:
        "0 6px 18px rgba(0,0,0,0.08)",
    }}
  >

    {icon}

  </div>
);

// =====================================
// PROFILE ITEM
// =====================================
const ProfileItem = ({
  icon,
  label,
  theme,
}) => (

  <div
    style={{

      display:
        "flex",

      alignItems:
        "center",

      gap:
        "12px",

      padding:
        "12px 14px",

      borderRadius:
        "12px",

      color:
        theme === "dark"
          ? "white"
          : "#0f172a",

      cursor:
        "pointer",

      marginBottom:
        "8px",

      background:
        theme === "dark"
          ? "rgba(255,255,255,0.03)"
          : "#f8fafc",
    }}
  >

    {icon}

    {label}

  </div>
);

// =====================================
// STYLES
// =====================================
const iconButton = (
  theme
) => ({

  width: "52px",

  height: "52px",

  borderRadius:
    "16px",

  border:
    theme === "dark"
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid #dbeafe",

  background:
    theme === "dark"
      ? "rgba(255,255,255,0.04)"
      : "#ffffff",

  color:
    theme === "dark"
      ? "white"
      : "#0f172a",

  cursor:
    "pointer",

  display:
    "flex",

  justifyContent:
    "center",

  alignItems:
    "center",

  position:
    "relative",

  fontSize:
    "18px",

  boxShadow:
    "0 6px 18px rgba(0,0,0,0.08)",
});

const badgeStyle = {

  position:
    "absolute",

  top: "-4px",

  right: "-4px",

  width: "22px",

  height: "22px",

  borderRadius:
    "50%",

  background:
    "#ef4444",

  display:
    "flex",

  justifyContent:
    "center",

  alignItems:
    "center",

  fontSize:
    "11px",

  color:
    "white",

  fontWeight:
    "bold",
};

const dropdownStyle = (
  theme
) => ({

  position:
    "absolute",

  top: "70px",

  right: 0,

  width: "360px",

  background:
    theme === "dark"
      ? "rgba(15,23,42,0.96)"
      : "rgba(255,255,255,0.96)",

  border:
    theme === "dark"
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid #dbeafe",

  borderRadius:
    "22px",

  padding:
    "18px",

  backdropFilter:
    "blur(16px)",

  boxShadow:
    "0 15px 40px rgba(0,0,0,0.18)",
});

const dropdownHeader = (
  theme
) => ({

  display:
    "flex",

  justifyContent:
    "space-between",

  alignItems:
    "center",

  marginBottom:
    "18px",

  color:
    theme === "dark"
      ? "white"
      : "#0f172a",

  fontWeight:
    "bold",
});

const closeButton = {

  border:
    "none",

  background:
    "transparent",

  cursor:
    "pointer",

  color:
    "#94a3b8",
};

const notificationItem = (
  theme
) => ({

  display:
    "flex",

  gap:
    "14px",

  padding:
    "14px",

  borderRadius:
    "16px",

  marginBottom:
    "12px",

  background:
    theme === "dark"
      ? "rgba(255,255,255,0.03)"
      : "#f8fafc",
});

const profileButton = (
  theme
) => ({

  display:
    "flex",

  alignItems:
    "center",

  gap:
    "14px",

  padding:
    "10px 16px",

  borderRadius:
    "18px",

  border:
    theme === "dark"
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid #dbeafe",

  background:
    theme === "dark"
      ? "rgba(255,255,255,0.04)"
      : "#ffffff",

  cursor:
    "pointer",

  boxShadow:
    "0 6px 18px rgba(0,0,0,0.08)",
});

const profileDropdown = (
  theme
) => ({

  position:
    "absolute",

  top: "72px",

  right: 0,

  width: "260px",

  background:
    theme === "dark"
      ? "rgba(15,23,42,0.96)"
      : "rgba(255,255,255,0.96)",

  border:
    theme === "dark"
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid #dbeafe",

  borderRadius:
    "22px",

  padding:
    "18px",

  backdropFilter:
    "blur(16px)",

  boxShadow:
    "0 15px 40px rgba(0,0,0,0.18)",
});

const logoutButton = (
  theme
) => ({

  width:
    "100%",

  padding:
    "14px",

  borderRadius:
    "14px",

  border:
    "none",

  background:
    "linear-gradient(to right, #dc2626, #ef4444)",

  color:
    "white",

  fontWeight:
    "bold",

  cursor:
    "pointer",
});

const clockStyle = (
  theme
) => ({

  padding:
    "12px 18px",

  borderRadius:
    "16px",

  background:
    theme === "dark"
      ? "rgba(255,255,255,0.04)"
      : "#ffffff",

  border:
    theme === "dark"
      ? "1px solid rgba(255,255,255,0.08)"
      : "1px solid #dbeafe",

  color:
    theme === "dark"
      ? "white"
      : "#0f172a",

  fontWeight:
    "bold",

  fontSize:
    "14px",

  boxShadow:
    "0 6px 18px rgba(0,0,0,0.08)",
});

export default Topbar;