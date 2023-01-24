import SEO from '@/components/SEO';
import React from 'react';
import { FC } from 'react';

const kontakt: FC = () => {
  return (
    <div className="bg-slate-500 min-h-screen px-5">
      <SEO
        pageTitle="Čitalo - Kontakt"
        pageDescription="Ovdje me možete kontaktirati za sve što vas zanima."
      />
      kontakt
    </div>
  );
};

export default kontakt;
