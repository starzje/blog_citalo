import React, { FC } from 'react';
import { IstaknuteRecenzijeProps } from '@/types';
import Link from 'next/link';
import Image from 'next/image';

const IstaknuteRecenzijeElement: FC<{
  recenzija: IstaknuteRecenzijeProps;
  path: 'recenzije' | 'svastara';
}> = ({ recenzija, path }) => {
  return (
    <article className="h-90  relative col-span-1 m-auto min-h-full cursor-pointer overflow-hidden rounded-lg pb-2 shadow-lg transition-transform duration-200 hover:translate-y-2 border bg-white">
      <Link
        href={`/${path}/${recenzija.attributes.slug}`}
        className="block h-full w-full"
      >
        <Image
          loading="lazy"
          className="max-h-40 w-full object-cover"
          alt="featured image"
          width={500}
          height={500}
          src={
            process.env.NEXT_PUBLIC_BASE_URL +
            recenzija.attributes.image.data.attributes.url
          }
        />
        <div className="w-full p-4">
          <p className="text-md font-medium text-[#57453d]">
            {recenzija.attributes.author}
          </p>
          <p className="mb-2 text-xl font-medium text-gray-800">
            {recenzija.attributes.title}
          </p>
          <p className="text-md font-light text-gray-400">
            {recenzija.attributes.description}
          </p>
          <ul className="justify-starts mt-4 flex flex-wrap items-center">
            {recenzija.attributes.tags.map((tag, index) => (
              <li
                key={index}
                className="mr-2 mt-1 rounded-2xl bg-[#afa5a1] py-1.5 px-4 text-[0.7rem] text-white"
              >
                #{tag.tags}
              </li>
            ))}
          </ul>
        </div>
        <p className="absolute bottom-0 left-[30%] text-sm text-gray-400">
          Nakladnik: {recenzija.attributes.nakladnik}
        </p>
      </Link>
    </article>
  );
};

export default IstaknuteRecenzijeElement;
