import { FC } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

interface PostInnerPageProps {}

const PostInnerPage: FC<PostInnerPageProps> = () => {
  const { id: postId } = useParams();
  return (
    <>
      <Navbar />
      post inner <b>page id = {postId}</b>
    </>
  );
};

export default PostInnerPage;
