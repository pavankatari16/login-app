import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = "http://localhost:5001";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Auto-fill username from localStorage
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    // Trim whitespace so users can't accidentally send leading/trailing spaces.
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    if (!trimmedUsername || !trimmedPassword) {
      setError("Please enter both username and password.");
      setLoading(false);
      return;
    }

    try {
      // Debug: ensure we're sending the expected payload.
      console.log("Login payload:", { username: trimmedUsername, password: trimmedPassword });

      const response = await axios.post(`${API}/login`, {
        username: trimmedUsername,
        password: trimmedPassword,
      });

      if (response.status === 200) {
        // Prefer the username from the response, but fall back to what the user typed.
        const user = response?.data?.username ?? username;

        if (user) {
          // Save username for future login
          localStorage.setItem("username", user);
        }

        // Navigate to welcome page
        navigate("/welcome");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        setError("Invalid credentials");
      } else {
        setError("Server error. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto", textAlign: "center" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;