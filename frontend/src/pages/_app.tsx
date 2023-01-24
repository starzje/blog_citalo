import Footer from '@/components/layout/Footer';
import Nav from '@/components/layout/Nav';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=" bg-stone-200 relative">
      <div className="max-w-[1100px] min-h-screen   m-auto ">
        <Nav />

        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
}
