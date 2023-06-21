import { useAuth } from "../modules/auth/";
import { PrivateRoutes } from "./private";
import { PublicRoutes } from "./public";

export const AppRoutes = () => {
  const { user } = useAuth();
  return user ? <PrivateRoutes /> : <PublicRoutes />;
};
