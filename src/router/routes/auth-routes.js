import Login from "../../pages/auth/login";
import Register from "../../pages/auth/register";
import VerifyRegisterOtp from "../../pages/auth/verify-register-otp";
import ForgotPassword from "../../pages/auth/forgot-password";
import VerifyForgotPasswordOtp from "../../pages/auth/verify-forgot-password-otp";

const authRoutes = [
  {
    id: "login",
    path: "/login",
    exact: true,
    component: Login,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "register",
    path: "/register",
    exact: true,
    component: Register,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "verify-register-top",
    path: "/register/verify-otp",
    exact: true,
    component: VerifyRegisterOtp,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "forgot-password",
    path: "/forgot-password",
    exact: true,
    component: ForgotPassword,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },

  {
    id: "verify-forgot-password-top",
    path: "/forgot-password/verify-otp",
    exact: true,
    component: VerifyForgotPasswordOtp,
    meta: {
      appLayout: true,
      privateRoute: false,
    },
  },
];

export default authRoutes;
