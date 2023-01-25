import { Container, SEO } from 'src/components';
import React from 'react';
import { FC } from 'react';

const OMeni: FC = () => {
  return (
    <Container>
      <SEO
        pageTitle="Čitalo - O meni"
        pageDescription="Ovdje me možete upoznati malo bolje."
      />
      <div className="relative">O meni stranica</div>
    </Container>
  );
};

export default OMeni;
