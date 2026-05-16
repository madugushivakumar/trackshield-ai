// =====================================
// MODAL
// =====================================
const Modal = ({

  isOpen,

  onClose,

  title,

  children,

}) => {

  if (!isOpen) {

    return null;
  }

  return (

    <div
      style={{

        position: "fixed",

        inset: 0,

        background:
          "rgba(0,0,0,0.7)",

        display: "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        zIndex: 9999,
      }}
    >

      {/* MODAL BOX */}
      <div
        style={{

          width: "500px",

          background: "#111827",

          borderRadius: "20px",

          border:
            "1px solid #1e293b",

          padding: "24px",

          color: "white",

          boxShadow:
            "0 12px 40px rgba(0,0,0,0.4)",
        }}
      >

        {/* HEADER */}
        <div
          style={{

            display: "flex",

            justifyContent:
              "space-between",

            alignItems: "center",

            marginBottom: "20px",
          }}
        >

          <h2
            style={{

              fontSize: "24px",

              fontWeight: "bold",
            }}
          >

            {title}

          </h2>

          <button

            onClick={onClose}

            style={{

              background:
                "transparent",

              border: "none",

              color: "white",

              fontSize: "22px",

              cursor: "pointer",
            }}
          >

            ×

          </button>

        </div>

        {/* CONTENT */}
        <div>

          {children}

        </div>

      </div>

    </div>
  );
};

export default Modal;