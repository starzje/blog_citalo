import { AllPostsProps } from '@/types';
import React from 'react';
import { getStaticProps } from '@/lib/getStaticPropsAllPosts';
import { FC } from 'react';
import { Article, SEO } from 'src/components';

const Posts: FC<{ posts: AllPostsProps[] }> = ({ posts }) => {
  return (
    <section className="bg-white py-6 sm:py-8 lg:py-12 min-h-screen">
      <SEO
        pageTitle="Čitalo - Recenzije"
        pageDescription="Recenzije knjiga koje sam nedavno pročitala i raznovrsne preporuke za čitanje."
      />
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Recenzije
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Što ti Čitalo nudi? Ovdje ćeš pronaći dojmove o knjigama koje sam
            nedavno pročitala i raznovrsne preporuke za čitanje, a najviše od
            svega ti želim da u moru blještavih korica i tajanstvenih naslova
            pronađeš savršenu knjigu za sebe.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
          {posts.map((post) => {
            return (
              <Article
                key={post.id}
                posts={post}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Posts;

export { getStaticProps };
