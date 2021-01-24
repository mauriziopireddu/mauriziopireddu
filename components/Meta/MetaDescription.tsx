import Head from "next/head";

interface Props {
  description: string;
}
export const MetaDescription: React.FC<Props> = ({ description }) => (
  <Head>
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="twitter:description" content={description} />
  </Head>
);
