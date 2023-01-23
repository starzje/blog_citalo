import React from 'react';
import { getStaticPaths } from '@/lib/getStaticPaths';
import { getStaticProps } from '@/lib/getStaticPropsDynamic';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import { SinglePostProps } from '@/types';
import { FC } from 'react';

const Post: FC<SinglePostProps> = ({ post }) => {
  return (
    <div>
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

export default Post;

export { getStaticPaths };
export { getStaticProps };
