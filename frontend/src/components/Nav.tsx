import { MENI } from '@/constants';
import Link from 'next/link';
import React from 'react';
import { FC } from 'react';

const Nav: FC = () => {
  return (
    <div className="flex justify-between py-5">
      <div>
        <Link
          className="text-2xl font-bold"
          href="/"
        >
          CitaloBooks
        </Link>
      </div>
      <ul className="md:flex items-center space-x-1">
        {MENI.map((item) => {
          return (
            <li
              className="px-2 py-1 rounded-md hover:bg-gray-200"
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
