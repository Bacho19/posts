import { FC } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import PostsList from "../components/PostsList";

const HomePageWrapper = styled.div`
  padding: 0 150px 100px;
`;

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  return (
    <div>
      <Navbar />
      <HomePageWrapper>
        <PostsList />
      </HomePageWrapper>
    </div>
  );
};

export default HomePage;
