import { FC, MouseEvent, useRef } from "react";
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
}

const CommentsModal: FC<CommentsModalProps> = ({ isOpen, handleModal }) => {
  const modalContentRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.target === modalContentRef.current) {
      handleModal();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <CommentsModalWrapper ref={modalContentRef} onClick={closeModal}>
      <CommentsModalContent>
        <CommentsList>
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
          <CommentItem />
        </CommentsList>

        <CommentsForm placeholder="Write a comment" />
      </CommentsModalContent>
    </CommentsModalWrapper>
  );
};

export default CommentsModal;
