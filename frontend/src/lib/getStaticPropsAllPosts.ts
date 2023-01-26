import { GET_ALL_POSTS } from '@/graphql/queries';
import { client } from './apollo-client';

/**
 * @function
 * @async
 * @returns {Object} An object containing the data of all posts
 * @throws {ApolloError} When the GraphQL query fails to execute
This function is responsible for fetching all the posts data and returning it as a prop to be consumed by other components
*/
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
