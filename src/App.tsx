import { useState, useMemo, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { IUser, ILogin, AppContext } from "./AppContext";
import PageLoading from "./components/ui/loader/pageLoading";
import Router from "./router";
import "./App.css";

// access token
import getAccessToken from "./utils/accessToken";

// api service
import Authentication from "./utils/apiServices/authentication";

function App() {
  const [profileLoading, setProfileLoading] = useState(true);
  const initialUser: IUser = {
    id: "",
    email: "",
    name: "",
    loggedIn: false,
  };
  const [user, setUser] = useState<IUser>(initialUser);

  // context actions
  const login = ({ id, email, name, accessToken }: ILogin) => {
    sessionStorage.setItem("accessToken", accessToken);
    setUser({ id, email, name, loggedIn: true });
  };

  const logout = () => {
    sessionStorage.clear();
    setUser(initialUser);
  };

  const providerValue = useMemo(() => {
    return { user, login, logout };

    // eslint-disable-next-line
  }, [user]);

  // get profile
  useEffect(() => {
    if (getAccessToken() && !user.loggedIn) {
      Authentication.getProfile()
        .then((res) => {
          if (res.status) {
            const { data } = res;

            login({
              id: data.id,
              email: data.email,
              name: data.name,
              accessToken: getAccessToken(),
            });

            setProfileLoading(false);
          } else {
            localStorage.removeItem("accessToken");
            sessionStorage.removeItem("accessToken");
            setProfileLoading(false);
          }
        })
        .catch(() => {
          setProfileLoading(false);
        });
    } else {
      setProfileLoading(false);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <div className="App-content">
        <Toaster />
        <AppContext.Provider value={providerValue}>
          {profileLoading ? <PageLoading /> : <Router />}
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
