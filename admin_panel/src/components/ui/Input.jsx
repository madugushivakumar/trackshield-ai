// =====================================
// INPUT
// =====================================
const Input = ({

  type = "text",

  placeholder,

  value,

  onChange,

  name,

  label,

}) => {

  return (

    <div
      style={{
        width: "100%",
      }}
    >

      {/* LABEL */}
      {

        label && (

          <label
            style={{

              display: "block",

              marginBottom: "10px",

              color: "white",

              fontWeight: "500",
            }}
          >

            {label}

          </label>
        )
      }

      {/* INPUT */}
      <input

        type={type}

        placeholder={placeholder}

        value={value}

        onChange={onChange}

        name={name}

        style={{

          width: "100%",

          padding: "14px",

          borderRadius: "14px",

          border:
            "1px solid #1e293b",

          background: "#0f172a",

          color: "white",

          outline: "none",

          fontSize: "15px",
        }}
      />

    </div>
  );
};

export default Input;