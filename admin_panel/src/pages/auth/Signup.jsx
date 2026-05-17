import {

  useState,

} from "react";

import {

  Link,

  useNavigate,

} from "react-router-dom";

import {

  FaShieldAlt,

  FaEnvelope,

  FaLock,

  FaUser,

  FaGoogle,

  FaGithub,

} from "react-icons/fa";

import axios from "axios";


// =====================================
// SIGNUP PAGE
// =====================================
const Signup = () => {

  const navigate =
    useNavigate();

  const [loading, setLoading] =
    useState(false);

  const [formData, setFormData] =
    useState({

      name: "",

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
  // HANDLE SIGNUP
  // ===================================
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        setLoading(true);

        // ============================
        // API CALL
        // ============================
        const response =
          await axios.post(

            "http://localhost:5000/api/auth/register",

            formData,

            {

              headers: {

                "Content-Type":
                  "application/json",
              },
            },
          );

        // ============================
        // SUCCESS
        // ============================
        if (
          response.data.success
        ) {

          alert(
            "Account Created Successfully",
          );

          navigate("/");
        }

      } catch (error) {

        console.log(
          "Signup Error:",
          error,
        );

        alert(

          error.response?.data
            ?.message ||

          "Signup Failed",
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

          boxSizing: "border-box",
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

              fontSize: "50px",

              fontWeight: "bold",

              marginBottom: "10px",
            }}
          >

            Create Account

          </h1>

          <p
            style={{
              color: "#94a3b8",
            }}
          >

            Join TrackShield AI

          </p>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
        >

          {/* NAME */}
          <div
            style={{
              marginBottom: "20px",
            }}
          >

            <div
              style={{
                position: "relative",
              }}
            >

              <FaUser
                style={{

                  position: "absolute",

                  left: "18px",

                  top: "20px",

                  color: "#64748b",
                }}
              />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{

                  width: "100%",

                  boxSizing:
                    "border-box",

                  padding:
                    "18px 18px 18px 55px",

                  background:
                    "#111827",

                  border:
                    "1px solid #1e293b",

                  borderRadius:
                    "18px",

                  color: "white",

                  outline: "none",

                  fontSize: "16px",
                }}
              />

            </div>

          </div>

          {/* EMAIL */}
          <div
            style={{
              marginBottom: "20px",
            }}
          >

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
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                style={{

                  width: "100%",

                  boxSizing:
                    "border-box",

                  padding:
                    "18px 18px 18px 55px",

                  background:
                    "#111827",

                  border:
                    "1px solid #1e293b",

                  borderRadius:
                    "18px",

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
              marginBottom: "30px",
            }}
          >

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
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{

                  width: "100%",

                  boxSizing:
                    "border-box",

                  padding:
                    "18px 18px 18px 55px",

                  background:
                    "#111827",

                  border:
                    "1px solid #1e293b",

                  borderRadius:
                    "18px",

                  color: "white",

                  outline: "none",

                  fontSize: "16px",
                }}
              />

            </div>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            style={{

              width: "100%",

              boxSizing:
                "border-box",

              padding: "18px",

              background:
                "linear-gradient(to right, #2563eb, #06b6d4)",

              border: "none",

              borderRadius:
                "18px",

              color: "white",

              cursor: "pointer",

              fontSize: "18px",

              fontWeight: "bold",

              marginBottom: "25px",
            }}
          >

            {

              loading
                ? "Creating..."
                : "Create Account"
            }

          </button>

        </form>

        {/* SOCIAL */}
        <div
          style={{

            display: "grid",

            gridTemplateColumns:
              "1fr 1fr",

            gap: "15px",

            marginBottom: "25px",
          }}
        >

          <button
            style={{

              padding: "16px",

              background: "#111827",

              border:
                "1px solid #1e293b",

              borderRadius: "16px",

              color: "white",

              cursor: "pointer",

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              gap: "10px",
            }}
          >

            <FaGoogle />

            Google

          </button>

          <button
            style={{

              padding: "16px",

              background: "#111827",

              border:
                "1px solid #1e293b",

              borderRadius: "16px",

              color: "white",

              cursor: "pointer",

              display: "flex",

              justifyContent:
                "center",

              alignItems:
                "center",

              gap: "10px",
            }}
          >

            <FaGithub />

            GitHub

          </button>

        </div>

        {/* LOGIN */}
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

            Already have an account?

          </span>

          <Link
            to="/"
            style={{

              marginLeft: "8px",

              color: "#38bdf8",

              textDecoration:
                "none",

              fontWeight: "bold",
            }}
          >

            Login

          </Link>

        </div>

      </div>

    </div>
  );
};

export default Signup;