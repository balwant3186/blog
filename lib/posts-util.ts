import fs from "fs";
import matter from "gray-matter";
import path from "path";

type PostDataType = {
  slug: string;
  title: string;
  date: string;
  image: string;
  isFeatured: boolean;
  content: string;
};

const pathsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const postFiles = fs.readdirSync(pathsDirectory);

  const allPosts = postFiles
    .map((postFile) => getPostData(postFile))
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return allPosts;
}

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(pathsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  } as PostDataType;
  return postData;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
