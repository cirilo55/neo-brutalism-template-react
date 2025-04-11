import { createStitches } from '@stitches/react';

const { styled } = createStitches();

export const TableWrapper = styled('div', {
  width: '100%',
  border: '2px solid black',
  borderRadius: '1px',
  overflow: 'hidden',
  boxShadow: '2px 2px 0px black',
  backgroundColor: '#fff',
});

export const TableSection = styled('section', {
  width: '100%',
  overflowY: 'auto', 
  height: 'calc(70vh - 0.2rem)',
  
  '&::-webkit-scrollbar': {
    width: '12px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#f3f2f2',
    border: '2px solid black',
    borderRadius: '2px',

  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#c585e0',
    border: '2px solid black',
    borderRadius: '2px',
  },
  '&::-webkit-scrollbar-thumb:hover': {
    backgroundColor: '#a45ccf',
  },
});

export const TableHeader = styled('div', {
  color: '#fff',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  padding: "0.25rem 0.1rem",
  borderBottom: '2px solid black',
  height: 'calc(10vh- 0.2rem)'

});

export const TableBody = styled('div', {
  padding: '.2rem',
  height: 'calc(60vh - 0.2rem)',
});

export const TableFooter = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
});

export const TableRow = styled('div', {
  display: 'grid',
  // gridTemplateColumns: '4fr 1fr 1fr 1fr 1fr',
  alignItems: 'center',
  borderBottom: '2px solid #e0e0e0',
  height: "5.85vh",
  alignItems: 'center',
  '&:last-child': {
    borderBottom: 'none',
  },
  '&:hover': {
    backgroundColor: '#f5f5f5', // Cor de fundo ao passar o mouse
    transform: 'scale(1.01)', // Leve aumento no tamanho
  },
  variants: {
    clickable: {
      true: {
        cursor: 'pointer', // Cursor de ponteiro se for clicável

      },
      false: {
        cursor: 'default', // Cursor padrão se não for clicável
      },
    },
  },
});

export const TableCell = styled('div', {
  padding: '0.1rem 0.25rem',
  fontSize: '0.75rem',
  color: '#333',
  display: "flex",
  
  '&[as="th"]': {
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export const ButtonOutlined = styled('button', {
  backgroundColor: 'transparent',
  color: '#333',
  border: '2px solid black',
  borderRadius: '4px',
  padding: '0.5rem 1rem',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.2s, color 0.2s',

  '&:hover': {
    boxShadow: '#f3f2f2',
    color: '#000',

  },

  '&:active': {
    boxShadow: '1px 1px 0px black',
    transform: 'translate(1px, 1px)',
  },

  '&:focus': {
    outline: 'none',
  },
});

export const ComponentWrapper = styled('div', {
  height: '100%',
});