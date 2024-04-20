import AllPosts from "@/components/AllPosts.js/AllPosts";
import { getAllPosts } from "@/lib/posts-util";

const PostsPage = async () => {
  const posts = await getAllPosts();

  return <AllPosts posts={posts} />;
};
export default PostsPage;
