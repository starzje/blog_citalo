import { PostSlugProps } from '@/types';
import { GET_ALL_SLUGS } from '@/graphql/queries';
import { client } from './apollo-client';

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_ALL_SLUGS,
  });

  const paths = data.posts.data.map((post: PostSlugProps) => {
    return { params: { slug: post.attributes.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
