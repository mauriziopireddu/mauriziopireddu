import Head from "next/head";
import React from "react";
import { Footer } from "components/Footer";
import { getAllPosts } from "lib/api";
import { PostType } from "types";

interface Props {
  allPosts: PostType[];
}

const CleanCode: React.FC<Props> = ({ allPosts }) => (
  <>
    <Head>
      <title>Maurizio Pireddu | Loves clean code</title>
    </Head>
    <ul>
      {allPosts.map((post) => (
        <li key={post.slug}>{post.title}</li>
      ))}
    </ul>
    <div>
      <h1>Maurizio loves clean code</h1>
      <Footer />
    </div>
  </>
);

export default CleanCode;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  return { props: { allPosts } };
};
