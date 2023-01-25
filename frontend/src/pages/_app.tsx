import { Nav, Footer } from 'src/components';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className=" bg-stone-200 relative">
      <div className="max-w-[1100px] min-h-screen   m-auto ">
        <Nav />
        <Component {...pageProps} />
        <Footer />
      </div>
    </div>
  );
};

export default App;
