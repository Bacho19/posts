import styled from "styled-components";

export const PostTitle = styled.h2`
  font-size: 44px;
  margin-right: 50px;
`;

export const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
`;

export const PostAuthorBlock = styled.div`
  min-width: 400px;
  min-height: 100px;
  background-color: #f5f5f5;
  padding: 25px 35px;
  border-radius: 6px;
`;

export const PostAuthorHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const PostAuthorImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

export const PostAuthorDate = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: #727375;
  margin-top: 10px;
`;

export const PostInnerBlock = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 400px;
  height: 50px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  display: flex;
`;

export const PostInnerBlockBtn = styled.div<{ direction: "left" | "right" }>`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: ${({ direction }) =>
    direction === "right" && "25px"};
  border-bottom-right-radius: ${({ direction }) =>
    direction === "right" && "25px"};
  border-top-left-radius: ${({ direction }) => direction === "left" && "25px"};
  border-bottom-left-radius: ${({ direction }) =>
    direction === "left" && "25px"};
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const PostInnerBlockIcon = styled.div`
  margin: 3px 15px 0 0;
  transform: scale(1.5);
`;
