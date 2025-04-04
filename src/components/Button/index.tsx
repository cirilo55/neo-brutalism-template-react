import React from 'react';
import { ButtonWrapper, StyledButton, ButtonLabel } from './styles';

interface ButtonProps {
    children: React.ReactNode; 
    color?: string; 

}
  

export default function Button({ children,color,  ...props }: ButtonProps) {
    return (
    <ButtonWrapper>
      <StyledButton {...props} style={{ backgroundColor: color }}>
        <ButtonLabel>{children}</ButtonLabel>
      </StyledButton>
    </ButtonWrapper>
  );
}