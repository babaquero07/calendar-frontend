import { useEffect } from "react";
import { useAuthStore } from "../../hooks";
import { Navigate, Outlet } from "react-router-dom";

export const AuthRouter = () => {
  const { checkAuthToken, status } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "authenticated") return <Navigate to="/" />;

  return <Outlet />;
};
