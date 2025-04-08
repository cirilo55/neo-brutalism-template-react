import { AppProps } from 'next/app';
import globalStyles from '@/styles/globalStyles';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;