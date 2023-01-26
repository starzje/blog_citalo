import { PodStranicaBlogaProps } from '@/types';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import React from 'react';
import { FC } from 'react';
import { SEO, SvgDivider } from 'src/components';

const PodstranicaBloga: FC<PodStranicaBlogaProps> = ({
  post,
  pageSeoDescription,
  pageSeoTitle,
}) => {
  return (
    <div className="relative pt-10 ">
      <SEO
        pageTitle={`${pageSeoTitle}: ${post.title}`}
        pageDescription={pageSeoDescription}
      />
      <h2 className="text-4xl text-center font-bold leading-tight mb-10 relative text-dark-brown">
        {post.title}
      </h2>
      <div className=" flex flex-col md:flex-row gap-10 relative px-3 md:px-20 pb-20">
        <div className="w-full md:w-1/2 ">
          <Image
            className="h-[35em] w-full object-cover border-[15px] rounded-lg  border-light-brown"
            alt={'Fotografija knjige'}
            src={(process.env.NEXT_PUBLIC_BASE_URL + post.image) as string}
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/2 font-[300] flex flex-col justify-between items-center">
          <div className="mb-auto pt-10 ">
            <p>Kategorija: {post.category}</p>
            <p>broj stranica: {post.brojstranica}</p>
          </div>
          <blockquote className="text-xl font-extralight text-center italic my-auto">
            &bdquo;{post.quote}&ldquo;
          </blockquote>
        </div>
        <SvgDivider
          firstColor="#e7e5e4"
          secondColor="#EDECEC"
          thirdColor="#EDECEC"
          fourthColor="#e7e5e4"
        />
      </div>
      <div className="bg-[#e7e5e4] relative px-3 md:px-20 pb-10">
        <div className="font-extralight  leading-loose sadrzaj--postova">
          <MDXRemote {...post.content} />
        </div>
      </div>
    </div>
  );
};

export default PodstranicaBloga;
