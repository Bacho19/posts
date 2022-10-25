import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CreatePostPage from "./pages/CreatePostPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import MyPostsPage from "./pages/MyPostsPage";
import PostInnerPage from "./pages/PostInnerPage";
import RegisterPage from "./pages/RegisterPage";
import { useAppSelector } from "./store";

interface MyRoutesProps {}

const MyRoutes: FC<MyRoutesProps> = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  return (
    <>
      {!localStorage.getItem("token") && !isAuth ? (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostInnerPage />} />
          <Route path="/create-post" element={<CreatePostPage />} />
          <Route path="/my-posts" element={<MyPostsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      )}
    </>
  );
};

export default MyRoutes;
