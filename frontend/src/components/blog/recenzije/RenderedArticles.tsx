import { filterPosts } from '@/lib/filterPosts';
import { ArticleProps } from '@/types';
import React, { FC, useMemo } from 'react';
import Article from './Article';

const RenderedArticles: FC<ArticleProps> = ({ posts, searchTerm }) => {
  const filteredPosts = useMemo(
    () => filterPosts(posts, searchTerm),
    [posts, searchTerm]
  );

  return (
    <>
      {filteredPosts.map((post) => (
        <Article
          key={post.id}
          posts={post}
        />
      ))}
    </>
  );
};

export default RenderedArticles;
