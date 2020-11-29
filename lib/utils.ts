import fs from "fs";
import { join } from "path";

export const postsDirectory = (topic: string) =>
  join(process.cwd(), `blog/${topic}`);

export const getPostSlugs = (topic: string) =>
  fs.readdirSync(postsDirectory(topic));
