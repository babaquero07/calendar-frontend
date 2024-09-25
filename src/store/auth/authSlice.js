import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "not-authenticaded", // 'checking' | 'authenticated' | 'not-authenticated'
  user: {},
  errorMessage: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = null;
    },
    onLogin: (state, { payload }) => {
      state.status = "authenticated";
      state.user = payload;
      state.errorMessage = null;
    },
  },
});

export const { onChecking, onLogin } = authSlice.actions;
