import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import PageConnectedLayout from '@/components/layout/PageConnectedLayout';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className=" bg-stone-200 relative">
      <div className="max-w-[1100px] min-h-screen   m-auto ">
        <PageConnectedLayout>
          <Component {...pageProps} />
        </PageConnectedLayout>
      </div>
    </div>
  );
};

export default App;
