import MDEditor from "@uiw/react-md-editor";
import { FC, useEffect, useState } from "react";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import { axiosInstance } from "../../api";
import { useAppSelector } from "../../store";
import { IPost } from "../../store/slices/posts";
import { getFormattedDate } from "../../utils";
import CommentsModal from "../CommentsModal";
import {
  PostAuthorBlock,
  PostAuthorDate,
  PostAuthorHeader,
  PostAuthorImg,
  PostHeader,
  PostInnerBlock,
  PostInnerBlockBtn,
  PostInnerBlockIcon,
  PostTitle,
} from "./styled";

interface PostInnerProps {
  postId: string | undefined;
}

const PostInner: FC<PostInnerProps> = ({ postId }) => {
  const [post, setPost] = useState<IPost>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [isCommentsModalOpen, setIsCommentsModalOpen] =
    useState<boolean>(false);

  const { commentsCount } = useAppSelector((state) => state.comments);

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

  const handleModal = () => setIsCommentsModalOpen((prev) => !prev);

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
            <PostAuthorImg src={post?.user?.avatarUrl ?? ""} />
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
        <PostInnerBlockBtn direction="left">
          <PostInnerBlockIcon>
            <AiOutlineLike />
          </PostInnerBlockIcon>
          0 Likes
        </PostInnerBlockBtn>
        <PostInnerBlockBtn direction="right" onClick={handleModal}>
          <PostInnerBlockIcon>
            <AiOutlineComment />
          </PostInnerBlockIcon>
          {commentsCount} Comments
        </PostInnerBlockBtn>
      </PostInnerBlock>
      <CommentsModal
        isOpen={isCommentsModalOpen}
        handleModal={handleModal}
        postId={postId}
      />
    </div>
  );
};

export default PostInner;
