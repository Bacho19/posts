import { createSlice } from "@reduxjs/toolkit";
import { fetchPostsAction } from "../actions/posts";

export interface IPost {
  postId: number;
  body: string;
  createdAt: string;
  imageUrl: null | string;
  title: string;
  updatedAt: string;
}

interface PostsInitialState {
  posts: IPost[];
  loading: boolean;
  error: null | string;
}

const initialState: PostsInitialState = {
  posts: [],
  loading: false,
  error: null,
};

const postsSlice = createSlice({
  initialState,
  name: "posts",
  reducers: {},
  extraReducers: {
    [fetchPostsAction.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchPostsAction.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [fetchPostsAction.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default postsSlice.reducer;
