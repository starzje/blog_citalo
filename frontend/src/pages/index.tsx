import React from 'react';
import { FC } from 'react';
import SEO from '@/components/SEO';
import LinkButtons from '@/components/UI/LinkButtons';
import Image from 'next/image';
import SvgDivider from '@/components/UI/SvgDivider';
import SvgBackground from '@/components/UI/SvgBackground';
import IstaknuteRecenzije from '@/components/IstaknuteRecenzije';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { getStaticProps } from '@/lib/getStaticPropsSveRecenzije';
import { IstaknuteRecenzijeProps } from '@/types/types';

const Home: FC<{ recenzije: IstaknuteRecenzijeProps[] }> = ({ recenzije }) => {
  return (
    <>
      <SvgBackground />
      <div className="container  mx-auto bg-gray-50 rounded-2xl  min-h-screen shadow-md  ">
        <SEO
          pageTitle="Čitalo Books"
          pageDescription="Blog o knjigama i čitanju, te recenziji knjiga"
        />
        <div className=" flex flex-wrap items-center justify-between  relative  ">
          <div className="w-full md:w-1/2 px-7 md:text-left text-center md:mt-0 mt-10 ">
            <h1 className="text-4xl font-bold leading-tight mb-10 relative text-[#57453d]">
              Blog o knjigama
            </h1>
            <p className="text-base leading-8 tracking-wide mb-5 ">
              Ovaj sićušni kutak interneta zamišljen je kao mjesto posvećeno
              knjigama i čitanju. Budući da si ovdje, vjerujem da si i sam(a)
              zaljubljenik u knjige ili imaš barem motivaciju to postati, a ako
              si tu pak zalutao ili zalutala slučajno - sigurna sam da je baš to{' '}
              bila sudbina.
            </p>
            <div className="w-full justify-center text-center gap-2 pr-2 flex md:flex-row flex-col">
              <LinkButtons
                link="/recenzije"
                label="Pronađi knjigu za sebe"
                icon={<HiOutlineBookOpen />}
              />
              <LinkButtons
                link="https://www.instagram.com/citalo_books/"
                label="Čitalo na Instagramu"
                openInNewTab={true}
                icon={<FaInstagram />}
              />
            </div>
          </div>

          <div className="w-full md:w-[40%] px-6 py-5  ">
            <Image
              aria-label="Slika police s knjigama"
              className="w-full  rounded-lg shadow-md"
              src="/background.jpg"
              alt="Polica s knjigama"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
          <SvgDivider
            firstColor="#e7e5e4"
            secondColor="#EDECEC"
            thirdColor="#EDECEC"
            fourthColor="#e7e5e4"
          />
        </div>
        <div className="relative bg-[#e7e5e4]  shadow-md min-h-screen">
          <>
            <h3 className="pl-6 text-3xl font-bold text-center text-[#57453d]">
              Istaknute recenzije
            </h3>
            <section className="py-8 ">
              <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
                {recenzije.map((recenzija) => {
                  return (
                    <IstaknuteRecenzije
                      key={recenzija.id}
                      recenzija={recenzija}
                    />
                  );
                })}
              </div>
            </section>
          </>
        </div>
      </div>
    </>
  );
};

export default Home;

export { getStaticProps };
