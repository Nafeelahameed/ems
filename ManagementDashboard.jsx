import { useNavigate } from "react-router-dom";
import "./ManagementDashboard.css";

function ManagementDashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">

      <h1 className="dashboard-title">
        Management Dashboard
      </h1>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <div className="icon">➕</div>
          <h2>Add Employee</h2>
          <button onClick={() => navigate("/add-employee")}>
            Open
          </button>
        </div>

        <div className="dashboard-card">
          <div className="icon">👨‍💼</div>
          <h2>View Employees</h2>
          <button onClick={() => navigate("/view-employees")}>
            Open
          </button>
        </div>

        <div className="dashboard-card">
          <div className="icon">✏️</div>
          <h2>Update Employee</h2>
          <button onClick={() => navigate("/update-employee")}>
            Open
          </button>
        </div>

        <div className="dashboard-card">
          <div className="icon">📅</div>
          <h2>Attendance</h2>
          <button onClick={() => navigate("/attendance")}>
            Open
          </button>
        </div>

        <div className="dashboard-card">
          <div className="icon">🏖️</div>
          <h2>Leave</h2>
          <button onClick={() => navigate("/leave")}>
            Open
          </button>
        </div>

        <div className="dashboard-card">
          <div className="icon">💰</div>
          <h2>Salary</h2>
          <button onClick={() => navigate("/salary")}>
            Open
          </button>
        </div>

        <div className="dashboard-card">
          <div className="icon">📊</div>
          <h2>Reports</h2>
          <button onClick={() => navigate("/reports")}>
            Open
          </button>
        </div>

      </div>

      <button
        className="logout-btn"
        onClick={() => navigate("/")}
      >
        Logout
      </button>

    </div>
  );
}

export default ManagementDashboard;