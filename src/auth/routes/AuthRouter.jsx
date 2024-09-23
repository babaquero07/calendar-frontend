import { Navigate, Outlet } from "react-router-dom";

const status = "authenticated";
export const AuthRouter = () => {
  // const {status} = useSelector(state => state.auth)

  if (status === "authenticated") return <Navigate to="/" />;

  return <Outlet />;
};
