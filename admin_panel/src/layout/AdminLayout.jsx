import Sidebar
from "../components/Sidebar";

import Topbar
from "../components/Topbar";

const AdminLayout = ({
  children,
}) => {

  return (

    <div
      style={{

        display: "flex",

        minHeight: "100vh",

        background: "#0f172a",
      }}
    >

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div
        style={{
          flex: 1,

          display: "flex",

          flexDirection: "column",
        }}
      >

        {/* TOPBAR */}
        <Topbar />

        {/* PAGE CONTENT */}
        <div
          style={{
            padding: "25px",
          }}
        >
          {children}
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;