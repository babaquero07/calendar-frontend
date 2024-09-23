import { Outlet } from "react-router-dom";

export const CalendarRouter = () => {
  // const { status } = useSelector(state => state.auth)

  // if (status === 'not-authenticated') return <Navigate to="/auth/login" />

  return <Outlet />;
};
