import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginSelection from "./components/LoginSelection";
import EmployeeLogin from "./components/EmployeeLogin";
import ManagementLogin from "./components/ManagementLogin";
import EmployeeDashboard from "./components/EmployeeDashboard";
import ManagementDashboard from "./components/ManagementDashboard";
import LeaveRequest from "./pages/LeaveRequest";
import AddEmployee from "./pages/AddEmployee";
import ViewEmployees from "./pages/ViewEmployees";
import UpdateEmployee from "./pages/UpdateEmployee";
import Attendance from "./pages/Attendance";
import Leave from "./pages/Leave";
import Salary from "./pages/Salary";
import Reports from "./pages/Reports";
import AssignedMachine from "./pages/AssignedMachine";
import Shift from "./pages/Shift";
import Notifications from "./pages/Notifications";
import Task from "./pages/Task";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LoginSelection />} />

        <Route path="/employee-login" element={<EmployeeLogin />} />

        <Route path="/management-login" element={<ManagementLogin />} />

        <Route path="/employee-dashboard" element={<EmployeeDashboard />} />

        <Route path="/management-dashboard" element={<ManagementDashboard />} />

        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/view-employees" element={<ViewEmployees />} />
        <Route path="/update-employee" element={<UpdateEmployee />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/leave-request" element={<LeaveRequest />} />
        <Route path="/assigned-machine" element={<AssignedMachine />} />
        <Route path="/Shift" element={<Shift/>} />
        <Route path ="/Notifications" element ={<Notifications/>} />
        <Route path ="/Task " element ={<Task/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;