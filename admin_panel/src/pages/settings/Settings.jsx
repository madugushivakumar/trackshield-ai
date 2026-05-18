import {
  useEffect,
  useState,
} from "react";

import {

  FaUserShield,

  FaBell,

  FaLock,

  FaDatabase,

  FaSave,

  FaMoon,

  FaSun,

  FaGlobe,

  FaCloudUploadAlt,

  FaFingerprint,

  FaRobot,

  FaShieldAlt,

  FaServer,

  FaWifi,

  FaCheckCircle,

  FaCloud,

  FaBroadcastTower,

  FaBrain,

  FaKey,

  FaCode,

  FaSyncAlt,

  FaUsersCog,

  FaBug,

  FaDesktop,

  FaEye,

} from "react-icons/fa";

// =====================================
// SETTINGS PAGE
// =====================================
const Settings = () => {

  // ===================================
  // STATES
  // ===================================
  const [saving, setSaving] =
    useState(false);

  const [saved, setSaved] =
    useState(false);

  const [settings, setSettings] =
    useState({

      darkMode: true,

      aiProtection: true,

      notifications: true,

      biometric: false,

      backupEnabled: true,

      autoUpdates: true,

      websocket: true,

      cloudSync: true,

      apiSecurity: true,

      realtimeAI: true,

      firewall: true,

      intrusionDetection: true,

      analyticsEngine: true,

      behaviorAnalysis: true,
    });

  // ===================================
  // LOAD THEME
  // ===================================
  useEffect(() => {

    const storedTheme =
      localStorage.getItem(
        "trackshield-theme"
      );

    if (storedTheme) {

      setSettings((prev) => ({

        ...prev,

        darkMode:
          storedTheme ===
          "dark",
      }));
    }

  }, []);

  // ===================================
  // TOGGLE
  // ===================================
  const toggleSetting =
    (key) => {

      setSettings((prev) => ({

        ...prev,

        [key]:
          !prev[key],
      }));
    };

  // ===================================
  // SAVE SETTINGS
  // ===================================
  const handleSave =
    () => {

      setSaving(true);

      localStorage.setItem(

        "trackshield-theme",

        settings.darkMode
          ? "dark"
          : "light"
      );

      setTimeout(() => {

        setSaving(false);

        setSaved(true);

        setTimeout(() => {

          setSaved(false);

        }, 3000);

      }, 1500);
    };

  return (

    <div>

      {/* ================================= */}
      {/* HEADER */}
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

                fontSize: "42px",

                fontWeight: "bold",

                marginBottom: "10px",
              }}
            >

              Enterprise AI Settings Center

            </h1>

            <p
              style={{
                color: "#94a3b8",
                fontSize: "16px",
              }}
            >

              Advanced enterprise AI infrastructure and security configuration dashboard

            </p>

          </div>

          {/* STATUS */}
          <div
            style={statusStyle}
          >

            <FaCheckCircle />

            ENTERPRISE SECURED

          </div>

        </div>

      </div>

      {/* ================================= */}
      {/* TOP ANALYTICS */}
      {/* ================================= */}
      <div
        style={statsGrid}
      >

        <StatsCard
          icon={<FaShieldAlt />}
          title="Protection Level"
          value="99.9%"
          color="#22c55e"
        />

        <StatsCard
          icon={<FaServer />}
          title="Servers Active"
          value="48"
          color="#3b82f6"
        />

        <StatsCard
          icon={<FaRobot />}
          title="AI Engines"
          value="12"
          color="#8b5cf6"
        />

        <StatsCard
          icon={<FaBroadcastTower />}
          title="Realtime Monitoring"
          value="ACTIVE"
          color="#f59e0b"
        />

      </div>

      {/* ================================= */}
      {/* SETTINGS GRID */}
      {/* ================================= */}
      <div
        style={settingsGrid}
      >

        {/* ADMIN */}
        <SettingsCard
          icon={<FaUsersCog />}
          color="#2563eb"
          title="Admin Management"
          description="Manage enterprise administrator access and profiles."
        >

          <InputField
            label="Administrator"
            placeholder="TrackShield Admin"
          />

          <InputField
            label="Email"
            placeholder="admin@trackshield.ai"
          />

          <InputField
            label="Access Role"
            placeholder="Super Admin"
          />

        </SettingsCard>

        {/* SECURITY */}
        <SettingsCard
          icon={<FaLock />}
          color="#ef4444"
          title="Security Policies"
          description="Enterprise security policies and authentication settings."
        >

          <ToggleSwitch
            label="AI Protection"
            value={
              settings.aiProtection
            }
            onChange={() =>
              toggleSetting(
                "aiProtection"
              )
            }
          />

          <ToggleSwitch
            label="Biometric Access"
            value={
              settings.biometric
            }
            onChange={() =>
              toggleSetting(
                "biometric"
              )
            }
          />

          <ToggleSwitch
            label="Firewall Protection"
            value={
              settings.firewall
            }
            onChange={() =>
              toggleSetting(
                "firewall"
              )
            }
          />

          <ToggleSwitch
            label="Intrusion Detection"
            value={
              settings.intrusionDetection
            }
            onChange={() =>
              toggleSetting(
                "intrusionDetection"
              )
            }
          />

        </SettingsCard>

        {/* AI ENGINE */}
        <SettingsCard
          icon={<FaBrain />}
          color="#8b5cf6"
          title="AI Engine Controls"
          description="Advanced AI threat intelligence and behavioral monitoring."
        >

          <ToggleSwitch
            label="Realtime AI"
            value={
              settings.realtimeAI
            }
            onChange={() =>
              toggleSetting(
                "realtimeAI"
              )
            }
          />

          <ToggleSwitch
            label="Behavior Analysis"
            value={
              settings.behaviorAnalysis
            }
            onChange={() =>
              toggleSetting(
                "behaviorAnalysis"
              )
            }
          />

          <ToggleSwitch
            label="Analytics Engine"
            value={
              settings.analyticsEngine
            }
            onChange={() =>
              toggleSetting(
                "analyticsEngine"
              )
            }
          />

        </SettingsCard>

        {/* NOTIFICATIONS */}
        <SettingsCard
          icon={<FaBell />}
          color="#10b981"
          title="Notification Center"
          description="Realtime enterprise alerts and AI notifications."
        >

          <ToggleSwitch
            label="Push Notifications"
            value={
              settings.notifications
            }
            onChange={() =>
              toggleSetting(
                "notifications"
              )
            }
          />

          <ToggleSwitch
            label="WebSocket Alerts"
            value={
              settings.websocket
            }
            onChange={() =>
              toggleSetting(
                "websocket"
              )
            }
          />

          <ToggleSwitch
            label="Cloud Sync"
            value={
              settings.cloudSync
            }
            onChange={() =>
              toggleSetting(
                "cloudSync"
              )
            }
          />

        </SettingsCard>

        {/* DATABASE */}
        <SettingsCard
          icon={<FaDatabase />}
          color="#06b6d4"
          title="Database & Backup"
          description="Realtime enterprise database protection and backup systems."
        >

          <ToggleSwitch
            label="Cloud Backup"
            value={
              settings.backupEnabled
            }
            onChange={() =>
              toggleSetting(
                "backupEnabled"
              )
            }
          />

          <ToggleSwitch
            label="Auto Updates"
            value={
              settings.autoUpdates
            }
            onChange={() =>
              toggleSetting(
                "autoUpdates"
              )
            }
          />

          <ToggleSwitch
            label="API Security"
            value={
              settings.apiSecurity
            }
            onChange={() =>
              toggleSetting(
                "apiSecurity"
              )
            }
          />

        </SettingsCard>

        {/* SYSTEM */}
        <SettingsCard
          icon={
            settings.darkMode
              ? <FaMoon />
              : <FaSun />
          }
          color="#f59e0b"
          title="System Preferences"
          description="Dashboard appearance and enterprise environment settings."
        >

          <ToggleSwitch
            label="Dark Mode"
            value={
              settings.darkMode
            }
            onChange={() =>
              toggleSetting(
                "darkMode"
              )
            }
          />

          <div
            style={{
              marginTop: "20px",
            }}
          >

            <label
              style={labelStyle}
            >

              Enterprise Region

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

              <option>
                Singapore
              </option>

            </select>

          </div>

        </SettingsCard>

      </div>

      {/* ================================= */}
      {/* ENTERPRISE INFO */}
      {/* ================================= */}
      <div
        style={enterprisePanel}
      >

        <div
          style={{
            marginBottom: "25px",
          }}
        >

          <h2
            style={enterpriseTitle}
          >

            Enterprise Infrastructure

          </h2>

          <p
            style={enterpriseSub}
          >

            Realtime enterprise AI infrastructure monitoring

          </p>

        </div>

        <div
          style={enterpriseGrid}
        >

          <EnterpriseCard
            icon={<FaKey />}
            title="Access Control"
            value="Protected"
            color="#22c55e"
          />

          <EnterpriseCard
            icon={<FaCloud />}
            title="Cloud Sync"
            value="Connected"
            color="#8b5cf6"
          />

          <EnterpriseCard
            icon={<FaCode />}
            title="API Gateway"
            value="Secured"
            color="#ef4444"
          />

          <EnterpriseCard
            icon={<FaEye />}
            title="Threat Scanner"
            value="Monitoring"
            color="#06b6d4"
          />

        </div>

      </div>

      {/* ================================= */}
      {/* ACTIONS */}
      {/* ================================= */}
      <div
        style={actionButtons}
      >

        <button
          onClick={handleSave}
          style={saveButton}
        >

          {

            saving ? (

              <>

                <FaSyncAlt
                  className="spin"
                />

                Saving...

              </>

            ) : saved ? (

              <>

                <FaCheckCircle />

                Saved Successfully

              </>

            ) : (

              <>

                <FaSave />

                Save Enterprise Settings

              </>

            )
          }

        </button>

        <button
          style={backupButton}
        >

          <FaCloudUploadAlt />

          Backup Infrastructure

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
}) => (

  <div
    style={cardStyle}
  >

    <div
      style={{

        width: "72px",

        height: "72px",

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

        marginBottom:
          "22px",
      }}
    >

      {icon}

    </div>

    <h2
      style={cardTitle}
    >

      {title}

    </h2>

    <p
      style={cardDesc}
    >

      {description}

    </p>

    {children}

  </div>
);

// =====================================
// TOGGLE
// =====================================
const ToggleSwitch = ({
  label,
  value,
  onChange,
}) => (

  <div
    style={toggleContainer}
  >

    <span
      style={toggleLabel}
    >

      {label}

    </span>

    <button
      onClick={onChange}
      style={{

        width: "60px",

        height: "30px",

        borderRadius:
          "20px",

        border: "none",

        cursor:
          "pointer",

        background:
          value
            ? "#22c55e"
            : "#374151",

        position:
          "relative",
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

// =====================================
// INPUT
// =====================================
const InputField = ({
  label,
  placeholder,
}) => (

  <div
    style={{
      marginBottom: "18px",
    }}
  >

    <label
      style={labelStyle}
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

// =====================================
// STATS CARD
// =====================================
const StatsCard = ({
  icon,
  title,
  value,
  color,
}) => (

  <div
    style={statsCard}
  >

    <div
      style={{

        width: "65px",

        height: "65px",

        borderRadius:
          "18px",

        background:
          color,

        display:
          "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        fontSize:
          "26px",

        color:
          "white",

        marginBottom:
          "18px",
      }}
    >

      {icon}

    </div>

    <div
      style={{
        color:
          "#94a3b8",

        marginBottom:
          "8px",
      }}
    >

      {title}

    </div>

    <div
      style={{

        color:
          "white",

        fontSize:
          "34px",

        fontWeight:
          "bold",
      }}
    >

      {value}

    </div>

  </div>
);

// =====================================
// ENTERPRISE CARD
// =====================================
const EnterpriseCard = ({
  icon,
  title,
  value,
  color,
}) => (

  <div
    style={enterpriseCard}
  >

    <div
      style={{

        width: "60px",

        height: "60px",

        borderRadius:
          "18px",

        background:
          color,

        display:
          "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        fontSize:
          "24px",

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
            "#94a3b8",

          marginBottom:
            "8px",
        }}
      >

        {title}

      </div>

      <div
        style={{

          color:
            "white",

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
const statusStyle = {

  display:
    "flex",

  alignItems:
    "center",

  gap:
    "12px",

  background:
    "#111827",

  border:
    "1px solid #22c55e",

  padding:
    "14px 20px",

  borderRadius:
    "16px",

  color:
    "#4ade80",

  fontWeight:
    "bold",
};

const statsGrid = {

  display:
    "grid",

  gridTemplateColumns:
    "repeat(auto-fit, minmax(250px, 1fr))",

  gap:
    "24px",

  marginBottom:
    "35px",
};

const settingsGrid = {

  display:
    "grid",

  gridTemplateColumns:
    "repeat(auto-fit, minmax(340px, 1fr))",

  gap:
    "24px",
};

const cardStyle = {

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
};

const cardTitle = {

  fontSize:
    "24px",

  marginBottom:
    "12px",
};

const cardDesc = {

  color:
    "#94a3b8",

  lineHeight:
    "1.7",

  marginBottom:
    "24px",
};

const toggleContainer = {

  display:
    "flex",

  justifyContent:
    "space-between",

  alignItems:
    "center",

  marginBottom:
    "18px",
};

const toggleLabel = {

  color:
    "#cbd5e1",
};

const labelStyle = {

  color:
    "#94a3b8",

  display:
    "block",

  marginBottom:
    "10px",
};

const inputStyle = {

  width:
    "100%",

  padding:
    "14px",

  background:
    "#0f172a",

  border:
    "1px solid #1e293b",

  borderRadius:
    "12px",

  color:
    "white",

  outline:
    "none",
};

const selectStyle = {

  width:
    "100%",

  padding:
    "14px",

  background:
    "#0f172a",

  border:
    "1px solid #1e293b",

  borderRadius:
    "12px",

  color:
    "white",

  outline:
    "none",
};

const statsCard = {

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
};

const enterprisePanel = {

  background:
    "linear-gradient(to right, #111827, #0f172a)",

  border:
    "1px solid #1e293b",

  borderRadius:
    "24px",

  padding:
    "28px",

  marginTop:
    "40px",
};

const enterpriseTitle = {

  color:
    "white",

  fontSize:
    "28px",

  marginBottom:
    "10px",
};

const enterpriseSub = {

  color:
    "#94a3b8",
};

const enterpriseGrid = {

  display:
    "grid",

  gridTemplateColumns:
    "repeat(auto-fit, minmax(240px, 1fr))",

  gap:
    "20px",
};

const enterpriseCard = {

  background:
    "#0f172a",

  border:
    "1px solid #1e293b",

  borderRadius:
    "20px",

  padding:
    "20px",

  display:
    "flex",

  alignItems:
    "center",

  gap:
    "18px",
};

const actionButtons = {

  marginTop:
    "40px",

  display:
    "flex",

  gap:
    "18px",

  flexWrap:
    "wrap",
};

const saveButton = {

  background:
    "linear-gradient(to right, #2563eb, #06b6d4)",

  color:
    "white",

  border:
    "none",

  padding:
    "15px 28px",

  borderRadius:
    "14px",

  fontWeight:
    "bold",

  display:
    "flex",

  alignItems:
    "center",

  gap:
    "10px",

  cursor:
    "pointer",

  fontSize:
    "16px",
};

const backupButton = {

  background:
    "#111827",

  color:
    "white",

  border:
    "1px solid #334155",

  padding:
    "15px 28px",

  borderRadius:
    "14px",

  fontWeight:
    "bold",

  display:
    "flex",

  alignItems:
    "center",

  gap:
    "10px",

  cursor:
    "pointer",

  fontSize:
    "16px",
};

export default Settings;