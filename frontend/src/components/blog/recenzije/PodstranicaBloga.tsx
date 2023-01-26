import { PodStranicaBlogaProps } from '@/types';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import React from 'react';
import { FC } from 'react';
import { SEO } from 'src/components';

const PodstranicaBloga: FC<PodStranicaBlogaProps> = ({
  post,
  pageSeoDescription,
  pageSeoTitle,
}) => {
  return (
    <div className="relative">
      <SEO
        pageTitle={`${pageSeoTitle}: ${post.title}`}
        pageDescription={pageSeoDescription}
      />
      <Image
        alt={'Fotografija knjige'}
        src={(process.env.NEXT_PUBLIC_BASE_URL + post.image) as string}
        width={500}
        height={500}
      />
      <h1>Ime knjige: {post.title}</h1>
      <p>Kategorija: {post.category}</p>
      <div>Recenzija:</div>
      <MDXRemote {...post.content} />
    </div>
  );
};

export default PodstranicaBloga;
