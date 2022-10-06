import { FC } from "react";
import { IComment } from "../../../store/slices/comments";
import {
  CommentAuthor,
  CommentImg,
  CommentText,
  CommentWrapper,
} from "./styled";

interface CommentItemProps {
  comment: IComment;
}

const CommentItem: FC<CommentItemProps> = ({ comment }) => {
  return (
    <CommentWrapper>
      <CommentImg src={comment.user.avatarUrl ?? ""} />
      <div>
        <CommentAuthor>
          {comment.user.firstName} {comment.user.lastName}
        </CommentAuthor>
        <CommentText>{comment.text}</CommentText>
      </div>
    </CommentWrapper>
  );
};

export default CommentItem;
