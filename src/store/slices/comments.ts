import { createSlice } from "@reduxjs/toolkit";
import { createComment, fetchComments } from "../actions/comments";

export interface IComment {
  text: string;
  user: {
    avatarUrl: null | string;
    email: string;
    firstName: string;
    lastName: string;
  };
  commentId: number;
  createdAt: string;
  updatedAt: string;
}

interface ICommentsState {
  comments: IComment[];
  commentsCount: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: ICommentsState = {
  comments: [],
  isLoading: false,
  commentsCount: 0,
  error: null,
};

const commentsSlice = createSlice({
  name: "postsComments",
  initialState,
  extraReducers: {
    [fetchComments.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchComments.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.comments = payload;
      state.commentsCount = payload.length;
    },
    [fetchComments.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [createComment.pending.type]: (state) => {
      state.isLoading = true;
    },
    [createComment.fulfilled.type]: (state, { payload }) => {
      state.isLoading = false;
      state.comments.unshift(payload);
      state.commentsCount++;
    },
    [createComment.rejected.type]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
  reducers: {},
});

export default commentsSlice.reducer;
