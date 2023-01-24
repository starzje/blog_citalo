import { MENI } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';

const Nav: FC = () => {
  return (
    <div className="container mx-auto flex relative justify-between py-5 px-4  ">
      <img
        className="w-[80px] absolute -bottom-4 left-[40%] md:left-[11%] "
        src="/logo.png"
      />
      <div className=" flex justify-center items-center ">
        <img
          className="w-[120px]"
          src="./logo_citalo.png"
        />
      </div>
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
    </div>
  );
};

export default Nav;
