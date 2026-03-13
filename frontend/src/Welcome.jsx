import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");

    // Ignore invalid values that can come from bad storage state.
    if (!storedUsername || storedUsername === "undefined" || storedUsername === "null") {
      localStorage.removeItem("username");
      navigate("/");
      return;
    }

    setUsername(storedUsername);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Welcome, {username}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Welcome;