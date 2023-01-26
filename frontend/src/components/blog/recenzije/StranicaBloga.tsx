import { StranicaBlogaProps } from '@/types';
import React from 'react';
import { SEO, InputSearchBar, RenderedArticles } from 'src/components';

const StranicaBloga: React.FC<StranicaBlogaProps> = ({
  posts,
  setSearchTerm,
  searchTerm,
  pageSeoTitle,
  pageSeoDescription,
  title,
  description,
  pathPrefix,
}) => {
  return (
    <>
      <SEO
        pageTitle={pageSeoTitle}
        pageDescription={pageSeoDescription}
      />
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 relative py-20">
        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl text-center font-bold leading-tight mb-10 relative text-dark-brown">
            {title}
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            {description}
          </p>
        </div>
        <InputSearchBar
          posts={posts}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
          <RenderedArticles
            pathprefix={pathPrefix}
            posts={posts}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </>
  );
};

export default StranicaBloga;
