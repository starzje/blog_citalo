import React from 'react';
import { SinglePostProps } from '@/types/data';
import Image from 'next/image';

const SinglePost: React.FC<SinglePostProps> = ({
  title,
  content,
  slug,
  category,
  image,
}) => {
  return (
    <>
      <Image
        loading="lazy"
        alt="image of blog post"
        src={image}
        width={500}
        height={500}
      />
      <h1 className="text-slate-800 text-2xl">{title}</h1>
      <p>{content}</p>
      <li className="font-bold text-cyan-700">slug url: {slug}</li>
      <li className="font-bold text-cyan-700">izdavač: {category}</li>
    </>
  );
};

export default SinglePost;
