import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { getPostSlugs, postsDirectory } from "./utils";

export const getAllPosts = (topic: string, fields: string[] = []) => {
  const slugs = getPostSlugs(topic);
  return slugs
    .map((slug) => getPostBySlug(topic, slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
};

export const getPostBySlug = (
  topic: string,
  slug: string,
  fields: string[] = []
) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory(topic), `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Payload = {
    [key: string]: string;
  };

  let payload: Payload = {};

  fields.map((field) => {
    if (field === "slug") {
      payload = { ...payload, slug: realSlug };
    } else if (field === "content") {
      payload = { ...payload, content };
    } else if (data[field]) {
      payload = { ...payload, [field]: data[field] };
    }
  });

  return payload;
};
