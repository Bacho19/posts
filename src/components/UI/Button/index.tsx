import { FC, HTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styled";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  m?: string;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<ButtonProps> = ({
  children = "",
  m,
  type = "button",
  ...props
}) => {
  return (
    <StyledButton type={type} m={m} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
