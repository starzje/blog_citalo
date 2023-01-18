import Image from 'next/image';
import React from 'react';

export interface SinglePostProps {
  title: string;
  content: string;
  slug: string;
  image: string;
  category: string;
}

const SinglePost: React.FC<SinglePostProps> = ({
  title,
  content,
  slug,
  image,
  category,
}) => {
  return (
    <>
      <Image
        alt="image of blog post"
        src={
          image
            ? process.env.NEXT_PUBLIC_BASE_URL + image
            : 'http://via.placeholder.com/500.jpg'
        }
        width={500}
        height={500}
      />
      <p>{}</p>
      <h1 className="text-slate-800 text-2xl">{title}</h1>
      <li>sadržaj: {content}</li>
      <li className="font-bold text-cyan-700">slug url: {slug}</li>
      <li className="font-bold text-cyan-700">izdavač: {category}</li>
    </>
  );
};

export default SinglePost;
