import React from 'react';
import { InputWrapper, StyledInput, InputLabel } from './styles';

interface InputProps {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  props?: React.InputHTMLAttributes<HTMLInputElement>;
}

export default function Input({ label, type = 'text', value, onChange, placeholder, ...props}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </InputWrapper>
  );
}