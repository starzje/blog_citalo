import { AllPostsProps } from '@/types';

/**
 * Filters an array of posts based on the search term provided. If the search term is empty, the original array of posts is returned.
 * @function filterPosts
 * @description Filters posts by title and subtitle based on the search term provided
 * @param {AllPostsProps[]} posts - An array of post objects
 * @param {string} searchTerm - The string to search for in the post titles and subtitles
 * @returns {AllPostsProps[]} - Returns the filtered posts, or all posts if no posts match the search term
 */
export const filterPosts = (posts: AllPostsProps[], searchTerm: string) => {
  if (searchTerm === '') {
    return posts;
  }

  const searchTerms = searchTerm.toLowerCase().split(' ');
  const filteredPosts = posts.filter((post) => {
    const titleWords = post.attributes.title.toLowerCase().split(' ');
    const subtitleWords = (post.attributes.subtitle || '')
      .toLowerCase()
      .split(' ');
    return searchTerms.every(
      (st) =>
        titleWords.some((word) => word.startsWith(st)) ||
        subtitleWords.some((word) => word.startsWith(st))
    );
  });
  return filteredPosts.length === 0 ? posts : filteredPosts;
};
/**
 * Filters an array of posts based on the search term provided, and returns the first 4 matches. If the search term is empty, the original array of posts is returned. Used for the search bar autocomplete suggestion below the input field.
 * @function filterPostsInput
 * @description Filters posts by title and subtitle based on the search term provided, with a max of 4 results
 * @param {AllPostsProps[]} posts - An array of post objects
 * @param {string} searchTerm - The string to search for in the post titles and subtitles
 * @returns {AllPostsProps[]} - Returns the filtered posts, or an empty array if no posts match the search term
 */
export const filterPostsInput = (
  posts: AllPostsProps[],
  searchTerm: string
) => {
  if (searchTerm === '') {
    return posts;
  }

  const searchTerms = searchTerm.toLowerCase().split(' ');
  const filteredPosts = posts.filter((post) => {
    const titleWords = post.attributes.title.toLowerCase().split(' ');
    const subtitleWords = post.attributes.subtitle
      ? post.attributes.subtitle.toLowerCase().split(' ')
      : [];
    const allWords = [...titleWords, ...subtitleWords];
    return searchTerms.every((st) =>
      allWords.some((word) => word.startsWith(st))
    );
  });
  return filteredPosts.length === 0 ? [] : filteredPosts.slice(0, 4);
};
