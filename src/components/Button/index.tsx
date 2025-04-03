import React from 'react';
import { ButtonWrapper, StyledButton, ButtonLabel } from './styles';

interface ButtonProps {
    children: React.ReactNode; // Children to render inside the button
}
  

export default function Button({ children }: ButtonProps) {
    return (
    <ButtonWrapper>
      <StyledButton>
        <ButtonLabel>{children}</ButtonLabel>
      </StyledButton>
    </ButtonWrapper>
  );
}