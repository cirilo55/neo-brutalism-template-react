import React from 'react';
import { InputWrapper, StyledInput, InputLabel } from './styles';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
  isLoading?: boolean;
  autoComplete?: string;
  isDisabled?: boolean;
}

export default function Input({ label, type = 'text', value, onChange,  autoComplete,placeholder,isLoading=false,isDisabled=false, ...props}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled || isLoading} // Desativa o input se `isDisabled` ou `isLoading` for true
        autoComplete={autoComplete} // Passa o autoComplete para o input
        {...props}
      />
    </InputWrapper>
  );
}