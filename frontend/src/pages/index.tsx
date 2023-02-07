import React from 'react';
import { FC } from 'react';
import { Container, SEO, IstaknuteRecenzije, Hero } from 'src/components';
import { getStaticProps } from '@/lib/getStaticPropsNaslovna';
import { NaslovnaProps } from '@/types';

const Home: FC<NaslovnaProps> = ({ recenzije, nedavnipostovi }) => {
  return (
    <Container>
      <SEO
        pageTitle="Čitalo"
        pageDescription="Blog o knjigama. Preporuke za čitanje."
      />

      <Hero />
      <IstaknuteRecenzije
        recenzije={recenzije}
        nedavnipostovi={nedavnipostovi}
      />
    </Container>
  );
};

export default Home;

export { getStaticProps };
