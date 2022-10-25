import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostCardWrapper = styled.div`
  position: relative;
  margin-top: 30px;
  display: block;
  background-color: #f5f5f5;
`;

export const PostCardLink = styled(Link)`
  position: relative;
  margin-top: 30px;
  display: block;
  background-color: #f5f5f5;
`;

export const DeleteButton = styled.button`
  position: absolute;
  width: 120px;
  height: 30px;
  border-radius: 15px;
  top: 30px;
  right: 50px;
  background-color: #c5c5c5;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const PostCardImg = styled.img`
  height: 400px;
  width: 100%;
  object-fit: cover;
`;

export const PostCardContent = styled.div`
  display: flex;
  padding: 20px 30px;
  justify-content: space-between;
`;

export const PostCardTitle = styled.p``;

export const PostCardDate = styled.span`
  font-size: 14px;
  color: #636363;
`;
