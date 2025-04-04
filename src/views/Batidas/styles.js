import { createStitches } from '@stitches/react';

const { styled } = createStitches();

export const FilterWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  marginBottom: '1rem',
});

export const FilterInput = styled('input', {
  padding: '0.5rem 1rem',
  border: '1px solid black', // Borda preta sutil
  borderRadius: '4px',
  backgroundColor: 'transparent',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#333',
  boxShadow: '2px 2px 0px #000', // Sombra inicial
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',

  '&:hover': {
    transform: 'translate(2px, 2px)', // Efeito de afundar
    boxShadow: '0px 0px 0px #000', // Remove a sombra
  },

  '&:focus': {
    outline: 'none',
    transform: 'translate(2px, 2px)', // Mantém o efeito de afundar
    boxShadow: '0px 0px 0px #000', // Remove a sombra
  },
});

export const FilterButton = styled('button', {
  padding: '0.5rem 1rem',
  border: '1px solid black', // Borda preta sutil
  borderRadius: '4px',
  backgroundColor: 'transparent',
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#333',
  cursor: 'pointer',
  boxShadow: '2px 2px 0px #000', // Sombra inicial
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',

  '&:hover': {
    transform: 'translate(2px, 2px)', // Efeito de afundar
    boxShadow: '0px 0px 0px #000', // Remove a sombra
  },

  '&:active': {
    transform: 'translate(4px, 4px)', // Afunda ainda mais ao clicar
    boxShadow: '0px 0px 0px #000', // Remove completamente a sombra
  },
});