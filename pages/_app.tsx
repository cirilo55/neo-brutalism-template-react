import { AppProps } from 'next/app';
import globalStyles from '@/styles/globalStyles';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Component {...pageProps} />
      <Toaster
        position="bottom-center" // Posiciona no centro inferior
        toastOptions={{
          style: {
            background: '#fff', // Fundo branco
            color: '#000', // Texto preto
            border: '2px solid #000', // Bordas pretas grossas
            boxShadow: '4px 4px 0px #000', // Sombra brutalista
            fontFamily: 'Arial, sans-serif', // Fonte simples
            fontWeight: 'bold', // Texto em negrito
            fontSize: '12px', // Tamanho da fonte
          },
          success: {
            style: {
              background: '#d4f4dd', // Fundo verde claro para sucesso
              border: '2px solid #4caf50', // Bordas verdes
            },
          },
          error: {
            style: {
              background: '#fddede', // Fundo vermelho claro para erro
              border: '2px solid #f44336', // Bordas vermelhas
            },
          },
        }}
      />
    </>
  );
}

export default MyApp;