import React from 'react';
import { InputWrapper, InputLabel, StyledSelect } from './styles';

interface ComboInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
  isDisabled?: boolean;
  placeholder?: string;
}

export default function ComboInput({
  label,
  value,
  onChange,
  options,
  isDisabled = false,
  placeholder = 'Selecione uma opção',
}: ComboInputProps) {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledSelect value={value} onChange={onChange} disabled={isDisabled}>
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </InputWrapper>
  );
}