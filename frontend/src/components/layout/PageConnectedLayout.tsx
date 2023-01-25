import React, { FC, useState } from 'react';
import { Nav, Footer, MobileMenu } from 'src/components';

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
