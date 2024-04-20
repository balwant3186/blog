import PostContent from "@/components/Posts/PostDetail/PostContent";
import { getPostData } from "@/lib/posts-util";
import { FC } from "react";

type PostDetailProps = {
  params: {
    postId: string;
  };
};

const PostDetailPage: FC<PostDetailProps> = async ({ params }) => {
  const post = await getPostData(params.postId);

  return <PostContent postDetail={post} />;
};
export default PostDetailPage;
