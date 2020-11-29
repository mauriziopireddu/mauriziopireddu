import { useRouter } from "next/router";
import ErrorPage from "next/error";

import { getPostBySlug, getAllPosts } from "lib/api";
import Head from "next/head";

import { markdownToHtml } from "lib/markdownToHtml";
import { Post } from "types";
import { Body } from "components/Post";
import { Topics } from "types/topics";

type Props = {
  post: Post;
};

const Article: React.FC<Props> = ({ post }) => {
  const router = useRouter();
  const isLoading = router.isFallback;

  if (isLoading) {
    return <p>Loading…</p>;
  }

  if (!post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <article className="prose">
      <Head>
        <title>{post.title}</title>
      </Head>
      <Body>{post.content}</Body>
    </article>
  );
};

export default Article;

type Params = {
  params: { slug: string };
};

export const getStaticProps = async ({ params }: Params) => {
  const post = getPostBySlug(Topics.CleanCode, params.slug, [
    "title",
    "date",
    "slug",
    "content",
  ]);
  const content = await markdownToHtml(post.content);

  return {
    props: {
      post: { ...post, content },
    },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts(Topics.CleanCode, ["slug"]);

  return {
    paths: posts.map((posts) => ({
      params: {
        slug: posts.slug,
      },
    })),
    fallback: false,
  };
};
