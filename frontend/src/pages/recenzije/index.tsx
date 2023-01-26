import { AllPostsProps } from '@/types';
import { useState, FC } from 'react';
import { getStaticProps } from '@/lib/getStaticPropsAllPosts';
import {
  Container,
  SEO,
  RenderedArticles,
  InputSearchBar,
} from 'src/components';

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
        <InputSearchBar
          posts={posts}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
        />
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-2 xl:grid-cols-2 xl:gap-16">
          <RenderedArticles
            posts={posts}
            searchTerm={searchTerm}
          />
        </div>
      </div>
    </Container>
  );
};

export default Posts;

export { getStaticProps };
