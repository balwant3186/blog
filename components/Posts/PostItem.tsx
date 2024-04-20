import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type PostItemProps = {
  post: any;
};

const PostItem: FC<PostItemProps> = ({ post }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  return (
    <li className="shadow-lg bg-gray-800 text-center">
      <Link href={`/posts/${post.slug}`} className="text-gray-100">
        <div className="w-full max-h-80 overflow-hidden">
          <Image
            src={imagePath}
            alt={post.title}
            width={300}
            height={200}
            className="object-cover w-full"
          />
        </div>

        <div className="p-4">
          <h3 className="text-2xl my-2">{post?.title}</h3>
          <time className="italic text-gray-300">{formattedDate}</time>
          <p className="leading-6">{post?.excerpt}</p>
        </div>
      </Link>
    </li>
  );
};
export default PostItem;
