import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface ListOfAllPostsProps {
  posts: AllPostsProps[];
}

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
    content: string;
    description: string;
    slug: string;
    category: string;
  };
}
