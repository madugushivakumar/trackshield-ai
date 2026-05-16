import {

  ResponsiveContainer,

  BarChart,

  Bar,

  XAxis,

  YAxis,

  Tooltip,

  CartesianGrid,

} from "recharts";

// =====================================
// DATA
// =====================================
const data = [

  {
    name: "Android",
    devices: 120,
  },

  {
    name: "iPhone",
    devices: 85,
  },

  {
    name: "Tablet",
    devices: 40,
  },

  {
    name: "Laptop",
    devices: 70,
  },
];

// =====================================
// DEVICE CHART
// =====================================
const DeviceChart = () => {

  return (

    <div
      style={{

        width: "100%",

        height: "400px",

        background: "#111827",

        borderRadius: "22px",

        padding: "24px",

        border:
          "1px solid #1e293b",
      }}
    >

      <h2
        style={{

          color: "white",

          marginBottom: "20px",
        }}
      >

        Device Analytics

      </h2>

      <ResponsiveContainer>

        <BarChart
          data={data}
        >

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

          <Bar
            dataKey="devices"
            fill="#38bdf8"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
};

export default DeviceChart;