import { useState, useMemo, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { IUser, AppContext } from "./AppContext";
import PageLoading from "./components/ui/loader/pageLoading";
import Router from "./router";
import "./App.css";

function App() {
  const [user, setUser] = useState<IUser>({
    loading: true,
    loggedIn: false,
  });

  const providerValue = useMemo(() => {
    const updateUser = (newUser: IUser) => {
      setUser(newUser);
    };
    return { user, updateUser };
  }, [user]);

  useEffect(() => {
    // update to fetch user profile before stopping loading
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken) {
      setUser({ ...user, loading: false, loggedIn: true });
    } else {
      setUser({ ...user, loading: false });
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <div className="App-content">
        <Toaster />
        <AppContext.Provider value={providerValue}>
          {user.loading ? <PageLoading /> : <Router />}
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
