import { FC } from "react";
import PostItem from "./PostItem";

type PostsGridProps = {
  posts: any[];
};
const PostsGrid: FC<PostsGridProps> = ({ posts }) => {
  return (
    <ul className="grid content-center grid-cols-post gap-6">
      {posts?.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
export default PostsGrid;
