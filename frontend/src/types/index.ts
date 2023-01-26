import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Dispatch, SetStateAction } from 'react';

/**
 * @typedef {Object} Image
 * @property {Object} data - The data property of the image.
 * @property {Object} attributes - The attributes of the image data.
 * @property {string} attributes.url - The url of the image.
 */
type Image = {
  data: {
    attributes: {
      url: string;
    };
  };
};

/**
 * @typedef {Object} Tags
 * @property {string} tags - The tags for a post or review.
 */
type Tags = {
  tags: string;
};

/**
 * @interface SinglePostProps
 * @property {object} post - An object containing the post data
 * @property {string} post.title - The title of the post
 * @property {MDXRemoteSerializeResult} post.content - An object containing the parsed and serialized content of the post
 * @property {string} post.category - The category of the post
 * @property {string} post.image - The url of the post's featured image
 */
export interface SinglePostProps {
  post: {
    title: string;
    content: MDXRemoteSerializeResult<
      Record<string, unknown>,
      Record<string, string>
    >;
    category: string;
    image: string;
  };
}

/**
 * @interface PostSlugProps
 * @property {object} attributes - An object containing the post's attributes
 * @property {string} attributes.slug - The unique identifier for the post
 */
export interface PostSlugProps {
  attributes: {
    slug: string;
  };
}

/**
 * @interface AllPostsProps
 * @property {string} id - The unique identifier for the post
 * @property {object} attributes - An object containing the post's attributes
 * @property {string} attributes.title - The title of the post
 * @property {string} attributes.datum - The date the post was published
 * @property {string} attributes.content - The content of the post
 * @property {string} attributes.description - The post's description
 * @property {string} attributes.slug - The unique identifier for the post
 * @property {string} attributes.category - The category the post belongs to
 * @property {Image} attributes.image - The featured image of the post
 */
export interface AllPostsProps {
  id: string;
  attributes: {
    title: string;
    datum: string;
    content: string;
    description: string;
    slug: string;
    category: string;
    image: Image;
  };
}

/**
 * @interface IstaknuteRecenzijeProps
 * @property {string} id - The unique identifier for the review
 * @property {object} attributes - An object containing the review's attributes
 * @property {string} attributes.title - The title of the review
 * @property
 */
export interface IstaknuteRecenzijeProps {
  id: string;
  attributes: {
    title: string;
    author: string;
    description: string;
    slug: string;
    image: Image;
    tags: Tags[];
    nakladnik: string;
  };
}

/**
 * Represents the shape of data for a single recent post, as returned by the GET_NEDAVNI_POSTOVI query.
 * @interface NedavniPostoviProps
 * @property {string} id - The unique identifier for the post.
 * @property {Object} attributes - The attributes of the post.
 * @property {string} attributes.title - The title of the post.
 * @property {string} attributes.author - The author of the post.
 * @property {string} attributes.description - A short description of the post.
 * @property {string} attributes.slug - A unique string identifier for the post, used in URLs.
 * @property {string} attributes.nakladnik - The publisher of the post.
 * @property {Tags[]} attributes.tags - An array of tags associated with the post.
 * @property {Image} attributes.image - An object containing the image associated with the post.
 */
export interface NedavniPostoviProps {
  id: string;
  attributes: {
    title: string;
    author: string;
    description: string;
    slug: string;
    nakladnik: string;
    tags: Tags[];
    image: Image;
  };
}

/**
 * @interface MobileMenuProps
 * @property {boolean} [isOpen] - Indicates whether the mobile menu is open or closed.
 * @property {(value: boolean) => void} setIsOpen - A callback function that sets the value of isOpen.
 */
export interface MobileMenuProps {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * @interface IstaknuteRecenzijeElementProps
 * @property {IstaknuteRecenzijeProps} recenzija - An object that contains the properties of an istaknuta recenzija.
 * @property {'recenzije' | 'svastara'} path - Indicates the path of the current page.
 */
export interface IstaknuteRecenzijeElementProps {
  recenzija: IstaknuteRecenzijeProps;
  path: 'recenzije' | 'svastara';
}

/**
 * @interface ArticleProps
 * @property {AllPostsProps[]} posts - An array of objects that contain the properties of all posts.
 * @property {(value: string) => void} [setSearchTerm] - A callback function that sets the value of searchTerm.
 * @property {string} searchTerm - The current search term.
 */
export interface ArticleProps {
  posts: AllPostsProps[];
  setSearchTerm?: Dispatch<SetStateAction<string>>;
  searchTerm: string;
}
