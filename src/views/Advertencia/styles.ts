import { styled } from '@stitches/react';

export const FormWrapper = styled('div', {
  maxWidth: '500px',
  margin: '1rem auto',


});

export const FormSection = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: "100%",
  backgroundColor: '#fff',
  padding: '1.75rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',

});

export const FormGroup = styled('div', {
  display: 'flex',
  gap: '8px',
  width: '100%',
  justifyContent: "space-around"
  
});


export const FormLabel = styled('label', {
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#333',
});

export const FormInput = styled('input', {
  padding: '12px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  outline: 'none',
  '&:focus': {
    borderColor: '#007BFF',
  },
});

export const FormSelect = styled('select', {
  padding: '12px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  outline: 'none',
  '&:focus': {
    borderColor: '#007BFF',
  },
});

export const FormTextarea = styled('textarea', {
  padding: '12px',
  fontSize: '14px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  outline: 'none',
  resize: 'vertical',
  '&:focus': {
    borderColor: '#007BFF',
  },
});

export const FormButton = styled('button', {
  padding: '12px 16px',
  fontSize: '14px',
  fontWeight: 'bold',
  color: '#fff',
  backgroundColor: '#007BFF',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
  '&:disabled': {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
});