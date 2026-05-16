import Sidebar from "../components/dashboard/Sidebar";

import Topbar from "../components/dashboard/Topbar";

// =====================================
// MAIN LAYOUT
// =====================================
const MainLayout = ({

  children,

}) => {

  return (

    <div
      style={{

        display: "flex",

        minHeight: "100vh",

        background: "#020817",

        overflow: "hidden",
      }}
    >

      {/* SIDEBAR */}
      <div
        style={{

          width: "270px",

          flexShrink: 0,

          position: "fixed",

          left: 0,

          top: 0,

          bottom: 0,

          zIndex: 1000,
        }}
      >

        <Sidebar />

      </div>

      {/* MAIN CONTENT */}
      <div
        style={{

          marginLeft: "270px",

          width: "calc(100% - 270px)",

          minHeight: "100vh",

          display: "flex",

          flexDirection: "column",
        }}
      >

        {/* TOPBAR */}
        <Topbar />

        {/* PAGE CONTENT */}
        <div
          style={{

            flex: 1,

            padding: "25px",

            overflowY: "auto",
          }}
        >

          {children}

        </div>

      </div>

    </div>
  );
};

export default MainLayout;