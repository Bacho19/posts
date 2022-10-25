import { createSlice } from "@reduxjs/toolkit";
import {
  deletePost,
  fetchMyPostsAction,
  fetchPostsAction,
} from "../actions/posts";

export interface IPost {
  postId: number;
  body: string;
  createdAt: string;
  imageUrl: null | string;
  title: string;
  updatedAt: string;
  user?: {
    avatarUrl: null | string;
    email: string;
    firstName: string;
    lastName: string;
  };
  isLiked: boolean;
  likesCount: number;
}

interface PostsInitialState {
  posts: IPost[];
  loading: boolean;
  error: null | string;
  isPostDeleting: boolean;
}

const initialState: PostsInitialState = {
  posts: [],
  loading: false,
  error: null,
  isPostDeleting: false,
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
    [fetchMyPostsAction.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchMyPostsAction.fulfilled.type]: (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    },
    [fetchMyPostsAction.rejected.type]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [deletePost.pending.type]: (state) => {
      state.isPostDeleting = true;
    },
    [deletePost.fulfilled.type]: (state, { payload }) => {
      state.isPostDeleting = false;
      state.posts = state.posts.filter(
        (post) => post.postId !== payload.postId
      );
    },
    [deletePost.rejected.type]: (state) => {
      state.isPostDeleting = false;
    },
  },
});

export default postsSlice.reducer;
