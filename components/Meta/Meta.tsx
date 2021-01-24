import Head from "next/head";
import { useRouter } from "next/router";
import { useBreadcrumbs } from "components/Breadcrumbs";

const image = "/avatar.jpg";
const website = "https://www.mauriziopireddu.com";
export const defaultDescription =
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
      <meta name="description" content={defaultDescription} />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={website} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={image} />
      {/* Twitter */}
      <meta property="twitter:card" content={image} />
      <meta property="twitter:url" content={website} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={defaultDescription} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};
