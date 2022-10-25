import { FC, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import PostsList from "../components/PostsList";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchMyPostsAction } from "../store/actions/posts";

const MyPostsPageWrapper = styled.div`
  padding: 0 150px 100px;
`;

interface MyPostsPageProps {}

const MyPostsPage: FC<MyPostsPageProps> = () => {
  const { posts, loading, error } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMyPostsAction());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <MyPostsPageWrapper>
        <PostsList isMyPosts posts={posts} loading={loading} error={error} />
      </MyPostsPageWrapper>
    </div>
  );
};

export default MyPostsPage;
