import fs from "fs";
import path from "path";

import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsFiles() {
  const files = fs.readdirSync(postsDirectory);
  return files;
}
export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((file) => {
    return getPostData(file);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();
  const FeaturedPosts = allPosts.filter((post) => {
    return post.isFeatured;
  });

  return FeaturedPosts;
}

export function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  const postSlug = fileName.replace(/\.md$/g, ""); // remove file format for slug
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}
