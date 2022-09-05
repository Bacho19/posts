import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api";

interface RegisterActionArgs {
  email: string;
  fullName: string;
  password: string;
}

interface AuthResponse {
  email: string;
  fullName: string;
  token: string;
}

interface LoginActionArgs {
  email: string;
  password: string;
}

export const registerAction = createAsyncThunk(
  "auth/register",
  async (
    { email, fullName, password }: RegisterActionArgs,
    { rejectWithValue }
  ) => {
    try {
      const res = await axiosInstance.post<AuthResponse>("/auth/register", {
        email,
        fullName,
        password,
      });

      return res.data;
    } catch (e) {
      return rejectWithValue(e);
      // console.error(e);
      // throw new Error("something went wrong during the registration");
    }
  }
);

export const loginAction = createAsyncThunk(
  "auth/login",
  async ({ email, password }: LoginActionArgs, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post<AuthResponse>("/auth/login", {
        email,
        password,
      });

      return res.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const getMeAction = createAsyncThunk(
  "auth/me",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get("/auth/me");

      return res.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
