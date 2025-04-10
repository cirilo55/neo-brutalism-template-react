import React from 'react';
import { ButtonWrapper, StyledButton, ButtonLabel } from './styles';

interface ButtonProps {
    children: React.ReactNode; 
    color?: string; 
    isLoading?: boolean;
    isDisabled?: boolean;
    onClick?: () => void; // Adiciona a propriedade onClick


}
  

export default function Button({onClick, children,color,isLoading, isDisabled,  ...props }: ButtonProps) {
    return (
    <ButtonWrapper>
      <StyledButton {...props} style={{ backgroundColor: color }}
              disabled={isDisabled || isLoading} // Desativa o botão se `isDisabled` ou `isLoading` for true
              onClick={onClick}
      >
        <ButtonLabel>{children}</ButtonLabel>
      </StyledButton>
    </ButtonWrapper>
  );
}