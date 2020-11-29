import Head from "next/head";
import React from "react";
import { Footer } from "components/Footer";
import { getAllPosts } from "lib/api";
import { Post } from "types";
import { Topics } from "types/topics";
import { Link } from "components/Link";

interface Props {
  allPosts: Post[];
}

const CleanCode: React.FC<Props> = ({ allPosts }) => (
  <>
    <Head>
      <title>Maurizio Pireddu | Loves clean code</title>
    </Head>

    <div>
      <Link href="/">
        <h1 className="my-16 text-6xl font-semibold leading-tight">
          Maurizio loves clean code
        </h1>
      </Link>
      <ul>
        {allPosts.map(({ slug, title, excerpt }) => (
          <li key={slug} className="mb-8">
            <div>
              <Link
                href={`/${Topics.CleanCode}/${slug}`}
                className="text-2xl text-primary"
              >
                {title}
              </Link>
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
  const allPosts = getAllPosts(Topics.CleanCode, ["slug", "title", "excerpt"]);

  return { props: { allPosts } };
};
