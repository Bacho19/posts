import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostCardWrapper = styled(Link)`
  margin-top: 30px;
  display: block;
  background-color: #f5f5f5;
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
