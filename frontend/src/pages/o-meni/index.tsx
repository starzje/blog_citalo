import { Container, SEO } from 'src/components';
import React from 'react';
import { FC } from 'react';
import Image from 'next/image';

const OMeni: FC = () => {
  return (
    <Container>
      <SEO
        pageTitle="Čitalo - O meni"
        pageDescription="Ovdje me možete upoznati malo bolje."
      />
      <div className=" flex flex-col md:flex-row gap-10 relative px-3 py-10 md:px-20 ">
        <h2 className="inline-block md:hidden text-4xl text-center font-bold leading-tight text-dark-brown">
          Tko se krije iza Čitala?
        </h2>
        <div className="w-full my-auto md:w-1/2 ">
          <Image
            className="h-[35em] w-full object-cover border-[15px] rounded-lg  border-light-brown"
            alt={'Fotografija knjige'}
            src="/ja.jpg"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full md:w-1/2 font-[300] flex flex-col  items-center">
          <h2 className="hidden md:inline-block text-4xl text-center font-bold leading-tight text-dark-brown">
            Tko se krije iza Čitala?
          </h2>
          <p className="  font-light  leading-loose  pt-0 md:pt-5  text-justify">
            Jedna Tamara, zaljubljena u knjige.
            <br />
            Čitalo je nastalo 13.01.2021. godine otvaranjem Instagram profila
            posvećenog knjigama, a u međuvremenu se oko njega okupila mala, ali
            moćna zajednica knjigoljubaca. Važno je reći da nisam stručna
            ponuditi vam recenzije na razini književnih kritičara niti je Čitalo
            na taj način zamišljeno, već vam prije svega želim pružiti iskrene
            dojmove o pročitanim knjigama iz perspektive prosječnog čitatelja i
            dugogodišnjeg knjiškog moljca, zaljubljenika u nove i daleke
            svjetove, međuljudske odnose, i emocije koje knjige u meni bude.
            📍Zagreb
          </p>
        </div>
      </div>
    </Container>
  );
};

export default OMeni;
