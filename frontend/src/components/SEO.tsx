import Head from 'next/head';
import { FC } from 'react';

export interface SeoProps {
  pageTitle: string;
  pageDescription: string;
}

const SEO: FC<SeoProps> = ({ pageTitle, pageDescription }) => (
  <Head>
    <title>{pageTitle}</title>
    <meta
      name="description"
      content={pageDescription}
    />
    ...
  </Head>
);

export default SEO;
