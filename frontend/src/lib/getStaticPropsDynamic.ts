import { GET_INDIVIDUAL_POST } from '@/graphql/queries';
import { client } from './apollo-client';
import { serialize } from 'next-mdx-remote/serialize';

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
    },
  };
}
