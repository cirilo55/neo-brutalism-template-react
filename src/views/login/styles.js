import { createStitches } from '@stitches/react';

const { styled } = createStitches();

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: 'linear-gradient(to top, #cda5dd, #c585e0)', // Gradiente de branco para roxo
});

export const Form = styled('form', {
  backgroundColor: '#fff',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  width: '400px',
  margin: '2rem',
});

export const Title = styled('h2', {
  marginBottom: '20px',
  textAlign: 'center',
  fontSize: '24px',
  color: '#b45cda',
  textTransform: 'uppercase',
});

export const InputGroup = styled('div', {
  marginBottom: '15px',
});

export const Label = styled('label', {
  display: 'block',
  marginBottom: '5px',
  fontSize: '14px',
  color: '#555',
});

export const Row = styled('div', {
  width: '100%',
  display: 'flex',
  marginTop: '1rem',
});