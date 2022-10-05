import styled from "styled-components";

export const CommentsModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const CommentsModalContent = styled.div`
  width: 1000px;
  max-height: 600px;
  background-color: #fff;
  padding: 40px 50px;
  border-radius: 15px;
  z-index: 99999;
`;

export const CommentsForm = styled.textarea`
  max-width: 100%;
  max-height: 150px;
  height: 150px;
  width: 100%;
  outline: none;
  border: none;
  border-radius: 15px;
  background-color: #f2f2f2;
  font-size: 16px;
  padding: 20px 25px;
`;

export const CommentsList = styled.div`
  overflow-y: auto;
  max-height: 320px;
  margin-bottom: 40px;
`;
