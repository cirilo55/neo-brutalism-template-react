import React from "react";
import { InputWrapper, InputLabel, StyledInput } from "./styles";

type HoursInputProps = {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const HoursInput: React.FC<HoursInputProps> = ({ label, value, onChange, placeholder = "HH:MM" }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // Remove caracteres não numéricos
    inputValue = inputValue.replace(/\D/g, "");

    // Aplica a máscara de horário (HH:MM)
    if (inputValue.length > 2) {
      inputValue = inputValue.slice(0, 2) + ":" + inputValue.slice(2, 4);
    }

    // Limita o tamanho máximo a 5 caracteres (HH:MM)
    if (inputValue.length > 5) {
      inputValue = inputValue.slice(0, 5);
    }

    onChange(inputValue);
  };

  return (
    <InputWrapper>
      {label && <InputLabel>{label}</InputLabel>}
      <StyledInput
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        maxLength={5} // Limita o número máximo de caracteres no input
      />
    </InputWrapper>
  );
};

export default HoursInput;