// =====================================
// BUTTON
// =====================================
const Button = ({

  title,

  onClick,

  color = "#38bdf8",

  textColor = "white",

  width = "100%",

  icon,

}) => {

  return (

    <button

      onClick={onClick}

      style={{

        width,

        background: color,

        color: textColor,

        border: "none",

        padding: "14px",

        borderRadius: "14px",

        cursor: "pointer",

        fontWeight: "bold",

        fontSize: "16px",

        display: "flex",

        alignItems: "center",

        justifyContent:
          "center",

        gap: "10px",

        transition: "0.3s",
      }}
    >

      {icon}

      {title}

    </button>
  );
};

export default Button;