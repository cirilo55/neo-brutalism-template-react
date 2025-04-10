import React from 'react';
import { CheckboxWrapper, StyledCheckbox, CheckboxLabel } from './styles';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <CheckboxWrapper>
      <StyledCheckbox
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <CheckboxLabel>{label}</CheckboxLabel>
    </CheckboxWrapper>
  );
}