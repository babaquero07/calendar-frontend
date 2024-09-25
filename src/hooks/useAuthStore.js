import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage, onChecking, onError, onLogin } from "../store";

import calendarApi from "../api/calendarApi";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post("/auth", {
        email,
        password,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());

      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      const { data } = error.response;
      if (data) {
        dispatch(onError(data.message));

        setTimeout(() => {
          dispatch(clearErrorMessage());
        }, 2500);

        return;
      }

      dispatch(onError(error.message));

      // Clear error message after 1 second
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 2500);
    }
  };

  return {
    //* Properties
    errorMessage,

    //* Methods
    startLogin,
  };
};
