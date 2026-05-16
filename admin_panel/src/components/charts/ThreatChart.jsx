import {

  ResponsiveContainer,

  PieChart,

  Pie,

  Tooltip,

  Cell,

} from "recharts";

// =====================================
// DATA
// =====================================
const data = [

  {
    name: "Low",
    value: 35,
  },

  {
    name: "Medium",
    value: 25,
  },

  {
    name: "High",
    value: 20,
  },

  {
    name: "Critical",
    value: 10,
  },
];

// =====================================
// COLORS
// =====================================
const COLORS = [

  "#22c55e",

  "#facc15",

  "#f97316",

  "#ef4444",
];

// =====================================
// THREAT CHART
// =====================================
const ThreatChart = () => {

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

        Threat Distribution

      </h2>

      <ResponsiveContainer>

        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={120}
            dataKey="value"
            label
          >

            {

              data.map(

                (

                  entry,

                  index,
                ) => (

                  <Cell
                    key={index}
                    fill={
                      COLORS[index]
                    }
                  />
                ),
              )
            }

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
};

export default ThreatChart;