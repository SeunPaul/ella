import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import logo from "../../../assets/icons/logo.svg";
import notify from "../../../utils/notify";

function Navigation() {
  const navigate = useNavigate();
  const appData = useContext(AppContext);
  const onLogout = () => {
    if (appData) {
      const { updateUser, user } = appData;
      updateUser({ ...user, loggedIn: true });
      sessionStorage.setItem("access_token", "true");

      navigate("/");
    } else {
      notify("error", "State Error. Cannot login");
    }
  };

  const goHome = () => {
    navigate("/dashboard");
  };

  const runAnalysis = () => {
    navigate("/dashboard/analyse");
  };

  return (
    <div className="navigation">
      <div className="logo" onClick={() => goHome()}>
        <img src={logo} alt="" />
      </div>
      <div className="run-analysis">
        <button type="button" onClick={() => runAnalysis()}>
          Run Test Analysis
        </button>
        <button type="button" onClick={() => onLogout()}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navigation;
