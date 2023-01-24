import { GET_ALL_POSTS } from '@/graphql/queries';
import { client } from './apollo-client';

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_POSTS,
  });
  return {
    props: {
      posts: data.posts.data,
    },
  };
}
