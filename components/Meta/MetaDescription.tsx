import React from "react";
import Head from "next/head";

export const defaultDescription =
  "Maurizio is web developer currently living in Dublin. He blogs about clean code and dirty motorcycles";

interface Props {
  title: string;
  description?: string;
  overrideTitle?: boolean;
  children?: React.ReactNode;
}

export const MetaDescription: React.FC<Props> = ({
  title: titlePrefix,
  description = defaultDescription,
  overrideTitle = false,
  children,
}) => {
  const title = overrideTitle
    ? titlePrefix
    : `${titlePrefix} | Maurizio Pireddu`;
  return (
    <Head>
      {/* Primary Meta Tags */}
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {children}
    </Head>
  );
};
