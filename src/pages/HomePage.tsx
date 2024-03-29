import { FC, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import PostsList from "../components/PostsList";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchPostsAction } from "../store/actions/posts";

const HomePageWrapper = styled.div`
  padding: 0 150px 100px;
`;

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const { posts, loading, error } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <HomePageWrapper>
        <PostsList
          isMyPosts={false}
          posts={posts}
          loading={loading}
          error={error}
        />
      </HomePageWrapper>
    </div>
  );
};

export default HomePage;
