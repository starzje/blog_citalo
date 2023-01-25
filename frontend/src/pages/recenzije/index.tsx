import { AllPostsProps } from '@/types';
import { useState } from 'react';
import { getStaticProps } from '@/lib/getStaticPropsAllPosts';
import { FC } from 'react';
import { Article, Container, SEO } from 'src/components';

const Posts: FC<{ posts: AllPostsProps[] }> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <Container>
      <SEO
        pageTitle="Čitalo - Recenzije"
        pageDescription="Recenzije knjiga koje sam nedavno pročitala i raznovrsne preporuke za čitanje."
      />
      <div className="mx-auto max-w-screen-xl px-4 md:px-8 relative pt-20">
        <div className="mb-10 md:mb-16">
          <h2 className="text-4xl text-center font-bold leading-tight mb-10 relative text-dark-brown">
            Recenzije
          </h2>

          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Što ti Čitalo nudi? Ovdje ćeš pronaći dojmove o knjigama koje sam
            nedavno pročitala i raznovrsne preporuke za čitanje, a najviše od
            svega ti želim da u moru blještavih korica i tajanstvenih naslova
            pronađeš savršenu knjigu za sebe.
          </p>
        </div>

        {/* SEARCH INPUT STARTS HERE */}
        <div className="mx-auto  max-w-screen-md pb-10 leading-6">
          <form className="mx-auto relative flex  flex-col justify-between rounded-lg border p-2 sm:flex-row sm:items-center sm:p-0 md:w-1/2 w-full">
            <input
              type="name"
              name="search"
              autoComplete="off"
              className="pl-3 w-full  cursor-text rounded-md py-4 outline-double  outline-2 outline-dark-brown ring-light-brown sm:border-0   focus:ring "
              placeholder="Pretraži recenzije:"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="left-0 top-14 absolute z-[999] w-full bg-light-brown divide-y rounded-b-xl shadow-lg sm:mr-32 ">
              {searchTerm !== '' &&
                posts
                  .filter((post) =>
                    post.attributes.title
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                  .map((post) => {
                    return (
                      <div
                        key={post.id}
                        className=" cursor-pointer px-4 py-2 text-gray-600 hover:bg-dark-brown hover:text-white"
                        onClick={() => setSearchTerm(post.attributes.title)}
                      >
                        <span className="m-0 font-medium">
                          {post.attributes.title}
                        </span>
                      </div>
                    );
                  })
                  .slice(0, 4)}
            </div>
          </form>
        </div>

        {/* SEARCH INPUT ENDS HERE */}
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
          {searchTerm === '' ||
          posts.filter((post) =>
            post.attributes.title
              .toLowerCase()
              .includes(searchTerm.toLowerCase())
          ).length === 0
            ? posts.map((post) => {
                return (
                  <Article
                    key={post.id}
                    posts={post}
                  />
                );
              })
            : posts
                .filter((post) =>
                  post.attributes.title
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                )
                .map((post) => {
                  return (
                    <Article
                      key={post.id}
                      posts={post}
                    />
                  );
                })}
        </div>
      </div>
    </Container>
  );
};

export default Posts;

export { getStaticProps };
