import { Fragment, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import allRoutes from "./routes";
import AppLayout from "../layout/app-layout";
import PrivateRoute from "./private-route";
import ScrollToTop from "./routes/scroll-to-top";
import buddhaImage from "../assets/images/buddha.png";

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
                <Suspense
                  fallback={
                    <div className="h-[calc(100vh-100px)] flex justify-center items-center">
                      <img
                        src={buddhaImage}
                        alt="buddha statue"
                        className="w-[100px]"
                      />
                    </div>
                  }
                >
                  <MergeLayoutRoute route={route}>
                    <route.component />
                  </MergeLayoutRoute>
                </Suspense>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
