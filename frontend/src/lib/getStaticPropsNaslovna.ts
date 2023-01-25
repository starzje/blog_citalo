import {
  GET_ISTAKNUTE_RECENZIJE,
  GET_NEDAVNI_POSTOVI,
} from '@/graphql/queries';
import { client } from './apollo-client';

export async function getStaticProps() {
  const [{ data: data1 }, { data: data2 }] = await Promise.all([
    client.query({ query: GET_ISTAKNUTE_RECENZIJE }),
    client.query({ query: GET_NEDAVNI_POSTOVI }),
  ]);

  return {
    props: {
      recenzije: data1.istaknuterecenzijes.data,
      nedavnipostovi: data2.nedavnipostovis.data,
    },
  };
}
