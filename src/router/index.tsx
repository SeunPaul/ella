// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// pages
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Analyse from "../pages/analyse";
import NotFound from "../pages/notFound";

// redirect page
import Redirect from "./Redirect";

// scroll
import ScrollToTop from "../components/utils/ScrollToTop";

// type UserType = {
//   email: string;
//   name: string;
//   loggedIn: boolean;
// }

function Router() {
  // const [user, setUser] = usueState({})
  const loggedIn = sessionStorage.getItem("loggedIn");

  const routes = [
    {
      path: "/",
      component: Login,
      meta: {
        protectedRoute: false,
      },
    },
    {
      path: "/dashboard",
      component: Dashboard,
      meta: {
        protectedRoute: true,
      },
    },
    {
      path: "/dashboard/analyse",
      component: Analyse,
      meta: {
        protectedRoute: true,
      },
    },
    {
      path: "*",
      component: NotFound,
      meta: {
        protectedRoute: false,
      },
    },
  ];

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster />
      <Routes>
        {routes.map((route) => {
          if (route.meta.protectedRoute && loggedIn) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            );
          }

          if (route.meta.protectedRoute && !loggedIn) {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Redirect redirectUrl="/" />}
              />
            );
          }

          return (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
