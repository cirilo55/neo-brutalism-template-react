import { createStitches } from '@stitches/react';

const { styled } = createStitches();

export const Container = styled('div', {

});

export const ProfileCard = styled('div', {
  backgroundColor: '#fff',
  border: '2px solid #000',
  borderRadius: '8px',
  width: '600px',
  boxShadow: '4px 4px 0px #000',
  padding: '1rem',

  '.profile-header': {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',

    '.profile-picture': {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      border: '2px solid #000',
    },

    h2: {
      margin: 0,
      fontSize: '24px',
      fontWeight: 'bold',
    },

    p: {
      margin: 0,
      color: '#666',
    },

    '.role': {
      display: 'inline-block',
      marginTop: '8px',
      padding: '4px 8px',
      backgroundColor: '#c585e0',
      color: '#fff',
      borderRadius: '4px',
      fontSize: '12px',
      fontWeight: 'bold',
    },
  },

  '.actions': {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '20px',
  },
});

export const InfoGroup = styled('div', {
  marginTop: '20px',
});

export const InfoRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 0',
  borderBottom: '1px solid #ddd',
  alignItems: 'center',
  fontSize: '14px',

  span: {
    fontSize: '14px',
    fontWeight: 'bold',
  },
});

export const Button = styled('button', {
  padding: '10px 20px',
  fontSize: '14px',
  fontWeight: 'bold',
  border: '2px solid #000',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#fff',
  color: '#000',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '#f0f0f0',
  },

  variants: {
    primary: {
      true: {
        backgroundColor: '#c585e0',
        color: '#fff',

        '&:hover': {
          backgroundColor: '#b06ed0',
        },
      },
    },
  },
});

export const OutlinedButton = styled('button', {
  padding: '10px 20px',
  fontSize: '14px',
  fontWeight: 'bold',
  border: '2px solid #c585e0',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#fff',
  color: '#c585e0',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '#f0f0f0',
  },

  variants: {
    primary: {
      true: {
        backgroundColor: '#c585e0',
        color: '#000',

        '&:hover': {
          backgroundColor: '#b06ed0',
          color: '#000',

        },
      },
    },
  },
});

export const Tabs = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  gap: '16px',
  paddingTop: '.25rem',
  paddingBottom: '.25rem',
});

export const TabButton = styled('button', {
  padding: '10px 20px',
  fontSize: '14px',
  fontWeight: 'bold',
  border: '2px solid #000',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: '#fff',
  color: '#000',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    backgroundColor: '#f0f0f0',
  },

  variants: {
    active: {
      true: {
        backgroundColor: '#c585e0',
        color: '#fff',
        '&:hover': {
          backgroundColor: '#b06ed0',
        },
      },
    },
  },
});

export const TabContent = styled('div', {
});

