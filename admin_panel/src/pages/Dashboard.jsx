import AdminLayout
from "../layout/AdminLayout";

import StatusCard
from "../components/StatusCard";

import SOSPopup
from "../components/SOSPopup";

import {
  useEffect,
  useState,
} from "react";

import {
  ref,
  onValue,
} from "firebase/database";

import {
  database,
} from "../services/firebase";

import {

  FaMobileAlt,
  FaShieldAlt,
  FaExclamationTriangle,
  FaMapMarkedAlt,
  FaBell,
  FaUserSecret,

} from "react-icons/fa";

const Dashboard = () => {

  // =====================================
  // SOS ALERT STATE
  // =====================================
  const [sosAlert,
    setSOSAlert] =
      useState(null);

  // =====================================
  // LOAD SOS ALERTS
  // =====================================
  useEffect(() => {

    const sosRef =
      ref(
        database,
        "sos_alerts"
      );

    onValue(
      sosRef,
      (snapshot) => {

        const data =
          snapshot.val();

        if (data) {

          const alerts =
            Object.values(data);

          const latestAlert =
            alerts[
              alerts.length - 1
            ];

          setSOSAlert(
            latestAlert
          );
        }
      }
    );

  }, []);

  // =====================================
  // STATUS CARDS
  // =====================================
  const cards = [

    {
      title: "Protected Devices",

      value: "24",

      icon: <FaMobileAlt />,

      color: "#2563eb",

      subtitle:
          "Devices currently protected",
    },

    {
      title: "Threat Alerts",

      value: "8",

      icon:
          <FaExclamationTriangle />,

      color: "#dc2626",

      subtitle:
          "Realtime AI threat alerts",
    },

    {
      title: "Security Score",

      value: "92%",

      icon: <FaShieldAlt />,

      color: "#16a34a",

      subtitle:
          "Enterprise protection status",
    },

    {
      title: "Live Tracking",

      value: "18",

      icon: <FaMapMarkedAlt />,

      color: "#7c3aed",

      subtitle:
          "Devices sharing live location",
    },
  ];

  // =====================================
  // LIVE ACTIVITIES
  // =====================================
  const activities = [

    "SOS alert triggered from TS-1001",

    "AI detected suspicious movement",

    "Remote alarm activated",

    "Intruder face detected",

    "Device TS-2004 disconnected",

    "Remote wipe request generated",
  ];

  return (

    <AdminLayout>

      {/* SOS POPUP */}
      <SOSPopup

        alert={sosAlert}

        onClose={() =>
          setSOSAlert(null)
        }
      />

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
          Security Overview
        </h1>

        <p
          style={{
            color: "#94a3b8",
          }}
        >
          AI-powered enterprise
          cybersecurity monitoring
        </p>

      </div>

      {/* STATUS CARDS */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",

          gap: "22px",
        }}
      >

        {cards.map(
          (card, index) => (

            <StatusCard

              key={index}

              title={card.title}

              value={card.value}

              icon={card.icon}

              color={card.color}

              subtitle={
                card.subtitle
              }
            />
          )
        )}

      </div>

      {/* SECOND SECTION */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
              "2fr 1fr",

          gap: "22px",

          marginTop: "30px",
        }}
      >

        {/* LIVE MAP */}
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

            <FaMapMarkedAlt
              color="#38bdf8"

              size={26}
            />

            <h2
              style={{
                color: "white",
              }}
            >
              Live Tracking Map
            </h2>

          </div>

          <div
            style={{

              height: "350px",

              borderRadius: "16px",

              background:
                  "linear-gradient(to right, #1e293b, #0f172a)",

              display: "flex",

              justifyContent:
                  "center",

              alignItems:
                  "center",

              color: "#94a3b8",

              fontSize: "24px",
            }}
          >
            Live GPS Tracking Network
          </div>

        </div>

        {/* ACTIVITY FEED */}
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

            <FaBell
              color="#facc15"

              size={24}
            />

            <h2
              style={{
                color: "white",
              }}
            >
              Security Activity
            </h2>

          </div>

          {activities.map(
            (
              activity,
              index
            ) => (

              <div

                key={index}

                style={{

                  background:
                      "#1e293b",

                  padding: "14px",

                  borderRadius: "12px",

                  marginBottom:
                      "14px",

                  color: "white",

                  display: "flex",

                  alignItems:
                      "center",

                  gap: "12px",
                }}
              >

                <FaUserSecret
                  color="#38bdf8"
                />

                <span>
                  {activity}
                </span>

              </div>
            )
          )}

        </div>

      </div>

    </AdminLayout>
  );
};

export default Dashboard;