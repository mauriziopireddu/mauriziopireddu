import remark from "remark";
import html from "remark-html";

export const markdownToHtml = async (markdown: string) => {
  const parsed = await remark().use(html).process(markdown);
  return parsed.toString() || "";
};
