import { FC, ReactNode } from "react";
import { StyledButton } from "./styled";

interface ButtonProps {
  children?: ReactNode;
  m?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<ButtonProps> = ({ children = "", m, type = "button" }) => {
  return (
    <StyledButton type={type} m={m}>
      {children}
    </StyledButton>
  );
};

export default Button;
