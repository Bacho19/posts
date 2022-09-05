import { ChangeEvent, FC, FocusEvent } from "react";
import {
  InputLabel,
  StyledInput,
  InputWrapper,
  InputErrorMessage,
} from "./styled";

interface CustomInputProps {
  value: string;
  onChange: {
    (e: ChangeEvent<any>): void;
    <T = string | ChangeEvent<any>>(field: T): T extends ChangeEvent<any>
      ? void
      : (e: string | ChangeEvent<any>) => void;
  };
  label?: string;
  m?: string;
  type?: string;
  name?: string;
  onBlur?: {
    (e: FocusEvent<any, Element>): void;
    <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
  };
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
