import { GET_ISTAKNUTE_RECENZIJE } from '@/graphql/queries';
import { client } from './apollo-client';

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ISTAKNUTE_RECENZIJE,
  });
  return {
    props: {
      recenzije: data.istaknuterecenzijes.data,
    },
  };
}
