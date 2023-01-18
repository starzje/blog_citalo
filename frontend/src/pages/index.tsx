import Displayforum from '@/components/DisplayForum';
import DataFetch from '@/lib/data-fetch';
import { DataType } from '@/types/data';

export default function Home({
  response,
}: {
  response: { data: Array<DataType> };
}) {
  return (
    <div className="asd">
      {response.data.map((data) => {
        return (
          <Displayforum
            key={data.id}
            response={data}
          />
        );
      })}
    </div>
  );
}

const client = new DataFetch();

export const getStaticProps = async () => {
  const allPosts = await client.fetchData('posts', '?populate=*');
  return {
    props: {
      response: allPosts,
    },
  };
};
