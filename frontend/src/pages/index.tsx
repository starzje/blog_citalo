import React from 'react';
import Link from 'next/link';
import { FC } from 'react';
import SEO from '@/components/SEO';

const Home: FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        pageTitle="Čitalo Books"
        pageDescription="Welcome to my website"
      />
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap items-center -mx-6">
          <div className="w-full md:w-1/2 px-6">
            <h2 className="text-3xl font-medium leading-tight mb-4">
              Welcome to our book store
            </h2>
            <p className="text-lg leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="w-full md:w-1/2">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
                Browse books
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-6">
            <img
              className="w-full rounded-lg shadow-md"
              src="./background.jpg"
              alt="Bookstore"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
