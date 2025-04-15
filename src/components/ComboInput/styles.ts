import { styled } from '@stitches/react';

export const InputWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',

});

export const InputLabel = styled('label', {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#333',
});

export const StyledSelect = styled('select', {
  border: '2px solid #333', // Roxo para borda
  borderRadius: '8px',
  padding: '12px',
  fontSize: '1rem',
  color: '#333',
  outline: 'none',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  transform: 'translate(-4px, -4px)',
  boxShadow: '4px 4px 0px #333', // Sombra roxa para o efeito de queda
  backgroundColor: '#fff', // Fundo branco para o combo box

  '&:focus': {
    transform: 'translate(0, 0)', // Remove o efeito de queda ao focar
    borderColor: '#8a2be2', // Muda a cor da borda ao focar
    boxShadow: 'none', // Remove a sombra ao focar
  },

  '&:hover': {
    transform: 'translate(0, 0)', // Leve elevação ao passar o mouse
    boxShadow: 'none',
  },

  '&:active': {
    transform: 'translate(0, 0)', // Remove o efeito de queda ao clicar
    boxShadow: 'none', // Remove a sombra ao clicar
  },

  '&:disabled': {
    backgroundColor: '#f5f5f5', // Fundo cinza claro para estado desabilitado
    cursor: 'not-allowed',
    borderColor: '#ccc',
    color: '#aaa',
  },
});
