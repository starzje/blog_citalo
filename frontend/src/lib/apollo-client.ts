import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  link: new HttpLink({ uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql` }),
  cache: new InMemoryCache(),
});
