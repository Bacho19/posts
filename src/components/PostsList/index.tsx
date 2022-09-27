import { FC, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store";
import { fetchPostsAction } from "../../store/actions/posts";
import PostCard from "./PostCard";

interface PostsListProps {}

const PostsList: FC<PostsListProps> = () => {
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
      {posts.length
        ? posts.map((item) => <PostCard {...item} key={item.postId} />)
        : null}
    </div>
  );
};

export default PostsList;
