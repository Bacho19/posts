import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api";

type fetchCommentArguments = {
  postId: string | undefined;
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async ({ postId }: fetchCommentArguments, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.get(`/comments/${postId}`);
      return res.data;
    } catch (e) {
      return rejectWithValue("Error during fetching comments");
    }
  }
);

type createCommentArguments = {
  postId: string | undefined;
  text: string;
};

export const createComment = createAsyncThunk(
  "comments/createComment",
  async ({ postId, text }: createCommentArguments, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post(`/comments/${postId}`, { text });
      return res.data;
    } catch (e) {
      return rejectWithValue("Error during creating comments");
    }
  }
);
