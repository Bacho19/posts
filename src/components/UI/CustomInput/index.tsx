import { FC, HTMLAttributes } from "react";
import {
  InputLabel,
  StyledInput,
  InputWrapper,
  InputErrorMessage,
} from "./styled";

interface CustomInputProps extends HTMLAttributes<HTMLInputElement> {
  value: string;
  label?: string;
  m?: string;
  type?: string;
  name?: string;
  errorMessage?: string;
}

const CustomInput: FC<CustomInputProps> = ({
  label,
  m,
  type,
  value,
  onChange,
  onBlur,
  name,
  errorMessage,
}) => {
  return (
    <InputWrapper m={m}>
      <InputLabel isError={!!errorMessage}>{label}</InputLabel>
      <InputErrorMessage>
        {errorMessage ? "* " + errorMessage : ""}
      </InputErrorMessage>
      <StyledInput
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
      />
    </InputWrapper>
  );
};

export default CustomInput;
