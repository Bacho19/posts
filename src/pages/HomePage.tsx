import { FC, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "../store";
import { fetchPostsAction } from "../store/actions/posts";

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => {
  const { posts, loading, error } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsAction());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <Navbar />
      {posts.length
        ? posts.map((item) => <p key={item.postId}>{item.title}</p>)
        : ""}
    </div>
  );
};

export default HomePage;
