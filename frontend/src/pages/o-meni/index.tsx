import SEO from '@/components/SEO';
import React from 'react';
import { FC } from 'react';

const OMeni: FC = () => {
  return (
    <div className="bg-slate-500 min-h-screen px-5">
      <SEO
        pageTitle="Čitalo - O meni"
        pageDescription="Ovdje me možete upoznati malo bolje."
      />
      O meni stranica
    </div>
  );
};

export default OMeni;
