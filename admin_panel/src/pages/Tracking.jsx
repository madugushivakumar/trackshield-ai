import {
  useEffect,
  useState,
} from "react";

import AdminLayout
from "../layout/AdminLayout";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

import {
  ref,
  onValue,
} from "firebase/database";

import {
  database,
} from "../services/firebase";

import {

  FaSatellite,
  FaWifi,
  FaLocationArrow,
  FaMobileAlt,
  FaMapMarkedAlt,
  FaClock,

} from "react-icons/fa";



// =====================================
// FIX LEAFLET MARKER ICONS
// =====================================
delete L.Icon.Default.prototype
  ._getIconUrl;

L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const Tracking = () => {

  const [devices,
    setDevices] =
      useState([]);

  // =====================================
  // LOAD REALTIME DEVICES
  // =====================================
  useEffect(() => {

    const trackingRef =
      ref(
        database,
        "live_tracking"
      );

    onValue(
      trackingRef,
      (snapshot) => {

        const data =
          snapshot.val();

        if (data) {

          const loadedDevices =
            Object.entries(data)
              .map(
                ([id, value]) => ({

                  id,

                  ...value,
                })
              );

          setDevices(
            loadedDevices
          );
        }
      }
    );

  }, []);

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

            fontSize: "36px",

            marginBottom: "10px",
          }}
        >
          Live GPS Tracking
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          Enterprise realtime
          location monitoring
        </p>

      </div>

      {/* STATS */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
              "repeat(auto-fit, minmax(240px, 1fr))",

          gap: "20px",

          marginBottom: "30px",
        }}
      >

        {/* ACTIVE */}
        <div
          style={{

            background: "#111827",

            padding: "22px",

            borderRadius: "18px",

            border:
                "1px solid #1e293b",

            color: "white",
          }}
        >

          <FaSatellite
            color="#38bdf8"

            size={28}
          />

          <h2
            style={{
              marginTop: "16px",
            }}
          >
            {devices.length}
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Live Devices
          </p>

        </div>

        {/* ONLINE */}
        <div
          style={{

            background: "#111827",

            padding: "22px",

            borderRadius: "18px",

            border:
                "1px solid #22c55e",

            color: "white",
          }}
        >

          <FaWifi
            color="#22c55e"

            size={28}
          />

          <h2
            style={{
              marginTop: "16px",
            }}
          >
            ONLINE
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            Firebase Sync Active
          </p>

        </div>

        {/* GPS */}
        <div
          style={{

            background: "#111827",

            padding: "22px",

            borderRadius: "18px",

            border:
                "1px solid #7c3aed",

            color: "white",
          }}
        >

          <FaLocationArrow
            color="#7c3aed"

            size={28}
          />

          <h2
            style={{
              marginTop: "16px",
            }}
          >
            LIVE
          </h2>

          <p
            style={{
              color: "#94a3b8",
            }}
          >
            GPS Updates Running
          </p>

        </div>

      </div>

      {/* MAIN GRID */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
              "2fr 1fr",

          gap: "22px",
        }}
      >

        {/* LIVE MAP */}
        <div
          style={{

            background: "#111827",

            borderRadius: "20px",

            padding: "20px",

            border:
                "1px solid #1e293b",
          }}
        >

          <div
            style={{

              display: "flex",

              alignItems: "center",

              gap: "12px",

              marginBottom: "20px",
            }}
          >

            <FaMapMarkedAlt
              color="#38bdf8"

              size={28}
            />

            <h2
              style={{
                color: "white",
              }}
            >
              Realtime GPS Map
            </h2>

          </div>

          <MapContainer

            center={[
              17.3850,
              78.4867,
            ]}

            zoom={5}

            style={{

              height: "500px",

              width: "100%",

              borderRadius: "16px",
            }}
          >

            {/* MAP */}
            <TileLayer
              attribution='&copy; OpenStreetMap'

              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* DEVICE MARKERS */}
            {devices.map(
              (
                device,
                index
              ) => (

                <Marker

                  key={index}

                  position={[

                    device.latitude || 0,

                    device.longitude || 0,
                  ]}
                >

                  <Popup>

                    <div>

                      <h3>
                        {device.id}
                      </h3>

                      <p>
                        Live device
                      </p>

                      <p>
                        Lat:
                        {" "}
                        {device.latitude}
                      </p>

                      <p>
                        Lng:
                        {" "}
                        {device.longitude}
                      </p>

                    </div>

                  </Popup>

                </Marker>
              )
            )}

          </MapContainer>

        </div>

        {/* LIVE DEVICES */}
        <div
          style={{

            background: "#111827",

            borderRadius: "20px",

            padding: "24px",

            border:
                "1px solid #1e293b",
          }}
        >

          <div
            style={{

              display: "flex",

              alignItems: "center",

              gap: "12px",

              marginBottom: "20px",
            }}
          >

            <FaMobileAlt
              color="#22c55e"

              size={24}
            />

            <h2
              style={{
                color: "white",
              }}
            >
              Live Devices
            </h2>

          </div>

          {devices.map(
            (
              device,
              index
            ) => (

              <div

                key={index}

                style={{

                  background:
                      "#1e293b",

                  padding: "18px",

                  borderRadius: "16px",

                  marginBottom:
                      "16px",

                  color: "white",
                }}
              >

                {/* TOP */}
                <div
                  style={{

                    display: "flex",

                    justifyContent:
                        "space-between",

                    alignItems:
                        "center",
                  }}
                >

                  <div>

                    <h3>
                      {device.id}
                    </h3>

                    <p
                      style={{
                        color:
                            "#94a3b8",
                      }}
                    >
                      {device.owner ||
                        "Unknown"}
                    </p>

                  </div>

                  <div
                    style={{

                      background:
                          "#16a34a",

                      padding:
                          "8px 12px",

                      borderRadius:
                          "10px",

                      fontSize: "12px",

                      fontWeight:
                          "bold",
                    }}
                  >
                    LIVE
                  </div>

                </div>

                {/* LOCATION */}
                <div
                  style={{
                    marginTop: "16px",
                  }}
                >

                  <div
                    style={{

                      display: "flex",

                      alignItems:
                          "center",

                      gap: "10px",

                      marginBottom:
                          "10px",
                    }}
                  >

                    <FaLocationArrow
                      color="#38bdf8"
                    />

                    <span>

                      {device.latitude},
                      {" "}
                      {device.longitude}

                    </span>

                  </div>

                  <div
                    style={{

                      display: "flex",

                      alignItems:
                          "center",

                      gap: "10px",

                      color:
                          "#94a3b8",
                    }}
                  >

                    <FaClock />

                    <span>
                      Live GPS Sync
                    </span>

                  </div>

                </div>

              </div>
            )
          )}

        </div>

      </div>

    </AdminLayout>
  );
};

export default Tracking;