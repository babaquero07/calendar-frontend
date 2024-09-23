import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { AuthRouter } from "../auth/routes/AuthRouter";
import { CalendarRouter } from "../calendar/routes/CalendarRouter";
import { CalendarRoutes } from "../calendar/routes/CalendarRoutes";

const router = createBrowserRouter([
  {
    path: "/auth/*",
    element: <AuthRouter />,
    children: AuthRoutes,
  },
  {
    path: "/",
    element: <CalendarRouter />,
    children: CalendarRoutes,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
