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
      O meni stranica
    </Container>
  );
};

export default OMeni;
