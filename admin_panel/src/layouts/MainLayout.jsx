import { Outlet } from "react-router-dom";

import { useState, useEffect } from "react";

import Sidebar from "../components/dashboard/Sidebar";

import Topbar from "../components/dashboard/Topbar";

import {
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

// =====================================
// MAIN LAYOUT
// =====================================
const MainLayout = () => {

  // =====================================
  // STATES
  // =====================================
  const [collapsed, setCollapsed] =
    useState(false);

  const [isMobile, setIsMobile] =
    useState(false);

  // =====================================
  // RESPONSIVE CHECK
  // =====================================
  useEffect(() => {

    const handleResize = () => {

      if (
        window.innerWidth < 1024
      ) {

        setIsMobile(true);

        setCollapsed(true);

      } else {

        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize,
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize,
      );

  }, []);

  // =====================================
  // SIDEBAR WIDTH
  // =====================================
  const sidebarWidth =
    collapsed ? 95 : 270;

  return (

    <div
      style={{

        display: "flex",

        minHeight: "100vh",

        width: "100%",

        background:
          "linear-gradient(135deg, #020617 0%, #020817 50%, #031224 100%)",

        overflow: "hidden",

        position: "relative",
      }}
    >

      {/* ================================= */}
      {/* SIDEBAR */}
      {/* ================================= */}
      <aside
        style={{

          width: `${sidebarWidth}px`,

          minWidth: `${sidebarWidth}px`,

          height: "100vh",

          position: "fixed",

          top: 0,

          left: 0,

          zIndex: 1000,

          background:
            "rgba(2,8,23,0.96)",

          backdropFilter:
            "blur(14px)",

          borderRight:
            "1px solid rgba(51,65,85,0.5)",

          overflowY: "auto",

          overflowX: "hidden",

          transition:
            "all 0.35s ease",

          boxShadow:
            "0 0 30px rgba(0,0,0,0.35)",
        }}
      >

        {/* ================================= */}
        {/* COLLAPSE BUTTON */}
        {/* ================================= */}
        <button
          onClick={() =>
            setCollapsed(
              !collapsed,
            )
          }
          style={{

            position: "absolute",

            top: "18px",

            right: "14px",

            width: "38px",

            height: "38px",

            borderRadius: "12px",

            border:
              "1px solid #334155",

            background:
              "rgba(15,23,42,0.95)",

            color: "white",

            cursor: "pointer",

            display: "flex",

            justifyContent:
              "center",

            alignItems: "center",

            zIndex: 1001,

            transition:
              "0.3s ease",

            boxShadow:
              "0 4px 15px rgba(0,0,0,0.3)",
          }}
        >

          {
            collapsed
              ? <FaChevronRight />
              : <FaChevronLeft />
          }

        </button>

        {/* ================================= */}
        {/* SIDEBAR CONTENT */}
        {/* ================================= */}
        <Sidebar
          collapsed={collapsed}
        />

      </aside>

      {/* ================================= */}
      {/* MAIN CONTENT */}
      {/* ================================= */}
      <main
        style={{

          marginLeft:
            `${sidebarWidth}px`,

          width:
            `calc(100% - ${sidebarWidth}px)`,

          minHeight: "100vh",

          display: "flex",

          flexDirection: "column",

          overflow: "hidden",

          transition:
            "all 0.35s ease",

          position: "relative",
        }}
      >

        {/* ================================= */}
        {/* TOPBAR */}
        {/* ================================= */}
        <div
          style={{

            position: "sticky",

            top: 0,

            zIndex: 999,

            width: "100%",

            backdropFilter:
              "blur(12px)",

            background:
              "rgba(2,8,23,0.85)",

            borderBottom:
              "1px solid rgba(51,65,85,0.35)",

            boxShadow:
              "0 4px 25px rgba(0,0,0,0.25)",
          }}
        >

          <Topbar />

        </div>

        {/* ================================= */}
        {/* PAGE CONTAINER */}
        {/* ================================= */}
        <section
          style={{

            flex: 1,

            width: "100%",

            overflowY: "auto",

            overflowX: "hidden",

            position: "relative",

            padding:
              isMobile
                ? "18px"
                : "28px",

            boxSizing:
              "border-box",
          }}
        >

          {/* ================================= */}
          {/* BACKGROUND GLOW */}
          {/* ================================= */}
          <div
            style={{

              position: "absolute",

              top: "-120px",

              right: "-120px",

              width: "320px",

              height: "320px",

              borderRadius: "50%",

              background:
                "rgba(59,130,246,0.08)",

              filter: "blur(90px)",

              pointerEvents: "none",
            }}
          />

          <div
            style={{

              position: "absolute",

              bottom: "-150px",

              left: "-150px",

              width: "320px",

              height: "320px",

              borderRadius: "50%",

              background:
                "rgba(16,185,129,0.06)",

              filter: "blur(90px)",

              pointerEvents: "none",
            }}
          />

          {/* ================================= */}
          {/* CONTENT */}
          {/* ================================= */}
          <div
            style={{

              width: "100%",

              maxWidth: "100%",

              position: "relative",

              zIndex: 2,

              display: "flex",

              flexDirection: "column",

              gap: "24px",
            }}
          >

            <Outlet />

          </div>

        </section>

      </main>

    </div>
  );
};

export default MainLayout;