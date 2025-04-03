import { AppProps } from 'next/app';
import globalStyles from '@/styles/globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  // Aplica os estilos globais
  globalStyles();

  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;