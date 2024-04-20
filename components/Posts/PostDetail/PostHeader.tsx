import Image from "next/image";
import { FC } from "react";

type PostHeaderProps = {
  title: string;
  image: string;
};

const PostHeader: FC<PostHeaderProps> = ({ title, image }) => {
  return (
    <header className="pb-8 border-b-8 border-fuchsia-600 my-4 flex items-center justify-between flex-col-reverse gap-4 md:my-8 md:flex-row md:items-end">
      <h1 className="text-3xl text-center md:text-left md:text-6xl text-fuchsia-800">
        {title}
      </h1>

      <Image
        className="w-[200px] h-[120px] object-cover"
        src={image}
        alt={title}
        width={200}
        height={150}
      />
    </header>
  );
};
export default PostHeader;
