import {
  FC,
  KeyboardEvent,
  MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { createComment, fetchComments } from "../../store/actions/comments";
import { IComment } from "../../store/slices/comments";
import CommentItem from "./CommentItem";
import {
  CommentsForm,
  CommentsList,
  CommentsModalContent,
  CommentsModalWrapper,
} from "./styled";

interface CommentsModalProps {
  isOpen: boolean;
  handleModal: () => void;
  postId: string | undefined;
}

const CommentsModal: FC<CommentsModalProps> = ({
  isOpen,
  handleModal,
  postId,
}) => {
  const [commentText, setCommentText] = useState<string>("");

  const { comments } = useAppSelector((state) => state.comments);
  const dispatch = useAppDispatch();

  const modalContentRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === modalContentRef.current) {
      handleModal();
    }
  };

  const handleAddComment = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "e") {
      return;
    }

    if (commentText.trim() && e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      dispatch(createComment({ postId, text: commentText }));
      setCommentText("");
    }
  };

  useEffect(() => {
    dispatch(fetchComments({ postId }));
  }, [dispatch, postId]);

  if (!isOpen) {
    return null;
  }

  return (
    <CommentsModalWrapper ref={modalContentRef} onClick={closeModal}>
      <CommentsModalContent>
        <CommentsList>
          {comments.length ? (
            comments.map((comment: IComment) => (
              <CommentItem comment={comment} key={comment.commentId} />
            ))
          ) : (
            <p className="noItems --noMargins">No comments yet</p>
          )}
        </CommentsList>
        <CommentsForm
          placeholder="Write a comment"
          onKeyDown={handleAddComment}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </CommentsModalContent>
    </CommentsModalWrapper>
  );
};

export default CommentsModal;
