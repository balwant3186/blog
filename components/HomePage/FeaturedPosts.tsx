import { FC } from "react";
import PostsGrid from "../Posts/PostsGrid";

type FeaturedPostProps = {
  posts: any[];
};

const FeaturedPosts: FC<FeaturedPostProps> = ({ posts }) => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto my-8">
      <h2 className="text-3xl text-gray-800 text-center md:text-6xl mb-5">
        Featured Posts
      </h2>
      <PostsGrid posts={posts} />
    </section>
  );
};
export default FeaturedPosts;
