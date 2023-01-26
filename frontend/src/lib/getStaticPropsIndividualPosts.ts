import { GET_INDIVIDUAL_POST } from '@/graphql/queries';
import { client } from './apollo-client';
import { serialize } from 'next-mdx-remote/serialize';
import { SinglePostProps } from '@/types';

/**
 * @function
 * @async
 * @returns {Object} An object containing the data of individual post
 * @throws {ApolloError} When the GraphQL query fails to execute
This function is responsible for fetching individual post data and returning it as a prop to be consumed by other components
*/
export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { data } = await client.query({
    query: GET_INDIVIDUAL_POST,
    variables: { slug: params.slug },
  });

  const attributes = data.posts.data[0].attributes;
  const html = await serialize(attributes.content);

  return {
    props: {
      post: {
        title: attributes.title,
        content: html,
        category: attributes.category,
        image: attributes.image.data.attributes.url,
      },
    } as SinglePostProps,
  };
}
