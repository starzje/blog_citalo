import { AllPostsProps } from '@/types';
import { useState, FC } from 'react';
import { getStaticProps } from '@/lib/getStaticPropsAllSvastara';
import { Container, StranicaBloga } from 'src/components';

const Svastara: FC<{ posts: AllPostsProps[] }> = ({ posts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Container>
      <StranicaBloga
        title="Svaštara"
        description="Što ti Čitalo nudi? Ovdje ćeš pronaći dojmove o knjigama koje sam
            nedavno pročitala i raznovrsne preporuke za čitanje, a najviše od
            svega ti želim da u moru blještavih korica i tajanstvenih naslova
            pronađeš savršenu knjigu za sebe."
        pageSeoDescription="Svaštara o svemu i svačemu."
        pageSeoTitle="Čitalo - Svaštara"
        pathPrefix="svastara"
        posts={posts}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    </Container>
  );
};

export default Svastara;

export { getStaticProps };
