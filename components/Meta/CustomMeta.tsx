import React from "react";
import Head from "next/head";
import { defaultDescription } from "./Meta";

interface Props {
  title: string;
  description?: string;
}

export const CustomMeta: React.FC<Props> = ({
  title,
  description = defaultDescription,
}) => (
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
  </Head>
);
