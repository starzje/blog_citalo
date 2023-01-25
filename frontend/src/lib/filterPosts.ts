import { AllPostsProps } from '@/types';

export const filterPosts = (posts: AllPostsProps[], searchTerm: string) => {
  if (searchTerm === '') {
    return posts;
  }
  const filteredPosts = posts.filter((post) =>
    post.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return filteredPosts.length === 0 ? posts : filteredPosts;
};

export const filterPostsInput = (
  posts: AllPostsProps[],
  searchTerm: string
) => {
  return searchTerm === ''
    ? posts
    : posts
        .filter((post) =>
          post.attributes.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 4);
};
