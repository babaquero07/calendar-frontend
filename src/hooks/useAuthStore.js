import { useDispatch, useSelector } from "react-redux";
import { onChecking } from "../store";

import calendarApi from "../api/calendarApi";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());

    try {
      const response = await calendarApi.post("/auth", {
        email,
        password,
      });
      console.log("🚀 ~ startLogin ~ response:", response);
      // dispatch(onLogin(response.data));
    } catch (error) {
      console.error(error);
      // dispatch(onError(error.message));
    }
  };

  return {
    //* Properties

    //* Methods
    startLogin,
  };
};
