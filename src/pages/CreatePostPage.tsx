import { FC, useState } from "react";
import Navbar from "../components/Navbar";
import MDEditor from "@uiw/react-md-editor";
import styled from "styled-components";
import Button from "../components/UI/Button";
import { axiosInstance } from "../api";
import { useNavigate } from "react-router-dom";

const CreatePostContentWrapper = styled.div`
  padding: 40px 50px 0;
`;

const ButtonWrapper = styled.div`
  width: 150px;
`;

const StyledTitleInput = styled.input`
  width: 100%;
  height: 60px;
  font-size: 24px;
  border: none;
  background: #ededed;
  outline: none;
  padding-left: 25px;
  margin-bottom: 15px;
`;

const StyledImageInput = styled.input`
  width: 100%;
  height: 35px;
  font-size: 16px;
  border: none;
  background: #ededed;
  outline: none;
  padding-left: 25px;
  margin-bottom: 30px;
`;

interface CreatePostPageProps {}

const CreatePostPage: FC<CreatePostPageProps> = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const navigate = useNavigate();

  const handleCreatePost = async () => {
    try {
      await axiosInstance.post("/posts", { title, body, imageUrl });
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Navbar />
      <CreatePostContentWrapper>
        <StyledTitleInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <StyledImageInput
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Image url"
        />
        <MDEditor
          value={body}
          onChange={(e) => setBody(e as string)}
          height={350}
        />
        <ButtonWrapper>
          <Button m="25px 0 0 0" onClick={handleCreatePost}>
            Share
          </Button>
        </ButtonWrapper>
      </CreatePostContentWrapper>
    </>
  );
};

export default CreatePostPage;
