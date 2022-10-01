import MDEditor from "@uiw/react-md-editor";
import { FC, useEffect, useState } from "react";
import { axiosInstance } from "../../api";
import { IPost } from "../../store/slices/posts";
import { getFormattedDate } from "../../utils";
import {
  PostAuthorBlock,
  PostAuthorDate,
  PostAuthorHeader,
  PostAuthorImg,
  PostHeader,
  PostInnerBlock,
  PostInnerBlockBtn,
  PostTitle,
} from "./styled";

interface PostInnerProps {
  postId: string | undefined;
}

const PostInner: FC<PostInnerProps> = ({ postId }) => {
  const [post, setPost] = useState<IPost>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchPost = async () => {
    try {
      const res = await axiosInstance.get(`posts/${postId}`);
      setPost(res.data);
    } catch (e) {
      console.error(e);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p className="noItems --error --noMargins">Something went wrong</p>;
  }

  return (
    <div>
      <PostHeader>
        <PostTitle>{post?.title}</PostTitle>
        <PostAuthorBlock>
          <PostAuthorHeader>
            <PostAuthorImg src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" />
            <p>
              {post?.user?.firstName} {post?.user?.lastName}
            </p>
          </PostAuthorHeader>
          <PostAuthorDate>
            created - {post && getFormattedDate(post.createdAt)}
          </PostAuthorDate>
          {post?.createdAt === post?.updatedAt ? null : (
            <PostAuthorDate>
              updated - {post && getFormattedDate(post.updatedAt)}
            </PostAuthorDate>
          )}
        </PostAuthorBlock>
      </PostHeader>
      <MDEditor.Markdown
        source={post?.body}
        style={{ whiteSpace: "pre-wrap" }}
      />
      <PostInnerBlock>
        <PostInnerBlockBtn>0 Likes</PostInnerBlockBtn>
        <PostInnerBlockBtn>0 Comments</PostInnerBlockBtn>
      </PostInnerBlock>
    </div>
  );
};

export default PostInner;
