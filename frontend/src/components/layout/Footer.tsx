import React from 'react';

const Footer = () => {
  return (
    <div className="fixed w-full bg-white z-[999] left-0 bottom-0">
      <p className="text-center text-black py-2">
        © Čitalo 2023 Website by:{' '}
        <a
          href="https://www.ivan-starcevic.com"
          target="_blank"
        >
          Ivan Starčević
        </a>
      </p>
    </div>
  );
};

export default Footer;
