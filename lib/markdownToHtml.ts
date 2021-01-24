import remark from "remark";
import html from "remark-html";
// @ts-ignore
import prism from "remark-prism";

export const markdownToHtml = async (markdown: string) => {
  const parsed = await remark().use(html).use(prism).process(markdown);
  return parsed.toString() || "";
};
