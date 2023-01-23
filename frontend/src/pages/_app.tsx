import Nav from '@/components/Nav';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className=" bg-stone-900  ">
      <div className="max-w-[1100px] m-auto">
        <Nav />
        <Component {...pageProps} />
      </div>
    </div>
  );
}
