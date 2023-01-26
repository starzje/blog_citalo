import { AllPostsProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';

const Article: FC<{ posts: AllPostsProps }> = ({ posts }) => {
  return (
    <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
      <Link
        href={`recenzije/${posts.attributes.slug}`}
        className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40"
      >
        <Image
          src={
            process.env.NEXT_PUBLIC_BASE_URL +
            posts.attributes.image.data.attributes.url
          }
          loading="lazy"
          alt="preview image za recenziju"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
          width={500}
          height={500}
        />
      </Link>
      <div className="flex flex-col gap-2">
        <span className="text-sm text-gray-400">{posts.attributes.datum}</span>

        <h2 className="text-xl font-bold text-dark-brown">
          <Link
            href={`recenzije/${posts.attributes.slug}`}
            className="transition duration-100 hover:text-light-brown active:text-light-brown"
          >
            {posts.attributes.title}
          </Link>
        </h2>

        <p className="text-gray-500">{posts.attributes.description}</p>

        <div>
          <Link
            href={`recenzije/${posts.attributes.slug}`}
            className="font-semibold text-dark-brown transition duration-100 hover:text-light-brown active:text-light-brown"
          >
            Pročitaj više...
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Article;
