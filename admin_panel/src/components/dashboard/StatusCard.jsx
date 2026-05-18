import {
  useEffect,
  useState,
} from "react";

import {

  FaArrowUp,

  FaArrowDown,

  FaBroadcastTower,

  FaShieldAlt,

  FaBrain,

  FaCheckCircle,

  FaExclamationTriangle,

} from "react-icons/fa";

import {
  useTheme,
} from "../../context/ThemeContext";

// =====================================
// STATUS CARD
// =====================================
const StatusCard = ({

  title,

  value,

  icon,

  color,

  subtitle,

  percentage = "+12.5%",

  progress = 75,

  status = "healthy",

  realtime = true,

}) => {

  const {
    theme,
  } = useTheme();

  const [hovered,
    setHovered] =
    useState(false);

  const [animatedValue,
    setAnimatedValue] =
    useState(0);

  // ===================================
  // VALUE ANIMATION
  // ===================================
  useEffect(() => {

    let start = 0;

    const numeric =
      parseInt(value) || 0;

    const timer =
      setInterval(() => {

        start += Math.ceil(
          numeric / 20
        );

        if (
          start >= numeric
        ) {

          start = numeric;

          clearInterval(
            timer
          );
        }

        setAnimatedValue(
          start
        );

      }, 40);

    return () =>
      clearInterval(
        timer
      );

  }, [value]);

  // ===================================
  // STATUS COLORS
  // ===================================
  const statusConfig = {

    healthy: {

      color:
        "#22c55e",

      icon:
        <FaCheckCircle />,
    },

    warning: {

      color:
        "#f59e0b",

      icon:
        <FaExclamationTriangle />,
    },

    danger: {

      color:
        "#ef4444",

      icon:
        <FaShieldAlt />,
    },

    ai: {

      color:
        "#8b5cf6",

      icon:
        <FaBrain />,
    },
  };

  const currentStatus =
    statusConfig[
      status
    ] ||
    statusConfig.healthy;

  // ===================================
  // TREND
  // ===================================
  const isPositive =
    percentage.includes(
      "+"
    );

  return (

    <div
      onMouseEnter={() =>
        setHovered(true)
      }
      onMouseLeave={() =>
        setHovered(false)
      }
      style={{

        background:
          theme === "dark"

            ? "linear-gradient(to bottom right, rgba(17,24,39,0.95), rgba(15,23,42,0.95))"

            : "linear-gradient(to bottom right, rgba(255,255,255,0.98), rgba(248,250,252,0.98))",

        border:
          `1px solid ${color}35`,

        borderRadius:
          "28px",

        padding:
          "28px",

        color:
          theme === "dark"
            ? "white"
            : "#0f172a",

        minHeight:
          "260px",

        display:
          "flex",

        flexDirection:
          "column",

        justifyContent:
          "space-between",

        position:
          "relative",

        overflow:
          "hidden",

        backdropFilter:
          "blur(18px)",

        boxShadow:
          hovered

            ? `0 20px 45px ${color}35`

            : "0 10px 30px rgba(0,0,0,0.12)",

        transform:
          hovered
            ? "translateY(-8px) scale(1.02)"
            : "translateY(0)",

        transition:
          "all 0.35s ease",
      }}
    >

      {/* ================================= */}
      {/* BACKGROUND GLOW */}
      {/* ================================= */}
      <div
        style={{

          position:
            "absolute",

          top: "-60px",

          right: "-60px",

          width: "180px",

          height: "180px",

          background:
            `${color}18`,

          borderRadius:
            "50%",

          filter:
            "blur(30px)",
        }}
      />

      {/* ================================= */}
      {/* REALTIME PULSE */}
      {/* ================================= */}
      {

        realtime && (

          <div
            style={{

              position:
                "absolute",

              top: "22px",

              right: "22px",

              display:
                "flex",

              alignItems:
                "center",

              gap:
                "8px",

              color:
                "#22c55e",

              fontSize:
                "12px",

              fontWeight:
                "bold",
            }}
          >

            <div
              style={{

                width:
                  "10px",

                height:
                  "10px",

                borderRadius:
                  "50%",

                background:
                  "#22c55e",

                boxShadow:
                  "0 0 18px #22c55e",
              }}
            />

            LIVE

          </div>
        )
      }

      {/* ================================= */}
      {/* TOP SECTION */}
      {/* ================================= */}
      <div
        style={{

          display:
            "flex",

          justifyContent:
            "space-between",

          alignItems:
            "flex-start",

          position:
            "relative",

          zIndex: 2,
        }}
      >

        {/* LEFT */}
        <div>

          {/* TITLE */}
          <h3
            style={{

              color:
                theme === "dark"
                  ? "#94a3b8"
                  : "#475569",

              fontSize:
                "15px",

              marginBottom:
                "16px",

              fontWeight:
                "600",

              letterSpacing:
                "0.5px",
            }}
          >

            {title}

          </h3>

          {/* VALUE */}
          <h1
            style={{

              fontSize:
                "52px",

              fontWeight:
                "800",

              marginBottom:
                "14px",

              lineHeight:
                "1",

              background:
                `linear-gradient(to right, ${color}, #ffffff)`,

              WebkitBackgroundClip:
                "text",

              WebkitTextFillColor:
                "transparent",
            }}
          >

            {

              typeof value ===
              "number"

                ? animatedValue

                : value
            }

          </h1>

          {/* TREND */}
          <div
            style={{

              display:
                "flex",

              alignItems:
                "center",

              gap:
                "10px",

              marginBottom:
                "20px",
            }}
          >

            <div
              style={{

                display:
                  "flex",

                alignItems:
                  "center",

                gap:
                  "6px",

                background:
                  isPositive
                    ? "rgba(34,197,94,0.12)"
                    : "rgba(239,68,68,0.12)",

                color:
                  isPositive
                    ? "#22c55e"
                    : "#ef4444",

                padding:
                  "8px 12px",

                borderRadius:
                  "12px",

                fontSize:
                  "13px",

                fontWeight:
                  "bold",
              }}
            >

              {

                isPositive

                  ? <FaArrowUp />

                  : <FaArrowDown />
              }

              {percentage}

            </div>

            {/* STATUS */}
            <div
              style={{

                display:
                  "flex",

                alignItems:
                  "center",

                gap:
                  "8px",

                color:
                  currentStatus.color,

                fontSize:
                  "13px",

                fontWeight:
                  "bold",
              }}
            >

              {
                currentStatus.icon
              }

              {
                status.toUpperCase()
              }

            </div>

          </div>

        </div>

        {/* ================================= */}
        {/* ICON */}
        {/* ================================= */}
        <div
          style={{

            width:
              "90px",

            height:
              "90px",

            borderRadius:
              "26px",

            background:
              `linear-gradient(to bottom right, ${color}, ${color}90)`,

            display:
              "flex",

            justifyContent:
              "center",

            alignItems:
              "center",

            fontSize:
              "38px",

            color:
              "white",

            boxShadow:
              `0 12px 28px ${color}40`,

            transform:
              hovered
                ? "rotate(8deg) scale(1.05)"
                : "rotate(0deg)",

            transition:
              "all 0.35s ease",
          }}
        >

          {icon}

        </div>

      </div>

      {/* ================================= */}
      {/* BOTTOM */}
      {/* ================================= */}
      <div
        style={{
          position:
            "relative",

          zIndex: 2,
        }}
      >

        {/* PROGRESS */}
        <div
          style={{
            marginBottom:
              "18px",
          }}
        >

          <div
            style={{

              display:
                "flex",

              justifyContent:
                "space-between",

              marginBottom:
                "10px",

              fontSize:
                "13px",
            }}
          >

            <span
              style={{

                color:
                  theme === "dark"
                    ? "#94a3b8"
                    : "#64748b",
              }}
            >

              AI Health

            </span>

            <span
              style={{
                fontWeight:
                  "bold",
              }}
            >

              {progress}%

            </span>

          </div>

          {/* BAR */}
          <div
            style={{

              width:
                "100%",

              height:
                "10px",

              background:
                theme === "dark"
                  ? "#1e293b"
                  : "#e2e8f0",

              borderRadius:
                "20px",

              overflow:
                "hidden",
            }}
          >

            <div
              style={{

                width:
                  `${progress}%`,

                height:
                  "100%",

                borderRadius:
                  "20px",

                background:
                  `linear-gradient(to right, ${color}, #ffffff)`,

                transition:
                  "1s ease",
              }}
            />

          </div>

        </div>

        {/* SUBTITLE */}
        <p
          style={{

            color:
              theme === "dark"
                ? "#cbd5e1"
                : "#475569",

            fontSize:
              "15px",

            lineHeight:
              "26px",
          }}
        >

          {

            subtitle ||

            "Realtime AI-powered enterprise analytics and monitoring system."
          }

        </p>

        {/* FOOTER */}
        <div
          style={{

            display:
              "flex",

            justifyContent:
              "space-between",

            alignItems:
              "center",

            marginTop:
              "20px",
          }}
        >

          <div
            style={{

              display:
                "flex",

              alignItems:
                "center",

              gap:
                "8px",

              color:
                "#22c55e",

              fontSize:
                "13px",

              fontWeight:
                "bold",
            }}
          >

            <FaBroadcastTower />

            AI Monitoring Active

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

            Updated now

          </div>

        </div>

      </div>

    </div>
  );
};

export default StatusCard;