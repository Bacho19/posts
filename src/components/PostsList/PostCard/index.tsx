import { FC } from "react";
import { IPost } from "../../../store/slices/posts";
import { getFormattedDate } from "../../../utils";
import {
  PostCardContent,
  PostCardDate,
  PostCardImg,
  PostCardTitle,
  PostCardWrapper,
} from "./styled";

interface PostCardProps extends IPost {}

const PostCard: FC<PostCardProps> = ({
  title,
  createdAt,
  imageUrl,
  updatedAt,
}) => {
  return (
    <PostCardWrapper href="#">
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
    </PostCardWrapper>
  );
};

export default PostCard;
