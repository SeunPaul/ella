import Navigation from "./components/Navigation";
import DashboardUser from "./components/DashboardUser";
import DashboardCards from "./components/DashboardCards";
import DashboardDiagnosisReport from "./components/DashboardDiagnosisReport";
import DashboardActivityLog from "./components/DashboardActivityLog";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div>
        <Navigation />
      </div>
      <div className="dashboard-section dashboard-section-1">
        <DashboardUser />
      </div>
      <div className="dashboard-section dashboard-section-2">
        <DashboardCards />
      </div>
      <div className="dashboard-section dashboard-section-3">
        <DashboardDiagnosisReport />
        <DashboardActivityLog />
      </div>
    </div>
  );
}

export default Dashboard;
