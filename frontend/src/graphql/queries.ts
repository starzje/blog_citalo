import { gql } from '@apollo/client';

/**
 * @query GET_ALL_SLUGS
 * @desc Get all the slugs of the posts
 * @returns {Object} - an object with data property, which contains an array of post objects, where each object has attributes property that contains the slug of the post.
 */
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

/**
 * @query GET_ALL_POSTS
 * @desc Get all the posts
 * @returns {Object} - an object with data property, which contains an array of post objects, where each object has attributes property that contains all the information of the post such as date, title, content, description, category, slug and image.
 */
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

/**
 * @query GET_INDIVIDUAL_POST
 * @desc Get an individual post by its slug
 * @param {String} slug - the slug of the post
 * @returns {Object} - an object with data property, which contains an array of post objects, where each object has attributes property that contains all the information of the post such as date, title, content, description, category, slug and image.
 */
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

/**
 * @query GET_ISTAKNUTE_RECENZIJE
 * @desc Get all the featured reviews
 * @returns {Object} - an object with data property, which contains an array of review objects, where each object has attributes property that contains all the information of the review such as title, author, description, slug, image, tags and publisher.
 */
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

/**
 * @query GET_NEDAVNI_POSTOVI
 * @desc Get all the recent posts
 * @returns {Object} - an object with data property, which contains an array of post objects, where each object has attributes property that contains all the information of the post such as title, author, description, slug, publisher, tags and image.
 */
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
