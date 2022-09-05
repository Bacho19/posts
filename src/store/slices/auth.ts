import { createSlice } from "@reduxjs/toolkit";
import { getMeAction, loginAction, registerAction } from "../actions/auth";

interface IUser {
  fullName: string;
  email: string;
}

interface IAuthState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {},
  extraReducers: {
    [registerAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registerAction.fulfilled.type]: (state) => {
      state.isLoading = false;
    },
    [registerAction.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.response.data.message;
    },
    [loginAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [loginAction.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.user = {
        email: payload.email,
        fullName: payload.fullName,
      };
      localStorage.setItem("token", payload.token);
      state.isAuth = true;
    },
    [loginAction.rejected.type]: (state) => {
      state.isLoading = false;
    },
    [getMeAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getMeAction.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = payload;
    },
    [getMeAction.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    },
  },
});

export default authSlice.reducer;
