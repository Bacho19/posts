import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api";

export const fetchPostsAction = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/posts");
      return response.data;
    } catch (e) {
      return rejectWithValue("Error during fetching posts");
    }
  }
);
