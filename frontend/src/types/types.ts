import { MDXRemoteSerializeResult } from 'next-mdx-remote';

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
    image: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}
