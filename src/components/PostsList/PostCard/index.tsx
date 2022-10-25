import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { deletePost } from "../../../store/actions/posts";
import { IPost } from "../../../store/slices/posts";
import { getFormattedDate } from "../../../utils";
import {
  DeleteButton,
  PostCardContent,
  PostCardDate,
  PostCardImg,
  PostCardTitle,
  PostCardLink,
  PostCardWrapper,
} from "./styled";

interface PostCardProps extends IPost {
  isMyPosts: boolean;
}

const PostCard: FC<PostCardProps> = ({
  postId,
  title,
  createdAt,
  imageUrl,
  updatedAt,
  isMyPosts,
}) => {
  const { isPostDeleting } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const handleRemovePost = () => {
    dispatch(deletePost({ postId }));
  };

  return (
    <PostCardWrapper>
      {isMyPosts ? (
        <DeleteButton onClick={handleRemovePost} disabled={isPostDeleting}>
          Delete
        </DeleteButton>
      ) : null}
      <PostCardLink to={`/post/${postId}`}>
        <PostCardImg
          src={
            imageUrl
              ? imageUrl
              : "https://user2020.r-project.org/img/placeholder.png"
          }
          alt="post image"
        />
        <PostCardContent>
          <PostCardTitle>{title}</PostCardTitle>
          <PostCardDate>
            {createdAt === updatedAt
              ? getFormattedDate(createdAt)
              : `${getFormattedDate(createdAt)} (updated - ${getFormattedDate(
                  updatedAt
                )})`}
          </PostCardDate>
        </PostCardContent>
      </PostCardLink>
    </PostCardWrapper>
  );
};

export default PostCard;
