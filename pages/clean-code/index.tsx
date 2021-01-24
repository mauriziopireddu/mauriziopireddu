import React from "react";
import { Footer } from "components/Footer";
import { getAllPosts } from "lib/api";
import { Post } from "types";
import { Topics } from "types/topics";
import { Link } from "components/Link";
import { parseDate } from "lib/utils";
import { MetaDescription } from "components/Meta/MetaDescription";

interface Props {
  allPosts: Post[];
}

const CleanCode: React.FC<Props> = ({ allPosts }) => (
  <>
    <MetaDescription />
    <div>
      <h1 className="text-6xl font-medium leading-tight my-8">Clean code</h1>
      <ul>
        {allPosts.map(({ slug, title, excerpt, date }) => (
          <li key={slug} className="mb-8">
            <div>
              <Link
                href={`/${Topics.CleanCode}/${slug}`}
                className="text-2xl text-cc"
              >
                {title}
              </Link>
              <time className="ml-2">{parseDate(date)}</time>
              <p>{excerpt}</p>
            </div>
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  </>
);

export default CleanCode;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(Topics.CleanCode, [
    "slug",
    "title",
    "excerpt",
    "date",
  ]);

  return { props: { allPosts } };
};
