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

export const fetchMyPostsAction = createAsyncThunk(
  "posts/fetchMyPosts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/posts/my-posts");
      return response.data;
    } catch (e) {
      return rejectWithValue("Error during fetching posts");
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async ({ postId }: { postId: number }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`/posts/${postId}`);
      return { ...response.data, postId };
    } catch (e) {
      return rejectWithValue("Error during deleting posts");
    }
  }
);
