import {

  useState,

} from "react";

import {

  useNavigate,

  Link,

} from "react-router-dom";

import {

  FaShieldAlt,

  FaEnvelope,

  FaLock,

  FaEye,

  FaGoogle,

  FaGithub,

} from "react-icons/fa";

import {

  loginUser,

} from "../../services/authService";


import useAuth from "../../hooks/useAuth";



// =====================================
// LOGIN PAGE
// =====================================
const Login = () => {

  const navigate =
    useNavigate();

  const {
    login,
  } = useAuth();

  const [loading, setLoading] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

  const [formData, setFormData] =
    useState({

      email: "",

      password: "",
    });

  // ===================================
  // HANDLE CHANGE
  // ===================================
  const handleChange =
    (e) => {

      setFormData({

        ...formData,

        [e.target.name]:
          e.target.value,
      });
    };

  // ===================================
  // HANDLE LOGIN
  // ===================================
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        const response =
          await loginUser(
            formData,
          );

        login(

          response.token,

          response.user,
        );

        navigate(
          "/dashboard",
        );

      } catch (error) {

        console.log(
          "Login Error:",
          error,
        );

        alert(

          error.response?.data
            ?.message ||

          "Login Failed",
        );
      }

      setLoading(false);
    };

  return (

    <div
      style={{

        minHeight: "100vh",

        background:
          "linear-gradient(to right, #020817, #07142b)",

        display: "flex",

        justifyContent:
          "center",

        alignItems:
          "center",

        padding: "20px",
      }}
    >

      <div
        style={{

          width: "100%",

          maxWidth: "540px",

          background: "#0f172a",

          border:
            "1px solid #1e293b",

          borderRadius: "30px",

          padding: "45px",

          boxShadow:
            "0 20px 60px rgba(0,0,0,0.4)",
        }}
      >

        {/* LOGO */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >

          <div
            style={{

              width: "90px",

              height: "90px",

              margin: "0 auto 25px",

              borderRadius: "25px",

              background:
                "linear-gradient(to right, #2563eb, #06b6d4)",

              display: "flex",

              alignItems: "center",

              justifyContent:
                "center",

              fontSize: "40px",

              color: "white",
            }}
          >

            <FaShieldAlt />

          </div>

          <h1
            style={{

              color: "white",

              fontSize: "54px",

              fontWeight: "bold",

              marginBottom: "10px",
            }}
          >

            TrackShield AI

          </h1>

          <p
            style={{
              color: "#94a3b8",
              fontSize: "18px",
            }}
          >

            Enterprise Security Admin Panel

          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
        >

          {/* EMAIL */}
          <div
            style={{
              marginBottom: "25px",
            }}
          >

            <label
              style={{

                display: "block",

                color: "white",

                marginBottom: "10px",

                fontWeight: "600",
              }}
            >

              Email Address

            </label>

            <div
              style={{
                position: "relative",
              }}
            >

              <FaEnvelope
                style={{

                  position: "absolute",

                  left: "18px",

                  top: "20px",

                  color: "#64748b",
                }}
              />

              <input
                type="email"
                name="email"
                placeholder="admin@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
               style={{

  width: "100%",

  boxSizing: "border-box",

  padding:
    "18px 18px 18px 55px",

  background: "#111827",

  border:
    "1px solid #1e293b",

  borderRadius: "18px",

  color: "white",

  outline: "none",

  fontSize: "16px",
}}
              />

            </div>

          </div>

          {/* PASSWORD */}
          <div
            style={{
              marginBottom: "35px",
            }}
          >

            <label
              style={{

                display: "block",

                color: "white",

                marginBottom: "10px",

                fontWeight: "600",
              }}
            >

              Password

            </label>

            <div
              style={{
                position: "relative",
              }}
            >

              <FaLock
                style={{

                  position: "absolute",

                  left: "18px",

                  top: "20px",

                  color: "#64748b",
                }}
              />

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                name="password"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
               style={{

  width: "100%",

  boxSizing: "border-box",

  padding:
    "18px 18px 18px 55px",

  background: "#111827",

  border:
    "1px solid #1e293b",

  borderRadius: "18px",

  color: "white",

  outline: "none",

  fontSize: "16px",
}}
              />

              <FaEye
                onClick={() =>
                  setShowPassword(
                    !showPassword,
                  )
                }
                style={{

                  position: "absolute",

                  right: "18px",

                  top: "20px",

                  color: "#64748b",

                  cursor: "pointer",
                }}
              />

            </div>

          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            disabled={loading}
           style={{

  width: "100%",

  boxSizing: "border-box",

  padding:
    "18px 18px 18px 55px",

  background: "#111827",

  border:
    "1px solid #1e293b",

  borderRadius: "18px",

  color: "white",

  outline: "none",

  fontSize: "16px",
}}
          >

            {

              loading
                ? "Logging In..."
                : "Login to Dashboard"
            }

          </button>

        </form>

        {/* DIVIDER */}
        <div
          style={{

            display: "flex",

            alignItems: "center",

            marginBottom: "25px",
          }}
        >

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#1e293b",
            }}
          />

          <span
            style={{

              padding: "0 15px",

              color: "#94a3b8",
            }}
          >

            OR

          </span>

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#1e293b",
            }}
          />

        </div>

        {/* SOCIAL LOGIN */}
        <div
          style={{

            display: "grid",

            gridTemplateColumns:
              "1fr 1fr",

            gap: "15px",

            marginBottom: "25px",
          }}
        >

          {/* GOOGLE */}
          <button
           style={{

  width: "100%",

  boxSizing: "border-box",

  padding:
    "18px 18px 18px 55px",

  background: "#111827",

  border:
    "1px solid #1e293b",

  borderRadius: "18px",

  color: "white",

  outline: "none",

  fontSize: "16px",
}}
          >

            <FaGoogle />

            Google

          </button>

          {/* GITHUB */}
          <button
           style={{

  width: "100%",

  boxSizing: "border-box",

  padding:
    "18px 18px 18px 55px",

  background: "#111827",

  border:
    "1px solid #1e293b",

  borderRadius: "18px",

  color: "white",

  outline: "none",

  fontSize: "16px",
}}
          >

            <FaGithub />

            GitHub

          </button>

        </div>

        {/* SIGNUP */}
        <div
          style={{
            textAlign: "center",
          }}
        >

          <span
            style={{
              color: "#94a3b8",
            }}
          >

            Don&apos;t have an account?

          </span>

          <Link
            to="/signup"
            style={{

              marginLeft: "8px",

              color: "#38bdf8",

              textDecoration: "none",

              fontWeight: "bold",
            }}
          >

            Sign Up

          </Link>

        </div>

        {/* FOOTER */}
        <p
          style={{

            textAlign: "center",

            color: "#64748b",

            marginTop: "35px",
          }}
        >

          Protected by AI Security Engine

        </p>

      </div>

    </div>
  );
};

export default Login;