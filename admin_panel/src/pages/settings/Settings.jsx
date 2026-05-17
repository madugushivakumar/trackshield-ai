import {
  useState,
} from "react";

import {
  FaUserShield,
  FaBell,
  FaLock,
  FaDatabase,
  FaSave,
  FaMoon,
  FaGlobe,
  FaCloudUploadAlt,
  FaFingerprint,
  FaRobot,
  FaShieldAlt,
  FaServer,
  FaWifi,
  FaCheckCircle,
} from "react-icons/fa";

// =====================================
// SETTINGS PAGE
// =====================================
const Settings = () => {

  const [aiProtection, setAiProtection] =
    useState(true);

  const [darkMode, setDarkMode] =
    useState(true);

  const [notifications, setNotifications] =
    useState(true);

  const [biometric, setBiometric] =
    useState(false);

  const [backupEnabled, setBackupEnabled] =
    useState(true);

  const [autoUpdates, setAutoUpdates] =
    useState(true);

  return (

    <div>

      {/* ================================= */}
      {/* PAGE HEADER */}
      {/* ================================= */}
      <div
        style={{
          marginBottom: "35px",
        }}
      >

        <div
          style={{

            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            flexWrap: "wrap",

            gap: "20px",
          }}
        >

          <div>

            <h1
              style={{

                color: "white",

                fontSize: "38px",

                fontWeight: "bold",

                marginBottom: "10px",
              }}
            >

              Enterprise Settings

            </h1>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "16px",
              }}
            >

              Advanced AI security & system configuration center

            </p>

          </div>

          {/* STATUS */}
          <div
            style={{

              display: "flex",

              alignItems: "center",

              gap: "12px",

              background:
                "#111827",

              border:
                "1px solid #22c55e",

              padding:
                "14px 20px",

              borderRadius:
                "16px",

              color: "#4ade80",

              fontWeight:
                "bold",
            }}
          >

            <FaCheckCircle />

            SYSTEM SECURED

          </div>

        </div>

      </div>

      {/* ================================= */}
      {/* TOP STATS */}
      {/* ================================= */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(250px, 1fr))",

          gap: "24px",

          marginBottom: "35px",
        }}
      >

        <StatsCard
          icon={<FaShieldAlt />}
          title="Protection Level"
          value="98%"
          color="#22c55e"
        />

        <StatsCard
          icon={<FaServer />}
          title="Servers Online"
          value="48"
          color="#3b82f6"
        />

        <StatsCard
          icon={<FaWifi />}
          title="Connected Devices"
          value="1,284"
          color="#8b5cf6"
        />

        <StatsCard
          icon={<FaRobot />}
          title="AI Monitoring"
          value="ACTIVE"
          color="#f59e0b"
        />

      </div>

      {/* ================================= */}
      {/* SETTINGS GRID */}
      {/* ================================= */}
      <div
        style={{

          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(340px, 1fr))",

          gap: "24px",
        }}
      >

        {/* PROFILE */}
        <SettingsCard
          icon={<FaUserShield />}
          color="#3b82f6"
          title="Admin Profile"
          description="Manage administrator profile and access controls."
        >

          <InputField
            label="Admin Name"
            placeholder="Madugu Shivakumar"
          />

          <InputField
            label="Admin Email"
            placeholder="admin@trackshield.ai"
          />

        </SettingsCard>

        {/* NOTIFICATIONS */}
        <SettingsCard
          icon={<FaBell />}
          color="#10b981"
          title="Notifications"
          description="Realtime enterprise alerts and threat notifications."
        >

          <ToggleSwitch
            label="Push Notifications"
            value={notifications}
            onChange={
              setNotifications
            }
          />

          <ToggleSwitch
            label="Realtime Threat Alerts"
            value={true}
            onChange={() => {}}
          />

        </SettingsCard>

        {/* SECURITY */}
        <SettingsCard
          icon={<FaLock />}
          color="#ef4444"
          title="Security Controls"
          description="Authentication, biometric and encryption settings."
        >

          <ToggleSwitch
            label="AI Protection"
            value={aiProtection}
            onChange={
              setAiProtection
            }
          />

          <ToggleSwitch
            label="Biometric Login"
            value={biometric}
            onChange={
              setBiometric
            }
          />

          <ToggleSwitch
            label="Auto Security Updates"
            value={autoUpdates}
            onChange={
              setAutoUpdates
            }
          />

        </SettingsCard>

        {/* DATABASE */}
        <SettingsCard
          icon={<FaDatabase />}
          color="#06b6d4"
          title="Database & Backup"
          description="Cloud backup, realtime sync and database monitoring."
        >

          <ToggleSwitch
            label="Cloud Backup"
            value={backupEnabled}
            onChange={
              setBackupEnabled
            }
          />

          <ToggleSwitch
            label="Realtime Sync"
            value={true}
            onChange={() => {}}
          />

        </SettingsCard>

        {/* AI */}
        <SettingsCard
          icon={<FaRobot />}
          color="#8b5cf6"
          title="AI Engine"
          description="Manage AI scanning and intelligent threat detection."
        >

          <ToggleSwitch
            label="AI Threat Detection"
            value={true}
            onChange={() => {}}
          />

          <ToggleSwitch
            label="Behavior Analysis"
            value={true}
            onChange={() => {}}
          />

        </SettingsCard>

        {/* SYSTEM */}
        <SettingsCard
          icon={<FaMoon />}
          color="#f59e0b"
          title="System Preferences"
          description="Customize dashboard appearance and localization."
        >

          <ToggleSwitch
            label="Dark Mode"
            value={darkMode}
            onChange={setDarkMode}
          />

          <div
            style={{
              marginTop: "20px",
            }}
          >

            <label
              style={{
                color: "#94a3b8",
                marginBottom: "10px",
                display: "block",
              }}
            >

              System Region

            </label>

            <select
              style={selectStyle}
            >

              <option>
                India
              </option>

              <option>
                USA
              </option>

              <option>
                Germany
              </option>

              <option>
                Japan
              </option>

            </select>

          </div>

        </SettingsCard>

      </div>

      {/* ================================= */}
      {/* ACTION BUTTONS */}
      {/* ================================= */}
      <div
        style={{

          marginTop: "40px",

          display: "flex",

          gap: "18px",

          flexWrap: "wrap",
        }}
      >

        <button
          style={saveButtonStyle}
        >

          <FaSave />

          Save Settings

        </button>

        <button
          style={backupButtonStyle}
        >

          <FaCloudUploadAlt />

          Backup System

        </button>

      </div>

    </div>
  );
};

// =====================================
// SETTINGS CARD
// =====================================
const SettingsCard = ({
  icon,
  color,
  title,
  description,
  children,
}) => {

  return (

    <div
      style={{

        background:
          "linear-gradient(to bottom right, #111827, #0f172a)",

        border:
          "1px solid #1e293b",

        borderRadius:
          "24px",

        padding:
          "28px",

        color:
          "white",

        boxShadow:
          "0 8px 25px rgba(0,0,0,0.25)",
      }}
    >

      <div
        style={{

          width: "70px",

          height: "70px",

          borderRadius:
            "20px",

          background:
            color,

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          fontSize:
            "28px",

          marginBottom:
            "20px",
        }}
      >

        {icon}

      </div>

      <h2
        style={{

          fontSize: "24px",

          marginBottom:
            "12px",
        }}
      >

        {title}

      </h2>

      <p
        style={{

          color: "#94a3b8",

          lineHeight:
            "1.7",

          marginBottom:
            "24px",
        }}
      >

        {description}

      </p>

      {children}

    </div>
  );
};

// =====================================
// TOGGLE
// =====================================
const ToggleSwitch = ({
  label,
  value,
  onChange,
}) => {

  return (

    <div
      style={{

        display: "flex",

        justifyContent:
          "space-between",

        alignItems:
          "center",

        marginBottom:
          "18px",
      }}
    >

      <span
        style={{
          color: "#cbd5e1",
        }}
      >

        {label}

      </span>

      <button
        onClick={() =>
          onChange(!value)
        }
        style={{

          width: "60px",

          height: "30px",

          borderRadius:
            "20px",

          border: "none",

          cursor: "pointer",

          background:
            value
              ? "#22c55e"
              : "#334155",

          position:
            "relative",

          transition:
            "0.3s",
        }}
      >

        <div
          style={{

            width: "24px",

            height: "24px",

            borderRadius:
              "50%",

            background:
              "white",

            position:
              "absolute",

            top: "3px",

            left:
              value
                ? "32px"
                : "4px",

            transition:
              "0.3s",
          }}
        />

      </button>

    </div>
  );
};

// =====================================
// INPUT
// =====================================
const InputField = ({
  label,
  placeholder,
}) => {

  return (

    <div
      style={{
        marginBottom: "18px",
      }}
    >

      <label
        style={{

          color: "#94a3b8",

          display: "block",

          marginBottom:
            "10px",
        }}
      >

        {label}

      </label>

      <input
        type="text"
        placeholder={placeholder}
        style={inputStyle}
      />

    </div>
  );
};

// =====================================
// STATS CARD
// =====================================
const StatsCard = ({
  icon,
  title,
  value,
  color,
}) => {

  return (

    <div
      style={{

        background:
          "#111827",

        border:
          "1px solid #1e293b",

        borderRadius:
          "20px",

        padding:
          "24px",

        color:
          "white",
      }}
    >

      <div
        style={{

          width: "65px",

          height: "65px",

          borderRadius:
            "18px",

          background:
            color,

          display: "flex",

          justifyContent:
            "center",

          alignItems:
            "center",

          fontSize:
            "26px",

          marginBottom:
            "20px",
        }}
      >

        {icon}

      </div>

      <div
        style={{
          color: "#94a3b8",
          marginBottom: "8px",
        }}
      >

        {title}

      </div>

      <div
        style={{

          fontSize: "34px",

          fontWeight:
            "bold",
        }}
      >

        {value}

      </div>

    </div>
  );
};

// =====================================
// STYLES
// =====================================
const inputStyle = {

  width: "100%",

  padding: "14px",

  background: "#0f172a",

  border: "1px solid #1e293b",

  borderRadius: "12px",

  color: "white",

  outline: "none",
};

const selectStyle = {

  width: "100%",

  padding: "14px",

  background: "#0f172a",

  border: "1px solid #1e293b",

  borderRadius: "12px",

  color: "white",

  outline: "none",
};

const saveButtonStyle = {

  background:
    "linear-gradient(to right, #2563eb, #06b6d4)",

  color: "white",

  border: "none",

  padding: "15px 28px",

  borderRadius: "14px",

  fontWeight: "bold",

  display: "flex",

  alignItems: "center",

  gap: "10px",

  cursor: "pointer",

  fontSize: "16px",
};

const backupButtonStyle = {

  background: "#111827",

  color: "white",

  border: "1px solid #334155",

  padding: "15px 28px",

  borderRadius: "14px",

  fontWeight: "bold",

  display: "flex",

  alignItems: "center",

  gap: "10px",

  cursor: "pointer",

  fontSize: "16px",
};

export default Settings;