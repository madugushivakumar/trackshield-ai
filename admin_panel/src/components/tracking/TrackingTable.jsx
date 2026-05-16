// =====================================
// TRACKING TABLE
// =====================================
const TrackingTable = ({

  trackingData,

}) => {

  return (

    <div
      style={{

        width: "100%",

        overflowX: "auto",

        background: "#111827",

        borderRadius: "20px",

        border:
          "1px solid #1e293b",
      }}
    >

      <table
        style={{

          width: "100%",

          borderCollapse:
            "collapse",

          color: "white",
        }}
      >

        <thead>

          <tr
            style={{
              background: "#0f172a",
            }}
          >

            <th style={thStyle}>
              Device ID
            </th>

            <th style={thStyle}>
              Latitude
            </th>

            <th style={thStyle}>
              Longitude
            </th>

            <th style={thStyle}>
              Speed
            </th>

            <th style={thStyle}>
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {

            trackingData?.map(
              (item) => (

                <tr
                  key={item._id}
                  style={{
                    borderBottom:
                      "1px solid #1e293b",
                  }}
                >

                  <td style={tdStyle}>
                    {item.deviceId}
                  </td>

                  <td style={tdStyle}>
                    {item.latitude}
                  </td>

                  <td style={tdStyle}>
                    {item.longitude}
                  </td>

                  <td style={tdStyle}>
                    {item.speed}
                  </td>

                  <td style={tdStyle}>

                    <span
                      style={{

                        background:
                          "#22c55e",

                        padding:
                          "6px 12px",

                        borderRadius:
                          "10px",
                      }}
                    >

                      Active

                    </span>

                  </td>

                </tr>
              ),
            )
          }

        </tbody>

      </table>

    </div>
  );
};

// =====================================
// STYLES
// =====================================
const thStyle = {

  padding: "18px",

  textAlign: "left",

  color: "#94a3b8",
};

const tdStyle = {

  padding: "18px",
};

export default TrackingTable;