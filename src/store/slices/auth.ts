import { createSlice } from "@reduxjs/toolkit";
import { getMeAction, loginAction, registerAction } from "../actions/auth";

interface IUser {
  fullName: string;
  email: string;
}

export interface IValidatorErrors {
  value: string;
  msg: string;
  param: string;
  location: string;
}

interface AuthState {
  user: IUser;
  isAuth: boolean;
  isLoading: boolean;
  errors: IValidatorErrors[] | null;
  isRegistered: boolean;
}

const initialState: AuthState = {
  user: {} as IUser,
  isAuth: false,
  isLoading: false,
  errors: null,
  isRegistered: false,
};

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    resetIsRegistered: (state) => {
      state.isRegistered = false;
    },
    clearErrors: (state) => {
      state.errors = null;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.isAuth = false;
    },
  },
  extraReducers: {
    [registerAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [registerAction.fulfilled.type]: (state) => {
      state.isLoading = false;
      state.isRegistered = true;
    },
    [registerAction.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload.response.data.errors;
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
    [loginAction.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.errors = payload.response.data.errors;
    },
    [getMeAction.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getMeAction.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.isAuth = true;
      state.user = payload;
    },
    [getMeAction.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

export default authSlice.reducer;
export const { resetIsRegistered, clearErrors, logout } = authSlice.actions;
