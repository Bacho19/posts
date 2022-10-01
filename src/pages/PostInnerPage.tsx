import { FC } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import PostInner from "../components/PostInner";

const PostPageWrapper = styled.div`
  padding: 50px 150px;
`;

interface PostInnerPageProps {}

const PostInnerPage: FC<PostInnerPageProps> = () => {
  const { id: postId } = useParams();

  return (
    <>
      <Navbar />
      <PostPageWrapper>
        <PostInner postId={postId} />
      </PostPageWrapper>
    </>
  );
};

export default PostInnerPage;
