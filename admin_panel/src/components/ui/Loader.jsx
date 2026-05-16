// =====================================
// LOADER
// =====================================
const Loader = () => {

  return (

    <div
      style={{

        width: "100%",

        height: "100vh",

        background: "#020817",

        display: "flex",

        flexDirection: "column",

        justifyContent:
          "center",

        alignItems:
          "center",

        color: "white",
      }}
    >

      {/* SPINNER */}
      <div
        style={{

          width: "70px",

          height: "70px",

          border:
            "6px solid #1e293b",

          borderTop:
            "6px solid #38bdf8",

          borderRadius: "50%",

          animation:
            "spin 1s linear infinite",

          marginBottom: "20px",
        }}
      />

      {/* TEXT */}
      <h2
        style={{

          fontSize: "24px",

          fontWeight: "bold",
        }}
      >

        Loading TrackShield AI...

      </h2>

      <p
        style={{

          marginTop: "10px",

          color: "#94a3b8",
        }}
      >

        Initializing enterprise security system

      </p>

      {/* STYLE */}
      <style>

        {`

          @keyframes spin {

            0% {

              transform: rotate(0deg);
            }

            100% {

              transform: rotate(360deg);
            }
          }
        `}

      </style>

    </div>
  );
};

export default Loader;