import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";
import PageLeft from "./components/PageLeft";
import PageRight from "./components/PageRight";
import "./login.css";

function Login() {
  const [formLoading, setFormLoading] = useState(false);
  const navigate = useNavigate();

  const onLogin: SubmitHandler<FieldValues> = () => {
    setFormLoading(true);
    sessionStorage.setItem("loggedIn", "true");

    navigate("/dashboard");
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
