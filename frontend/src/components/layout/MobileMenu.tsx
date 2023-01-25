import { MENI } from '@/constants';
import { MobileMenuProps } from '@/types';
import Link from 'next/link';
import React, { FC } from 'react';

const MobileMenu: FC<MobileMenuProps> = ({ setIsOpen }) => {
  return (
    <>
      <div className=" overflow-hidden h-[calc(100vh-85px)]  bg-[#57453d]">
        <nav>
          <ul className=" items-center space-x-1">
            {MENI.map((item) => {
              return (
                <li
                  className="mt-4"
                  key={item.id}
                >
                  <Link
                    //Stavljen setTimeout da bi se stranica stigla ucitati prije nego se zatvori meni
                    onClick={() =>
                      setTimeout(() => {
                        setIsOpen((prev) => !prev);
                      }, 300)
                    }
                    className="py-4 block text-center text-xl  text-white rounded-md hover:bg-[#e7e5e4] hover:text-[#57453d] font-light transition duration-300"
                    href={item.putanja}
                  >
                    {item.naslov}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
