import Image from 'next/image';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { LinkButtons, SvgDivider } from 'src/components';

const Hero = () => {
  return (
    <section className=" flex flex-wrap items-center justify-between pb-10  relative  ">
      <div className="w-full md:w-1/2 px-7 md:text-left text-center md:mt-0 mt-10 ">
        <h1 className="text-4xl font-bold leading-tight mb-10 relative text-dark-brown">
          Čitalo - Danas čitam.
          <br />
          <span className="text-3xl font-normal text-black/70">
            Blog o knjigama
          </span>
        </h1>
        <p className="font-medium leading-8 tracking-wide mb-5 ">
          Ovaj sićušni kutak interneta zamišljen je kao mjesto posvećeno
          knjigama i čitanju. Budući da si ovdje, vjerujem da si i sam(a)
          zaljubljenik u knjige ili imaš barem motivaciju to postati, a ako si
          tu pak zalutao ili zalutala slučajno - sigurna sam da je baš to bila
          sudbina.
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
      <div className="w-full md:w-[40%] px-6 py-5 ">
        <Image
          priority={true}
          aria-label="Slika police s knjigama"
          className="w-full  rounded-lg shadow-md"
          src="/background.jpg"
          alt="Polica s knjigama"
          width={500}
          height={500}
        />
      </div>
      <SvgDivider
        firstColor="#e7e5e4"
        secondColor="#EDECEC"
        thirdColor="#EDECEC"
        fourthColor="#e7e5e4"
      />
    </section>
  );
};

export default Hero;
