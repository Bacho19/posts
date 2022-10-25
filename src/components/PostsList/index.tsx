import { FC } from "react";
import { IPost } from "../../store/slices/posts";
import PostCard from "./PostCard";

interface PostsListProps {
  posts: IPost[];
  loading: boolean;
  error: string | null;
  isMyPosts: boolean;
}

const PostsList: FC<PostsListProps> = ({
  posts,
  error,
  loading,
  isMyPosts,
}) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {posts.length ? (
        posts.map((item) => (
          <PostCard {...item} isMyPosts={isMyPosts} key={item.postId} />
        ))
      ) : (
        <p className="noItems">No posts yet</p>
      )}
    </div>
  );
};

export default PostsList;
