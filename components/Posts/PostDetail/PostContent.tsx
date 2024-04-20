import { FC } from "react";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

type PostContentProps = {
  postDetail: {
    title: string;
    image: string;
    slug: string;
    date: string;
    content: string;
  };
};

const PostContent: FC<PostContentProps> = ({ postDetail }) => {
  const imagePath = `/images/posts/${postDetail.slug}/${postDetail.image}`;

  const customRenderers = {
    img(image: any) {
      return (
        <Image
          className="w-full"
          src={`/images/posts/${postDetail.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
  };

  return (
    <article className="w-[95%] max-w-5xl mx-auto my-8 text-2xl leading-8 bg-gray-100 rounded-md p-4 md:p-8">
      <PostHeader title={postDetail.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>
        {postDetail?.content}
      </ReactMarkdown>
    </article>
  );
};
export default PostContent;
