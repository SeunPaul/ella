import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { AppContext } from "../../AppContext";
import PageLeft from "./components/PageLeft";
import PageRight from "./components/PageRight";
import notify from "../../utils/notify";
import "./login.css";

// api service
import Authentication from "../../utils/apiServices/authentication";

function Login() {
  const [formLoading, setFormLoading] = useState(false);
  const appData = useContext(AppContext);
  const navigate = useNavigate();

  const onLogin: SubmitHandler<FieldValues> = (formData) => {
    if (appData) {
      const { login } = appData;
      setFormLoading(true);

      Authentication.login({
        email: formData.email,
        password: formData.password,
      })
        .then((res) => {
          if (res.success) {
            const { data } = res;

            login({
              id: data.id,
              email: data.email,
              name: data.name,
              accessToken: data.token,
            });

            setFormLoading(false);
            notify("success", "welcome");
          } else {
            setFormLoading(false);
            notify("error", res.message);
          }
        })
        .catch(() => {
          setFormLoading(false);
          notify("error", "An error occured. Check your connection");
        });
    } else {
      notify("error", "State Error. Cannot login");
    }
  };

  useEffect(() => {
    if (appData?.user.loggedIn) {
      navigate("/dashboard");
    }
  }, [appData?.user.loggedIn, navigate]);

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
