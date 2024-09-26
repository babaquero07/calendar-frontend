import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../hooks";
import { useEffect } from "react";

export const CalendarRouter = () => {
  const { checkAuthToken, status } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "not-authenticated") return <Navigate to="/auth/login" />;

  return <Outlet />;
};
