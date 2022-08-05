import { FC } from "react";
import { InputLabel, StyledInput, InputWrapper } from "./styled";

interface CustomInputProps {
  label?: string;
  m?: string;
  type?: string;
}

const CustomInput: FC<CustomInputProps> = ({ label, m, type }) => {
  return (
    <InputWrapper m={m}>
      <InputLabel>{label}</InputLabel>
      <StyledInput type={type} />
    </InputWrapper>
  );
};

export default CustomInput;
