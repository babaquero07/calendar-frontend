import { CalendarPage } from "../pages/CalendarPage";
import { Navigate } from "react-router-dom";

export const CalendarRoutes = [
  {
    index: true,
    element: <CalendarPage />,
  },
  {
    path: "/*",
    element: <Navigate to="/" />,
  },
];
