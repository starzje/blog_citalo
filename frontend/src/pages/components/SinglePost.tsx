import Image from 'next/image';
import React from 'react';

export interface SinglePostProps {
  title: string;
  content: string;
  slug: string;
  image: string;
}

const SinglePost: React.FC<SinglePostProps> = ({
  title,
  content,
  slug,
  image,
}) => {
  console.log(image);
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
      <h1 className="text-red-500">{title}</h1>
      <li>{title}</li>
      <li>{content}</li>
      <li>{slug}</li>
    </>
  );
};

export default SinglePost;
