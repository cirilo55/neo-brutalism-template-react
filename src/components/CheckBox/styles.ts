import { createStitches } from '@stitches/react';

const { styled } = createStitches();

export const CheckboxWrapper = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
});

export const StyledCheckbox = styled('input', {
  appearance: 'checkbox', // Usa o checkbox padrão do HTML
  width: '20px',
  height: '20px',
  border: '2px solid black',
  borderRadius: '4px',
  backgroundColor: '#fff',
  cursor: 'pointer',

  '&:checked': {
    backgroundColor: '#c585e0', // Fundo roxo para o estado marcado
    borderColor: '#000', // Borda preta
  },

  '&:checked::after': {
    content: '""', // Remove qualquer pseudo-elemento adicional
  },
});

export const CheckboxLabel = styled('label', {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#000',
});