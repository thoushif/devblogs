import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(
  process.cwd(),
  "thoushif-blog-content",
  "posts"
);

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  console.log("reading file", postSlug);
  const postData = {
    slug: postSlug,
    ...data,
    content
  };

  return postData;
}

export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export function getAllPosts() {
  const postFiles = getPostsFiles();

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((p1, p2) => (p1.date > p2.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts() {
  return getAllPosts().filter((p) => p.isFeatured);
}
