import { createStitches } from '@stitches/react';


export const { globalCss, styled } = createStitches({
  theme: {
    fonts: {
      body: 'Roboto, sans-serif',
    },
  },
});

const globalStyles = globalCss({
  ':root': {
    '--cui-secondary': '#6c757d',
    '--cui-success': '#28a745',
    '--cui-info': '#17a2b8',
    '--cui-warning': '#ffc107',
    '--cui-danger': '#dc3545',
    '--cui-light': '#f8f9fa',
    '--cui-dark': '#343a40',
  },
  '@font-face': [
    {
      fontFamily: 'Roboto',
      src: 'url(/fonts/Roboto-Regular.woff2) format("woff2")',
      fontWeight: '400',
      fontStyle: 'normal',
    },
    {
      fontFamily: 'Roboto',
      src: 'url(/fonts/Roboto-Bold.woff2) format("woff2")',
      fontWeight: '700',
      fontStyle: 'normal',
    },
  ],
  '*': {
    fontFamily: "'Roboto', sans-serif",
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f3f2f2',
  },
  'h-100':{
    height: '100%',
  },
  '.d-flex-center': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  '.d-flex-a-end': {
    display: 'flex',
    alignItems: 'end',
  },
  '.text-center': {
    textAlign: 'center',
  },
  '.w-100': {
    width: '100%',
  },
  '.d-flex-end': {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
  '.d-flex-between': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  '.text-muted': {
    color: '#a3a6a8 !important',
    fontSize: '10px',
  },
  '.invalid-feedback': {
    color: 'red',
    fontSize: '10px',
  },
  '.required-asterisk': {
    color: 'red',
  },
  '.no-style-button': {
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  '.tab-pane': {
    padding: '0 !important',
  },
  '.ml-auto': {
    marginLeft: 'auto',
  },
  '.m-0': {
    margin: '0 !important',
  },
  '.mt-1': {
    marginTop: '0.25rem',
  },
  '.mt-2': {
    marginTop: '0.5rem',
  },
  '.mt-3': {
    marginTop: '0.75rem',
  },
  '.mt-4': {
    marginTop: '1rem',
  },
  '.row': {
    // margin: '0 !important',
  },
  '.p-0': {
    padding: '0 !important',
  },
  '.p-4':{
    padding: '2rem',
  },
  '.py-4': {
    paddingLeft: '1rem',
    paddingRight: '1rem',
  },
  '.mb-1': {
    marginBottom: '0.25rem',
  },
  '.mb-2': {
    marginBottom: '0.5rem',
  },
  '.f-bold': {
    fontWeight: 'bold',
  },
  '.p-8': {
    padding: '4rem',
  },
  '.f-small': {
    fontSize: 'small',
  },
  '.px-8': {
    paddingRight: '4rem',
    paddingLeft: '4rem',
  },
  '.p-2': {
    padding: '1rem',
  },
  ".w-25":{
    width: '25%',
  }
}); 

export default globalStyles;