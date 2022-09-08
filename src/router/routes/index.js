import appRoutes from "./app-routes";
import authRoutes from "./auth-routes";

const allRoutes = [...authRoutes, ...appRoutes];

export default allRoutes;
