import React, { FC } from 'react';
import SvgBackground from '../UI/SvgBackground';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <>
      <SvgBackground />
      <main className="container  mx-auto bg-gray-50 rounded-2xl  min-h-screen shadow-md  ">
        {children}
      </main>
    </>
  );
};

export default Container;
