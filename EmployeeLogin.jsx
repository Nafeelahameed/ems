import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmployeeLogin.css";

function EmployeeLogin() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (userId === "" || password === "") {
      alert("Please fill all fields");
      return;
    }

   
    if (userId ==="employee" && password === "emp123") {
      alert("Employee Login Successful");
      navigate("/employee-dashboard");
    } else {
      alert("Invalid User ID or Password");
    }
  };

  return (
    <div className="employee-container">
      <div className="employee-box">

        <h2>Employee Login</h2>

        <form onSubmit={handleLogin}>

          <label>User ID</label>

          <input
            type="text"
            placeholder="Enter User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
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

export default EmployeeLogin;