import React from 'react';
import { FC } from 'react';
import { Container, SEO } from 'src/components';
import { getStaticProps } from '@/lib/getStaticPropsNaslovna';
import { IstaknuteRecenzijeProps, NedavniPostoviProps } from '@/types';
import Hero from '@/components/naslovnica/Hero';
import IstaknuteRecenzije from '@/components/naslovnica/IstaknuteRecenzije';

interface NaslovnaProps {
  recenzije: IstaknuteRecenzijeProps[];
  nedavnipostovi: NedavniPostoviProps[];
}

const Home: FC<NaslovnaProps> = ({ recenzije, nedavnipostovi }) => {
  return (
    <Container>
      <SEO
        pageTitle="Čitalo Books"
        pageDescription="Blog o knjigama i čitanju, te recenziji knjiga"
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
