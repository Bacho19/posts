import { createSlice } from "@reduxjs/toolkit";
import { dislikePost, fetchPost, likePost } from "../actions/post";
import { IPost } from "./posts";

interface ILikesState {
  isLiked: boolean;
  likesCount: number;
  isLikeLoading: boolean;
  isPostLoading: boolean;
  post: IPost;
  postError: string | null;
}

const initialState: ILikesState = {
  likesCount: 0,
  isLikeLoading: false,
  isPostLoading: false,
  isLiked: false,
  post: {} as IPost,
  postError: null,
};

const likesSlice = createSlice({
  name: "postsLikes",
  initialState,
  reducers: {},
  extraReducers: {
    [likePost.pending.type]: (state) => {
      state.isLikeLoading = true;
    },
    [likePost.fulfilled.type]: (state) => {
      state.isLikeLoading = false;
      state.likesCount++;
      state.isLiked = true;
    },
    [likePost.rejected.type]: (state) => {
      state.isLikeLoading = false;
    },
    [dislikePost.pending.type]: (state) => {
      state.isLikeLoading = true;
    },
    [dislikePost.fulfilled.type]: (state) => {
      state.isLikeLoading = false;
      state.likesCount--;
      state.isLiked = false;
    },
    [dislikePost.rejected.type]: (state) => {
      state.isLikeLoading = false;
    },
    [fetchPost.pending.type]: (state) => {
      state.isPostLoading = true;
    },
    [fetchPost.fulfilled.type]: (state, { payload }) => {
      state.isPostLoading = false;
      state.post = payload;
      state.likesCount = payload.likesCount;
      state.isLiked = payload.isLiked;
    },
    [fetchPost.rejected.type]: (state, { payload }) => {
      state.isPostLoading = false;
      state.postError = payload;
    },
  },
});

export default likesSlice.reducer;
