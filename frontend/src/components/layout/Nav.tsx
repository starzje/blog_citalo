import { MENI } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';
import logo_citalo from '/public/logo_citalo.png';
import logo from '/public/logo.png';
import Image from 'next/image';

const Nav: FC = () => {
  return (
    <header className="container mx-auto flex items-center relative justify-between py-5 px-4  ">
      <Image
        className="w-[80px] absolute -bottom-4 left-[40%] md:left-[11%] "
        src={logo}
        alt="logo"
        width={80}
      />
      <Link
        href="/"
        className=" flex justify-center items-center "
      >
        <Image
          className="w-[120px]"
          src={logo_citalo}
          alt="logo"
          width={120}
        />
      </Link>
      <p className="hidden md:inline-block border font-light text-[#57453d] border-black p-2 rounded-2xl">
        Trenutno čitam:{' '}
        <span className=" text-[#57453d]">Stephen King - Isijavanje</span>
      </p>
      <nav>
        <ul className="hidden md:flex items-center space-x-1">
          {MENI.map((item) => {
            return (
              <li
                className="px-2 py-1 rounded-md hover:bg-gray-200 font-light"
                key={item.id}
              >
                <Link href={item.putanja}>{item.naslov}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
