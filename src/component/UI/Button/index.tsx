import { FC, ReactNode } from "react";
import { StyledButton } from "./styled";

interface ButtonProps {
  children?: ReactNode;
  m?: string;
}

const Button: FC<ButtonProps> = ({ children = "", m }) => {
  return <StyledButton m={m}>{children}</StyledButton>;
};

export default Button;
