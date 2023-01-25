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

const GET_ISTAKNUTE_RECENZIJE = gql`
  query {
    istaknuterecenzijes {
      data {
        id
        attributes {
          title
          author
          description
          slug
          image {
            data {
              attributes {
                url
              }
            }
          }
          tags
          nakladnik
        }
      }
    }
  }
`;

const GET_NEDAVNI_POSTOVI = gql`
  query {
    nedavnipostovis {
      data {
        id
        attributes {
          title
          author
          description
          slug
          nakladnik
          tags
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

export {
  GET_ALL_POSTS,
  GET_INDIVIDUAL_POST,
  GET_ALL_SLUGS,
  GET_ISTAKNUTE_RECENZIJE,
  GET_NEDAVNI_POSTOVI,
};
