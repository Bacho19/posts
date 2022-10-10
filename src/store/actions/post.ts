import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api";

type postArgs = {
  postId: string | undefined;
};

export const fetchPost = createAsyncThunk(
  "postLikes/fetchPost",
  async ({ postId }: postArgs, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`posts/${postId}`);
      return res.data;
    } catch (e) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const likePost = createAsyncThunk(
  "postLikes/likePost",
  async ({ postId }: postArgs, { rejectWithValue }) => {
    try {
      await axiosInstance.post(`/likes/like/${postId}`);
      return;
    } catch (e) {
      return rejectWithValue("something went wrong");
    }
  }
);

export const dislikePost = createAsyncThunk(
  "postLikes/dislikePost",
  async ({ postId }: postArgs, { rejectWithValue }) => {
    try {
      await axiosInstance.post(`/likes/dislike/${postId}`);
      return;
    } catch (e) {
      return rejectWithValue("something went wrong");
    }
  }
);
