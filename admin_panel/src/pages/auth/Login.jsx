import {

  useState,

} from "react";

import {

  useNavigate,

} from "react-router-dom";

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

    <div className="min-h-screen bg-black flex items-center justify-center px-5">

      <div className="bg-zinc-900 w-full max-w-md p-8 rounded-2xl shadow-2xl">

        <h1 className="text-4xl font-bold text-white mb-2">

          TrackShield AI

        </h1>

        <p className="text-zinc-400 mb-8">

          Admin Panel Login

        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="text-white block mb-2">

              Email

            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-zinc-800 text-white outline-none"
              required
            />

          </div>

          <div>

            <label className="text-white block mb-2">

              Password

            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 rounded-xl bg-zinc-800 text-white outline-none"
              required
            />

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-500 hover:bg-green-600 transition-all text-black font-bold py-3 rounded-xl"
          >

            {

              loading
                ? "Logging In..."
                : "Login"
            }

          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;