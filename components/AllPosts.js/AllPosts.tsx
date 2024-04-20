import { FC } from "react";

import PostsGrid from "../Posts/PostsGrid";

type AllPostsProps = {
  posts: any[];
};

const AllPosts: FC<AllPostsProps> = ({ posts }) => {
  return (
    <section className="w-[90%] max-w-7xl mx-auto my-8">
      <h1 className="text-3xl text-gray-800 text-center md:text-6xl mb-5">
        All Posts
      </h1>
      <PostsGrid posts={posts} />
    </section>
  );
};
export default AllPosts;
