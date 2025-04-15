import React from 'react';
import { InputWrapper, StyledTextArea, InputLabel } from './styles';

interface TextBoxProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  isDisabled?: boolean;
  rows?: number;
  props?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
}

export default function TextBox({
  label,
  value,
  onChange,
  placeholder,
  isDisabled = false,
  rows = 4,
  ...props
}: TextBoxProps) {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledTextArea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={isDisabled}
        rows={rows}
        {...props}
      />
    </InputWrapper>
  );
}