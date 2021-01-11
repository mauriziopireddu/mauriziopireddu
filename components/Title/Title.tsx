import Head from "next/head";
import { useRouter } from "next/router";
import { useBreadcrumbs } from "components/Breadcrumbs";

export const Title = () => {
  const router = useRouter();
  const breadcrumbs = useBreadcrumbs(router);

  const pages = breadcrumbs.map((breadcrumb) => breadcrumb.name).reverse();
  const path = [...pages, "Maurizio Pireddu"];
  const title = path.join(" | ");

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
};
