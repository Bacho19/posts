import MDEditor from "@uiw/react-md-editor";
import { FC, useEffect, useState } from "react";
import { AiOutlineLike, AiFillLike, AiOutlineComment } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../store";
import { dislikePost, fetchPost, likePost } from "../../store/actions/post";
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
  const [isCommentsModalOpen, setIsCommentsModalOpen] =
    useState<boolean>(false);

  const dispatch = useAppDispatch();

  const { post, isPostLoading, postError, likesCount, isLiked, isLikeLoading } =
    useAppSelector((state) => state.post);
  const { commentsCount } = useAppSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchPost({ postId }));
  }, [dispatch, postId]);

  const handleModal = () => setIsCommentsModalOpen((prev) => !prev);

  const handleLikePost = () => dispatch(likePost({ postId }));
  const handleDislikePost = () => dispatch(dislikePost({ postId }));

  if (isPostLoading) {
    return <p>Loading...</p>;
  }

  if (postError) {
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
        <PostInnerBlockBtn
          direction="left"
          onClick={isLiked ? handleDislikePost : handleLikePost}
          disabled={isLikeLoading}
          title={`${likesCount} Likes`}
        >
          <PostInnerBlockIcon>
            {isLiked ? <AiFillLike /> : <AiOutlineLike />}
          </PostInnerBlockIcon>
          {likesCount < 1000 ? likesCount : "999+"} Likes
        </PostInnerBlockBtn>
        <PostInnerBlockBtn
          direction="right"
          onClick={handleModal}
          title={`${commentsCount} Comments`}
        >
          <PostInnerBlockIcon>
            <AiOutlineComment />
          </PostInnerBlockIcon>
          {commentsCount < 1000 ? commentsCount : "999+"} Comments
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
