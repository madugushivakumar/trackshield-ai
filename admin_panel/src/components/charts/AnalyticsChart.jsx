import {
  useEffect,
  useState,
} from "react";

import {

  ResponsiveContainer,

  AreaChart,

  Area,

  LineChart,

  Line,

  BarChart,

  Bar,

  CartesianGrid,

  XAxis,

  YAxis,

  Tooltip,

  Legend,

} from "recharts";

import {

  FaShieldAlt,

  FaBrain,

  FaServer,

  FaExclamationTriangle,

  FaBroadcastTower,

  FaChartLine,

} from "react-icons/fa";

import {
  useTheme,
} from "../../context/ThemeContext";

// =====================================
// INITIAL DATA
// =====================================
const initialData = [

  {
    name: "Mon",
    users: 40,
    threats: 5,
    devices: 25,
    ai: 60,
  },

  {
    name: "Tue",
    users: 55,
    threats: 7,
    devices: 35,
    ai: 65,
  },

  {
    name: "Wed",
    users: 80,
    threats: 4,
    devices: 42,
    ai: 74,
  },

  {
    name: "Thu",
    users: 95,
    threats: 8,
    devices: 56,
    ai: 82,
  },

  {
    name: "Fri",
    users: 120,
    threats: 10,
    devices: 64,
    ai: 90,
  },

  {
    name: "Sat",
    users: 140,
    threats: 6,
    devices: 72,
    ai: 95,
  },

  {
    name: "Sun",
    users: 170,
    threats: 3,
    devices: 84,
    ai: 99,
  },
];

// =====================================
// ANALYTICS CHART
// =====================================
const AnalyticsChart = () => {

  const {
    theme,
  } = useTheme();

  const [data,
    setData] =
    useState(
      initialData
    );

  // ===================================
  // REALTIME UPDATE
  // ===================================
  useEffect(() => {

    const interval =
      setInterval(() => {

        setData((prev) =>

          prev.map(
            (item) => ({

              ...item,

              users:
                item.users +
                Math.floor(
                  Math.random() * 5
                ),

              threats:
                Math.max(

                  1,

                  item.threats +
                    Math.floor(
                      Math.random() * 3
                    ) -
                    1
                ),

              ai:
                Math.min(

                  100,

                  item.ai +
                    Math.floor(
                      Math.random() * 2
                    )
                ),
            })
          )
        );

      }, 4000);

    return () =>
      clearInterval(
        interval
      );

  }, []);

  // ===================================
  // COLORS
  // ===================================
  const textColor =
    theme === "dark"
      ? "#94a3b8"
      : "#475569";

  const cardBg =
    theme === "dark"

      ? "linear-gradient(to bottom right, rgba(17,24,39,0.96), rgba(15,23,42,0.96))"

      : "linear-gradient(to bottom right, rgba(255,255,255,0.98), rgba(248,250,252,0.98))";

  return (

    <div
      style={containerStyle(
        cardBg
      )}
    >

      {/* ================================= */}
      {/* HEADER */}
      {/* ================================= */}
      <div
        style={headerStyle}
      >

        <div>

          <h2
            style={titleStyle(
              theme
            )}
          >

            Enterprise AI Analytics

          </h2>

          <p
            style={subtitleStyle(
              textColor
            )}
          >

            Advanced realtime AI-powered enterprise security intelligence dashboard

          </p>

        </div>

        {/* LIVE STATUS */}
        <div
          style={liveStatus}
        >

          <div
            style={pulseDot}
          />

          LIVE ANALYTICS

        </div>

      </div>

      {/* ================================= */}
      {/* KPI CARDS */}
      {/* ================================= */}
      <div
        style={kpiGrid}
      >

        <KpiCard
          icon={<FaShieldAlt />}
          title="Threat Protection"
          value="99.9%"
          color="#22c55e"
          theme={theme}
        />

        <KpiCard
          icon={<FaBrain />}
          title="AI Accuracy"
          value="98.4%"
          color="#8b5cf6"
          theme={theme}
        />

        <KpiCard
          icon={<FaServer />}
          title="Devices Monitored"
          value="84"
          color="#3b82f6"
          theme={theme}
        />

        <KpiCard
          icon={<FaBroadcastTower />}
          title="Realtime Status"
          value="ACTIVE"
          color="#f59e0b"
          theme={theme}
        />

      </div>

      {/* ================================= */}
      {/* MAIN GRID */}
      {/* ================================= */}
      <div
        style={chartGrid}
      >

        {/* ================================= */}
        {/* AREA CHART */}
        {/* ================================= */}
        <div
          style={chartCard(
            theme
          )}
        >

          <ChartHeader
            title="User Activity & Threat Intelligence"
            icon={<FaChartLine />}
            color="#38bdf8"
          />

          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <AreaChart
              data={data}
            >

              <defs>

                <linearGradient
                  id="usersGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopColor="#38bdf8"
                    stopOpacity={0.5}
                  />

                  <stop
                    offset="95%"
                    stopColor="#38bdf8"
                    stopOpacity={0}
                  />

                </linearGradient>

                <linearGradient
                  id="threatGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >

                  <stop
                    offset="5%"
                    stopColor="#ef4444"
                    stopOpacity={0.45}
                  />

                  <stop
                    offset="95%"
                    stopColor="#ef4444"
                    stopOpacity={0}
                  />

                </linearGradient>

              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke={
                  theme === "dark"
                    ? "#1e293b"
                    : "#cbd5e1"
                }
              />

              <XAxis
                dataKey="name"
                stroke={textColor}
              />

              <YAxis
                stroke={textColor}
              />

              <Tooltip
                contentStyle={tooltipStyle(
                  theme
                )}
              />

              <Legend />

              <Area
                type="monotone"
                dataKey="users"
                stroke="#38bdf8"
                fillOpacity={1}
                fill="url(#usersGradient)"
                strokeWidth={4}
                animationDuration={1200}
              />

              <Area
                type="monotone"
                dataKey="threats"
                stroke="#ef4444"
                fillOpacity={1}
                fill="url(#threatGradient)"
                strokeWidth={3}
                animationDuration={1200}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

        {/* ================================= */}
        {/* AI CHART */}
        {/* ================================= */}
        <div
          style={chartCard(
            theme
          )}
        >

          <ChartHeader
            title="AI Prediction Analytics"
            icon={<FaBrain />}
            color="#8b5cf6"
          />

          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <LineChart
              data={data}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                stroke={
                  theme === "dark"
                    ? "#1e293b"
                    : "#cbd5e1"
                }
              />

              <XAxis
                dataKey="name"
                stroke={textColor}
              />

              <YAxis
                stroke={textColor}
              />

              <Tooltip
                contentStyle={tooltipStyle(
                  theme
                )}
              />

              <Legend />

              <Line
                type="monotone"
                dataKey="ai"
                stroke="#8b5cf6"
                strokeWidth={4}
                dot={{
                  r: 6,
                }}
                activeDot={{
                  r: 10,
                }}
                animationDuration={1200}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* ================================= */}
      {/* SECOND ROW */}
      {/* ================================= */}
      <div
        style={{
          marginTop: "28px",
        }}
      >

        <div
          style={chartCard(
            theme
          )}
        >

          <ChartHeader
            title="Enterprise Device Monitoring"
            icon={<FaServer />}
            color="#06b6d4"
          />

          <ResponsiveContainer
            width="100%"
            height={320}
          >

            <BarChart
              data={data}
            >

              <CartesianGrid
                strokeDasharray="3 3"
                stroke={
                  theme === "dark"
                    ? "#1e293b"
                    : "#cbd5e1"
                }
              />

              <XAxis
                dataKey="name"
                stroke={textColor}
              />

              <YAxis
                stroke={textColor}
              />

              <Tooltip
                contentStyle={tooltipStyle(
                  theme
                )}
              />

              <Legend />

              <Bar
                dataKey="devices"
                fill="#06b6d4"
                radius={[
                  10,
                  10,
                  0,
                  0,
                ]}
                animationDuration={1200}
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

      </div>

      {/* ================================= */}
      {/* BOTTOM STATUS */}
      {/* ================================= */}
      <div
        style={bottomGrid}
      >

        <BottomCard
          icon={<FaExclamationTriangle />}
          title="Threat Alerts"
          value="12 Active"
          color="#ef4444"
          theme={theme}
        />

        <BottomCard
          icon={<FaShieldAlt />}
          title="Firewall Status"
          value="Protected"
          color="#22c55e"
          theme={theme}
        />

        <BottomCard
          icon={<FaBrain />}
          title="AI Nodes"
          value="12 Running"
          color="#8b5cf6"
          theme={theme}
        />

      </div>

    </div>
  );
};

// =====================================
// KPI CARD
// =====================================
const KpiCard = ({
  icon,
  title,
  value,
  color,
  theme,
}) => (

  <div
    style={{

      background:
        theme === "dark"
          ? "rgba(255,255,255,0.04)"
          : "#ffffff",

      border:
        `1px solid ${color}35`,

      borderRadius:
        "22px",

      padding:
        "22px",

      display:
        "flex",

      alignItems:
        "center",

      gap:
        "18px",

      backdropFilter:
        "blur(12px)",

      boxShadow:
        `0 10px 28px ${color}15`,
    }}
  >

    <div
      style={{

        width:
          "68px",

        height:
          "68px",

        borderRadius:
          "20px",

        background:
          color,

        display:
          "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        fontSize:
          "28px",

        color:
          "white",
      }}
    >

      {icon}

    </div>

    <div>

      <div
        style={{
          color:
            theme === "dark"
              ? "#94a3b8"
              : "#64748b",

          marginBottom:
            "8px",
        }}
      >

        {title}

      </div>

      <div
        style={{

          color:
            theme === "dark"
              ? "white"
              : "#0f172a",

          fontSize:
            "28px",

          fontWeight:
            "bold",
        }}
      >

        {value}

      </div>

    </div>

  </div>
);

// =====================================
// CHART HEADER
// =====================================
const ChartHeader = ({
  title,
  icon,
  color,
}) => (

  <div
    style={{

      display:
        "flex",

      alignItems:
        "center",

      gap:
        "12px",

      marginBottom:
        "20px",

      color:
        "white",

      fontSize:
        "18px",

      fontWeight:
        "bold",
    }}
  >

    <div
      style={{

        width:
          "52px",

        height:
          "52px",

        borderRadius:
          "16px",

        background:
          color,

        display:
          "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        color:
          "white",
      }}
    >

      {icon}

    </div>

    {title}

  </div>
);

// =====================================
// BOTTOM CARD
// =====================================
const BottomCard = ({
  icon,
  title,
  value,
  color,
  theme,
}) => (

  <div
    style={{

      background:
        theme === "dark"
          ? "rgba(255,255,255,0.04)"
          : "#ffffff",

      border:
        `1px solid ${color}35`,

      borderRadius:
        "20px",

      padding:
        "20px",

      display:
        "flex",

      alignItems:
        "center",

      gap:
        "16px",
    }}
  >

    <div
      style={{

        width:
          "58px",

        height:
          "58px",

        borderRadius:
          "16px",

        background:
          color,

        display:
          "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        color:
          "white",

        fontSize:
          "24px",
      }}
    >

      {icon}

    </div>

    <div>

      <div
        style={{
          color:
            theme === "dark"
              ? "#94a3b8"
              : "#64748b",

          marginBottom:
            "6px",
        }}
      >

        {title}

      </div>

      <div
        style={{

          color:
            theme === "dark"
              ? "white"
              : "#0f172a",

          fontWeight:
            "bold",

          fontSize:
            "18px",
        }}
      >

        {value}

      </div>

    </div>

  </div>
);

// =====================================
// STYLES
// =====================================
const containerStyle = (
  bg
) => ({

  width:
    "100%",

  background:
    bg,

  borderRadius:
    "30px",

  padding:
    "28px",

  border:
    "1px solid rgba(255,255,255,0.08)",

  boxShadow:
    "0 12px 40px rgba(0,0,0,0.15)",

  backdropFilter:
    "blur(18px)",
});

const headerStyle = {

  display:
    "flex",

  justifyContent:
    "space-between",

  alignItems:
    "center",

  flexWrap:
    "wrap",

  gap:
    "20px",

  marginBottom:
    "28px",
};

const titleStyle = (
  theme
) => ({

  color:
    theme === "dark"
      ? "white"
      : "#0f172a",

  fontSize:
    "34px",

  fontWeight:
    "bold",

  marginBottom:
    "10px",
});

const subtitleStyle = (
  text
) => ({

  color:
    text,

  lineHeight:
    "1.7",
});

const liveStatus = {

  display:
    "flex",

  alignItems:
    "center",

  gap:
    "10px",

  padding:
    "14px 20px",

  borderRadius:
    "18px",

  background:
    "rgba(34,197,94,0.12)",

  color:
    "#22c55e",

  fontWeight:
    "bold",

  border:
    "1px solid rgba(34,197,94,0.3)",
};

const pulseDot = {

  width:
    "12px",

  height:
    "12px",

  borderRadius:
    "50%",

  background:
    "#22c55e",

  boxShadow:
    "0 0 18px #22c55e",
};

const kpiGrid = {

  display:
    "grid",

  gridTemplateColumns:
    "repeat(auto-fit, minmax(260px, 1fr))",

  gap:
    "24px",

  marginBottom:
    "28px",
};

const chartGrid = {

  display:
    "grid",

  gridTemplateColumns:
    "repeat(auto-fit, minmax(450px, 1fr))",

  gap:
    "28px",
};

const chartCard = (
  theme
) => ({

  background:
    theme === "dark"
      ? "rgba(255,255,255,0.04)"
      : "#ffffff",

  border:
    "1px solid rgba(255,255,255,0.08)",

  borderRadius:
    "26px",

  padding:
    "24px",

  backdropFilter:
    "blur(16px)",

  boxShadow:
    "0 10px 35px rgba(0,0,0,0.08)",
});

const tooltipStyle = (
  theme
) => ({

  background:
    theme === "dark"
      ? "#0f172a"
      : "#ffffff",

  border:
    "1px solid #334155",

  borderRadius:
    "14px",

  color:
    theme === "dark"
      ? "white"
      : "#0f172a",
});

const bottomGrid = {

  display:
    "grid",

  gridTemplateColumns:
    "repeat(auto-fit, minmax(250px, 1fr))",

  gap:
    "24px",

  marginTop:
    "28px",
};

export default AnalyticsChart;