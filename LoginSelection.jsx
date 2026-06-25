import { useNavigate } from "react-router-dom";
import "./LoginSelection.css";
import { Link } from "react-router-dom";

function LoginSelection() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-box">
        <h1>Employee Management </h1>
        <h1>System</h1>
        <p>Select your login type</p>

        <button
          className="employee-btn"
          onClick={() => navigate("/employee-login")}
        >
          Employee Login
        </button>

        <button
          className="management-btn"
          onClick={() => navigate("/management-login")}
        >
          Management Login
       </button>

      </div>
    </div>
  );
}

export default LoginSelection;