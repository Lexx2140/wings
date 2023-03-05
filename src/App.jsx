import React, { useEffect, useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { getSiteData } from "./api/queries/index";
import getPageRoutes from "./utils/getPageRoutes";

import "./App.scss";
import "webp-in-css/polyfill";

import Layout from "./layout/Layout";
import Preloader from "./components/preloader/Preloader";
import NotFound from "./components/not-found/NotFound";

import Profile from "./pages/profile/Profile";

export default function App(props) {
  const [siteData, setSiteData] = useState(null);
  const [routes, setRoutes] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getSiteData();
      const routes = getPageRoutes(data.pages.edges);
      setRoutes(routes);
      setSiteData(data);
    }

    fetchData();
  }, []);

  return (
    siteData && (
      <Routes>
        <Route
          path="/"
          element={
            <Layout {...props} popups={props.popups} siteData={siteData} />
          }
        >
          {routes.map(({ path, component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Suspense fallback={<Preloader />}>
                  {React.createElement(component, props)}
                </Suspense>
              }
            />
          ))}
          <Route path="profile/*" element={<Profile {...props} />} />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<Preloader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    )
  );
}
