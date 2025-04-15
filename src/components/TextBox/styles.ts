import { createStitches } from '@stitches/react';

const { styled } = createStitches();

export const InputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

});

export const InputLabel = styled('label', {
  fontSize: '1rem',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: '8px',
});

export const StyledTextArea = styled('textarea', {
    border: '2px solid #333', // Roxo para borda
    borderRadius: '8px',
    padding: '12px',
    fontSize: '1rem',
    color: '#333',
    outline: 'none',
    resize: 'vertical', // Permite redimensionar verticalmente
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    transform: 'translate(-4px, -4px)',
    boxShadow: '4px 4px 0px #333', // Sombra roxa para o efeito de queda
    backgroundColor: '#fff',
  
    '&:focus': {
      transform: 'translate(0, 0)', // Remove o efeito de queda ao focar
      borderColor: '#8a2be2', // Muda a cor da borda ao focar
      boxShadow: 'none', // Remove a sombra ao focar
    },
  
    '&:hover': {
      transform: 'translate(0, 0)', // Leve elevação ao passar o mouse
      boxShadow: 'none',
    },
  
    '&:disabled': {
      backgroundColor: '#f5f5f5', // Fundo cinza claro para estado desabilitado
      cursor: 'not-allowed',
      borderColor: '#ccc',
      color: '#aaa',
    },
  });