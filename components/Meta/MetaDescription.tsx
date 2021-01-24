import Head from "next/head";

const defaultDescription =
  "Maurizio is web developer currently living in Dublin. He blogs about clean code and dirty motorcycles";

interface Props {
  description?: string;
}
export const MetaDescription: React.FC<Props> = ({
  description = defaultDescription,
}) => (
  <Head>
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="twitter:description" content={description} />
  </Head>
);
