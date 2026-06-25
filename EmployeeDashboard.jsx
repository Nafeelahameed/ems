import Navbar from "./Navbar";
import "./EmployeeDashboard.css";
import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        <div className="welcome-section">
          <h1>Welcome Employee 👋</h1>
          <p>Manage your profile and daily activities.</p>
        </div>

        <div className="card-container">

          <div className="card">
            <h2>Attendance</h2>
            <p>Check your attendance records.</p>
            <button onClick={() => navigate("/attendance")}>
              View
            </button>
          </div>

          <div className="card">
            <h2>Leave Request</h2>
            <p>Apply for leave and track status.</p>
            <button onClick={() => navigate("/leave-request")}>
              Apply
            </button>
          </div>

          <div className="card">
            <h2>Salary</h2>
            <p>View your salary details and payslips.</p>
            <button onClick={() => navigate("/salary")}>
              View
            </button>
          </div>

          <div className="card">
            <h2>Notifications</h2>
            <p>Latest announcements and updates.</p>
            <button onClick={() => navigate("/notifications")}>
              Open
            </button>
          </div>

          <div className="card">
            <h2>Task</h2>
            <p>Daily tasks will be updated.</p>
            <button onClick={() => navigate("/task")}>
              Update
            </button>
          </div>

          <div className="card">
            <h2>Production</h2>
            <p>Track daily production output and status.</p>
            <button onClick={() => navigate("/production")}>
              View
            </button>
          </div>

          <div className="card">
            <h2>Achievements</h2>
            <p>View your performance achievements and records.</p>
            <button onClick={() => navigate("/achievements")}>
              View
            </button>
          </div>

          <div className="card">
            <h2>Report</h2>
            <p>Generate and view work reports.</p>
            <button onClick={() => navigate("/report")}>
              View
            </button>
          </div>

          <div className="card">
            <h2>Shift</h2>
            <p>Check your shift timing and schedule.</p>
            <button onClick={() => navigate("/shift")}>
              View
            </button>
          </div>

          <div className="card">
            <h2>Assigned Machine</h2>
            <p>View your assigned machine details.</p>
            <button onClick={() => navigate("/assigned-machine")}>
              View
            </button>
          </div>

        </div>

      </div>
    </>
  );
}

export default EmployeeDashboard;