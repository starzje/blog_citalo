import React, { FC, useState } from 'react';
import MobileMenu from '../MobileMenu';
import Footer from './Footer';
import Nav from './Nav';

const PageConnectedLayout: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Nav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {!isOpen ? (
        <>
          {children}
          <Footer />
        </>
      ) : (
        <MobileMenu setIsOpen={setIsOpen} />
      )}
    </>
  );
};

export default PageConnectedLayout;
