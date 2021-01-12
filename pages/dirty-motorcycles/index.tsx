import React from "react";
import { Footer } from "components/Footer";
import Image from "next/image";
import { getAllPosts } from "lib/api";
import { Topics } from "types/topics";
import { Post } from "types";
import { Link } from "components/Link";
import { parseDate } from "lib/utils";

interface Props {
  allPosts: Post[];
}

const DirtyMotorcycles: React.FC<Props> = ({ allPosts }) => (
  <div>
    <h1 className="text-6xl font-semibold leading-tight mb-4">
      Dirty motorcycles
    </h1>
    <ul>
      {allPosts.map(({ slug, title, excerpt, date }) => (
        <li key={slug} className="mb-8">
          <div>
            <Link
              href={`/${Topics.DirtyMotorcycles}/${slug}`}
              className="text-2xl text-blue-400"
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
);

export default DirtyMotorcycles;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(Topics.DirtyMotorcycles, [
    "slug",
    "title",
    "excerpt",
    "date",
  ]);

  return { props: { allPosts } };
};
