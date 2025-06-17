import React, { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState(""); // username or email
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Persist login after refresh
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!login || !password) {
      toast.error("Both fields are required");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:4000/api/v1/u/login", {
        login,
        password,
      });

      toast.success(data.message || "Login successful");
      localStorage.setItem("token", data.token); // Save JWT
      setIsLoggedIn(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  if (isLoggedIn) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-semibold text-green-700">You are logged in!</h2>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit} className="p-8 bg-white rounded shadow-md w-[90%] max-w-md">
        <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>

        <input
          type="text"
          placeholder="Username or Email"
          className="w-full px-4 py-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-6 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Login
        </button>
        <Link to="/register">Regsiter</Link>
      </form>
    </div>
  );
};

export default Login;
