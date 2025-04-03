import { createStitches } from '@stitches/react';

const { styled } = createStitches();

export const LayoutWrapper = styled('div', {
  display: 'flex',
  height: '100vh',
  width: '100vw',
});

export const Sidebar = styled('div', {
  width: '250px',
  backgroundColor: 'black',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  padding: '20px',
  boxShadow: '4px 0 0 #c585e0', // Efeito de borda brutalista
});

export const IconBox = styled('div', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#c585e0',
  marginBottom: '20px',
  textAlign: 'center',
});

export const SidebarItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  padding: '10px',
  border: '2px solid transparent', // Borda inicial invisível
  transition: 'transform 0.2s ease-in-out, border-color 0.2s ease-in-out',

  '&:hover': {
    transform: 'translateX(4px)', // Leve movimento ao passar o mouse
    borderColor: 'white', // Borda branca ao passar o mouse
  },

  '&.active': {
    backgroundColor: '#c585e0', // Cor de fundo para o item ativo
    color: 'white',
    borderColor: '#c585e0',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    textDecoration: 'none',
    color: 'inherit',
  },

  svg: {
    fontSize: '1.5rem',
  },

  span: {
    color: 'inherit',
  },
});

export const Header = styled('div', {
  height: '60px',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  borderBottom: '2px solid #c585e0', // Borda inferior 
});

export const HeaderTitle = styled('h1', {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#333',
});

export const Content = styled('div', {
  flexGrow: 1, // Faz o Content ocupar o espaço restante
  padding: '20px',
  height: 'calc(100vh - 60px)', // Altura total menos o cabeçalho
  overflowY: 'auto',
  width: '100%', 
});

export const StageWrapper= styled('div', {
  width: '100%',
  backgroundColor: '#feffcb',

})