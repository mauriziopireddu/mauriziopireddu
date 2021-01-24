import Head from "next/head";
import { useRouter } from "next/router";
import { useBreadcrumbs } from "components/Breadcrumbs";

const description =
  "Maurizio is web developer currently living in Dublin. He blogs about clean code and dirty motorcycles";

export const Meta = () => {
  const router = useRouter();
  const breadcrumbs = useBreadcrumbs(router);

  const pages = breadcrumbs.map((breadcrumb) => breadcrumb.name).reverse();
  const path = [...pages, "Maurizio Pireddu"];
  const title = path.join(" | ");

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.mauriziopireddu.com" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/avatar.jpg" />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.mauriziopireddu.com" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content="/avatar.jpg" />
    </Head>
  );
};
