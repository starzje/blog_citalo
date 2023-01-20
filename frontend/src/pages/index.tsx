import Displayforum from '@/components/DisplayForum';
import useSWR from 'swr';
import React from 'react';
import { fetcher } from '@/lib/dataFetch';

const endpoint = process.env.NEXT_PUBLIC_BASE_URL + '/api/posts?populate=*';

function Home() {
  const { data, error } = useSWR(endpoint, fetcher);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const renderForums = data.map(
    ({ id, attributes: { title, content, slug, category, image } }) => {
      return (
        <Displayforum
          key={id}
          title={title}
          content={content}
          slug={slug}
          category={category}
          image={`${process.env.NEXT_PUBLIC_BASE_URL}${image?.data?.attributes?.url}`}
        />
      );
    }
  );

  return <div>{renderForums}</div>;
}

export default Home;
