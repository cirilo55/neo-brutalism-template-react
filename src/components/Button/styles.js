import { createStitches } from '@stitches/react';

const { styled } = createStitches();

export const ButtonWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export const StyledButton = styled('button', {
  backgroundColor: 'black',
  borderRadius: '8px',
  padding: '0',
  border: 'none',
  cursor: 'pointer',
  width: '100%',

  span: {
    display: 'block',
    transform: 'translate(-4px, -4px)',
    borderRadius: '8px',
    border: '2px solid black',
    backgroundColor: '#c585e0',
    padding: '8px',
    fontSize: '1.25rem',
    textAlign: 'center',
    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      transform: 'translate(0, 0)',
    },

    '&:active': {
      transform: 'translate(0, 0)',
    },
  },
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.6, // Reduz a opacidade para indicar que está desativado
    span: {
      backgroundColor: '#e0e0e0', // Fundo cinza para o estado desativado
      borderColor: '#a0a0a0', // Bordas cinzas
    },
  },
});

export const ButtonLabel = styled('span', {
  color: 'black',
  fontWeight: 'bold',
});