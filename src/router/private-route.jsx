import { Fragment } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { children, ...other } = props;
  const isLogin = false;

  if (isLogin === false) return <Navigate to="/login" replace />;
  return <Fragment {...other}>{children}</Fragment>;
};

export default PrivateRoute;
