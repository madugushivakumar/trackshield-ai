import AdminLayout
from "../layout/AdminLayout";

import {

  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,

} from "recharts";

const AnalyticsDashboard = () => {

  // =====================================
  // THREAT DATA
  // =====================================
  const threatData = [

    {
      day: "Mon",
      threats: 2,
    },

    {
      day: "Tue",
      threats: 5,
    },

    {
      day: "Wed",
      threats: 8,
    },

    {
      day: "Thu",
      threats: 4,
    },

    {
      day: "Fri",
      threats: 11,
    },

    {
      day: "Sat",
      threats: 7,
    },

    {
      day: "Sun",
      threats: 13,
    },
  ];

  // =====================================
  // DEVICE STATUS
  // =====================================
  const deviceData = [

    {
      name: "Protected",
      value: 72,
    },

    {
      name: "At Risk",
      value: 18,
    },

    {
      name: "Offline",
      value: 10,
    },
  ];

  // =====================================
  // THREAT TYPES
  // =====================================
  const typeData = [

    {
      type: "Face Intrusion",
      value: 12,
    },

    {
      type: "SIM Swap",
      value: 5,
    },

    {
      type: "Voice SOS",
      value: 9,
    },

    {
      type: "Shutdown Attack",
      value: 6,
    },
  ];

  const COLORS = [

    "#22c55e",
    "#ef4444",
    "#facc15",
  ];

  return (

    <AdminLayout>

      {/* HEADER */}
      <div
        style={{
          marginBottom: "30px",
        }}
      >

        <h1
          style={{

            color: "white",

            marginBottom: "10px",
          }}
        >
          Enterprise Threat Analytics
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          AI-powered cybersecurity
          intelligence dashboard
        </p>

      </div>

      {/* GRID */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
              "repeat(auto-fit, minmax(420px, 1fr))",

          gap: "24px",
        }}
      >

        {/* LINE CHART */}
        <div
          style={{

            background:
                "#111827",

            padding: "24px",

            borderRadius:
                "20px",
          }}
        >

          <h2
            style={{

              color: "white",

              marginBottom: "20px",
            }}
          >
            Weekly Threat Activity
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <LineChart
              data={threatData}
            >

              <CartesianGrid
                stroke="#1e293b"
              />

              <XAxis
                dataKey="day"
                stroke="#94a3b8"
              />

              <YAxis
                stroke="#94a3b8"
              />

              <Tooltip />

              <Line

                type="monotone"

                dataKey="threats"

                stroke="#ef4444"

                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

        {/* PIE CHART */}
        <div
          style={{

            background:
                "#111827",

            padding: "24px",

            borderRadius:
                "20px",
          }}
        >

          <h2
            style={{

              color: "white",

              marginBottom: "20px",
            }}
          >
            Device Protection Status
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <PieChart>

              <Pie

                data={deviceData}

                dataKey="value"

                outerRadius={110}

                label
              >

                {deviceData.map(
                  (
                    entry,
                    index
                  ) => (

                    <Cell

                      key={index}

                      fill={
                        COLORS[
                          index %
                          COLORS.length
                        ]
                      }
                    />
                  )
                )}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* BAR CHART */}
        <div
          style={{

            background:
                "#111827",

            padding: "24px",

            borderRadius:
                "20px",
          }}
        >

          <h2
            style={{

              color: "white",

              marginBottom: "20px",
            }}
          >
            Threat Categories
          </h2>

          <ResponsiveContainer
            width="100%"
            height={300}
          >

            <BarChart
              data={typeData}
            >

              <CartesianGrid
                stroke="#1e293b"
              />

              <XAxis
                dataKey="type"
                stroke="#94a3b8"
              />

              <YAxis
                stroke="#94a3b8"
              />

              <Tooltip />

              <Bar

                dataKey="value"

                fill="#3b82f6"
              />

            </BarChart>

          </ResponsiveContainer>

        </div>

        {/* HEATMAP */}
        <div
          style={{

            background:
                "#111827",

            padding: "24px",

            borderRadius:
                "20px",
          }}
        >

          <h2
            style={{

              color: "white",

              marginBottom: "20px",
            }}
          >
            Threat Heatmap
          </h2>

          <div
            style={{

              display: "grid",

              gridTemplateColumns:
                  "repeat(7, 1fr)",

              gap: "10px",
            }}
          >

            {Array.from({
              length: 35,
            }).map(
              (_, index) => (

                <div

                  key={index}

                  style={{

                    height: "42px",

                    borderRadius:
                        "8px",

                    background:

                        index % 5 === 0
                            ? "#dc2626"

                        : index % 3 === 0
                            ? "#f97316"

                        : "#22c55e",
                  }}
                />
              )
            )}

          </div>

        </div>

      </div>

    </AdminLayout>
  );
};

export default AnalyticsDashboard;