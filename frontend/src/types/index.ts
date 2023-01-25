import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { Dispatch, SetStateAction } from 'react';

type Image = {
  data: {
    attributes: {
      url: string;
    };
  };
};

type Tags = {
  tags: string;
};

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

export interface PostSlugProps {
  attributes: {
    slug: string;
  };
}

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

export interface MobileMenuProps {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export interface IstaknuteRecenzijeElementProps {
  recenzija: IstaknuteRecenzijeProps;
  path: 'recenzije' | 'svastara';
}

export interface ArticleProps {
  posts: AllPostsProps[];
  setSearchTerm?: Dispatch<SetStateAction<string>>;
  searchTerm: string;
}
