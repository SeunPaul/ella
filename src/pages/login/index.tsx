import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { AppContext } from "../../AppContext";
import PageLeft from "./components/PageLeft";
import PageRight from "./components/PageRight";
import "./login.css";
import notify from "../../utils/notify";

function Login() {
  const [formLoading, setFormLoading] = useState(false);
  const appData = useContext(AppContext);
  const navigate = useNavigate();

  const onLogin: SubmitHandler<FieldValues> = () => {
    if (appData) {
      const { updateUser, user } = appData;
      setFormLoading(true);
      updateUser({ ...user, loggedIn: true });
      sessionStorage.setItem("access_token", "true");

      navigate("/dashboard");
    } else {
      notify("error", "State Error. Cannot login");
    }
  };

  return (
    <div className="public-page-wrapper">
      <div className="Login onboarding-page">
        <PageLeft onLogin={onLogin} formLoading={formLoading} />
        <PageRight />
      </div>
    </div>
  );
}

export default Login;
