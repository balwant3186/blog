import FeaturedPosts from "@/components/HomePage/FeaturedPosts";
import Hero from "@/components/HomePage/Hero";
import { getFeaturedPosts } from "@/lib/posts-util";

const HomePage = async () => {
  const featuredPosts = getFeaturedPosts();

  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
};
export default HomePage;
