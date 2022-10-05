import { FC } from "react";
import {
  CommentAuthor,
  CommentImg,
  CommentText,
  CommentWrapper,
} from "./styled";

interface CommentItemProps {}

const CommentItem: FC<CommentItemProps> = () => {
  return (
    <CommentWrapper>
      <CommentImg />
      <div>
        <CommentAuthor>Bachito Usubovsky</CommentAuthor>
        <CommentText>comment item</CommentText>
      </div>
    </CommentWrapper>
  );
};

export default CommentItem;
