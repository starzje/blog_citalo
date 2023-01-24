import { gql } from '@apollo/client';

const GET_ALL_SLUGS = gql`
  query {
    posts {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

const GET_ALL_POSTS = gql`
  query {
    posts {
      data {
        id
        attributes {
          datum
          title
          content
          description
          category
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

const GET_INDIVIDUAL_POST = gql`
  query ($slug: String!) {
    posts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          datum
          title
          content
          description
          category
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_INDIVIDUAL_POST, GET_ALL_SLUGS };
