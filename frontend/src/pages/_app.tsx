import Nav from '@/components/Nav';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="max-w-[700px] m-auto">
      <Nav />
      <Component {...pageProps} />
    </div>
  );
}
