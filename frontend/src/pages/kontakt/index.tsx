import { Container, SEO } from 'src/components';
import React from 'react';
import { FC } from 'react';

const kontakt: FC = () => {
  return (
    <Container>
      <SEO
        pageTitle="Čitalo - Kontakt"
        pageDescription="Ovdje me možete kontaktirati za sve što vas zanima."
      />
      kontakt
    </Container>
  );
};

export default kontakt;
