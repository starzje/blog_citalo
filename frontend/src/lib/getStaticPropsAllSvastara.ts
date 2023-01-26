import { GET_ALL_POSTS_SVASTARA } from '@/graphql/queries';
import { client } from './apollo-client';

/**
 * @function
 * @async
 * @returns {Object} An object containing the data of all posts
 * @throws {ApolloError} When the GraphQL query fails to execute
This function is responsible for fetching all the posts data and returning it as a prop to be consumed by other components
*/
export async function getStaticProps() {
  try {
    const { data } = await client.query({
      query: GET_ALL_POSTS_SVASTARA,
    });
    return {
      props: {
        posts: data.svastaras.data,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      props: {
        posts: [],
      },
    };
  }
}
