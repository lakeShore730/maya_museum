import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import allRoutes from "./routes";
import AppLayout from "../layout/app-layout";
import PrivateRoute from "./private-route";
import ScrollToTop from "./routes/scroll-to-top";

const MergeLayoutRoute = (props) => {
  const { children, route } = props;

  const AppLayoutWrapper = route.meta.appLayout ? AppLayout : Fragment;
  const PrivateRouteWrapper = route.meta.privateRoute ? PrivateRoute : Fragment;

  return (
    <AppLayoutWrapper>
      <PrivateRouteWrapper>{children}</PrivateRouteWrapper>
    </AppLayoutWrapper>
  );
};

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {allRoutes.map((route) => {
          return (
            <Route
              key={route.id}
              path={route.path}
              exact={route.exact}
              element={
                <MergeLayoutRoute route={route}>
                  <route.component />
                </MergeLayoutRoute>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
