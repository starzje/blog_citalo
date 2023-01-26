import { filterPosts } from '@/lib/filterPosts';
import { ArticleProps } from '@/types';
import React, { FC, useMemo } from 'react';
import Article from './Article';

const RenderedArticles: FC<ArticleProps> = ({ posts, searchTerm }) => {
  /**
   * @function
   * @param {Object[]} posts - an array of objects representing the posts
   * @param {string} searchTerm - the term to filter the posts by
   * @returns {Object[]} - an array of filtered posts that match the search term
   */
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
