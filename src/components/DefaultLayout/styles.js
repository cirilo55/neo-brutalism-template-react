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
  fontWeight: 'bold',
  color: '#c585e0',
  marginBottom: '20px',
  textAlign: 'center',
});

export const SidebarItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '.25rem',
  fontSize: '.75rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  padding: '10px',
  border: '2px solid transparent', // Borda inicial invisível
  transition: 'transform 0.2s ease-in-out, border-color 0.2s ease-in-out',

  '&:hover': {
    transform: 'translateX(4px)', // Leve movimento ao passar o mouse
    borderColor: 'white', // Borda branca ao passar o mouse
    borderRadius: '4px',

  },

  '&.active': {
    backgroundColor: '#5c5c5cad', // Cor de fundo para o item ativo
    color: '#c585e0',
    borderColor: '#e7d9ec',
    borderRadius: '4px',
    

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
  height: '10vh',
  display: 'flex',
  alignItems: 'center',
  padding: '0 20px',
  borderBottom: '2px solid #c585e0', // Borda inferior 
});

export const HeaderTitle = styled('h1', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: '#333',
});

export const Content = styled('div', {
  overflowY: 'auto',
  width: '100%', 
  height: '90vh;', // Altura total menos o cabeçalho
});

export const StageWrapper= styled('div', {
  width: '100%',
  height: '100vh', // Altura total 
  backgroundColor: '#f8f8ec',
})

export const BackIcon = styled('button', {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  marginRight: '16px',
  fontSize: '1.5rem',
  color: '#c585e0',
  display: 'flex',
  alignItems: 'center',
  transition: 'color 0.2s ease',

  '&:hover': {
    color: '#c585e0',
  },
});