import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import logo from "../../../assets/icons/logo.svg";
import notify from "../../../utils/notify";
import "../dashboard.css";

function Navigation({ page }: { page: string }) {
  const navigate = useNavigate();
  const appData = useContext(AppContext);
  const onLogout = () => {
    if (appData) {
      const { logout } = appData;
      logout();
    } else {
      notify("error", "State Error. Cannot logout");
    }
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const runAnalysis = () => {
    navigate("/dashboard/analyse");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="navigation">
      <div className="logo" onClick={() => goToDashboard()}>
        <img src={logo} alt="" />
        <h3>DigiHealth</h3>
      </div>
      {page === "home" ? (
        <div className="run-analysis">
          <div />
          <button type="button" onClick={() => goToLogin()}>
            Get Started
          </button>
        </div>
      ) : (
        <div className="run-analysis">
          <button type="button" onClick={() => runAnalysis()}>
            Run Test Analysis
          </button>
          <button type="button" onClick={() => onLogout()}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default Navigation;
