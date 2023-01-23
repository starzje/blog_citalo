import { ListOfAllPostsProps } from '@/types';
import Link from 'next/link';
import React from 'react';
import { getStaticProps } from '@/lib/getStaticPropsIndex';
import { FC } from 'react';

const Posts: FC<ListOfAllPostsProps> = ({ posts }) => {
  return (
    <div className="bg-slate-500 min-h-screen px-5 ">
      {posts.map((post) => {
        const {
          attributes: { slug, title, description },
        } = post;
        return (
          <Link
            key={post.id}
            href={`recenzije/${slug}`}
          >
            <div className="p-[12px] shadow-xl border rounded-lg mb-[12px]">
              <h3 className="mt-[12px] text-2xl">{title}</h3>
              <p>{description}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Posts;

export { getStaticProps };
