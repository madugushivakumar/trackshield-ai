import {

  ResponsiveContainer,

  LineChart,

  Line,

  XAxis,

  YAxis,

  Tooltip,

  CartesianGrid,

  AreaChart,

  Area,

} from "recharts";

// =====================================
// DUMMY DATA
// =====================================
const data = [

  {
    name: "Mon",
    users: 40,
    threats: 5,
  },

  {
    name: "Tue",
    users: 55,
    threats: 7,
  },

  {
    name: "Wed",
    users: 80,
    threats: 4,
  },

  {
    name: "Thu",
    users: 95,
    threats: 8,
  },

  {
    name: "Fri",
    users: 120,
    threats: 10,
  },

  {
    name: "Sat",
    users: 140,
    threats: 6,
  },

  {
    name: "Sun",
    users: 170,
    threats: 3,
  },
];

// =====================================
// ANALYTICS CHART
// =====================================
const AnalyticsChart = () => {

  return (

    <div
      style={{

        width: "95%",

        height: "420px",

        background: "#111827",

        borderRadius: "22px",

        padding: "24px",

        border:
          "1px solid #1e293b",

        boxShadow:
          "0 8px 25px rgba(0,0,0,0.2)",
      }}
    >

      {/* ========================== */}
      {/* HEADER */}
      {/* ========================== */}
      <div
        style={{
          marginBottom: "24px",
        }}
      >

        <h2
          style={{

            color: "white",

            fontSize: "24px",

            fontWeight: "bold",

            marginBottom: "8px",
          }}
        >

          Security Analytics

        </h2>

        <p
          style={{
            color: "#94a3b8",
          }}
        >

          Weekly realtime security & tracking overview

        </p>

      </div>

      {/* ========================== */}
      {/* CHART */}
      {/* ========================== */}
     <ResponsiveContainer
  width="100%"
  height={300}
>

        <AreaChart
          data={data}
        >

          <defs>

            <linearGradient
              id="usersColor"
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
              id="threatColor"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >

              <stop
                offset="5%"
                stopColor="#ef4444"
                stopOpacity={0.5}
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
            stroke="#1e293b"
          />

          <XAxis
            dataKey="name"
            stroke="#94a3b8"
          />

          <YAxis
            stroke="#94a3b8"
          />

          <Tooltip />

          {/* USERS */}
          <Area
            type="monotone"
            dataKey="users"
            stroke="#38bdf8"
            fillOpacity={1}
            fill="url(#usersColor)"
            strokeWidth={3}
          />

          {/* THREATS */}
          <Line
            type="monotone"
            dataKey="threats"
            stroke="#ef4444"
            strokeWidth={3}
          />

        </AreaChart>

      </ResponsiveContainer>

    </div>
  );
};

export default AnalyticsChart;