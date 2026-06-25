import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ManagementLogin.css";

function ManagementLogin() {
  const navigate = useNavigate();

  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (adminId === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

    // Demo Login Credentials
    if (adminId === "admin" && password === "admin123") {
      alert("Management Login Successful");
      navigate("/management-dashboard");
    } else {
      alert("Invalid Admin ID or Password");
    }
  };

  return (
    <div className="management-container">
      <div className="management-box">
        <h2>Management Login</h2>

        <form onSubmit={handleLogin}>

          <label>Admin ID</label>
          <input
            type="text"
            placeholder="Enter Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="forgot">
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">
            Login
          </button>

        </form>
      </div>
    </div>
  );
}

export default ManagementLogin;