import { FC, ReactNode } from "react";
import AuthSVG from "../../../assets/auth-svg.svg";
import {
  AuthLayoutWrapper,
  AuthLayoutLeft,
  AuthLayoutRight,
  StyledImg,
} from "./styled";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <AuthLayoutWrapper>
      <AuthLayoutLeft>
        <StyledImg src={AuthSVG} />
      </AuthLayoutLeft>
      <AuthLayoutRight>{children}</AuthLayoutRight>
    </AuthLayoutWrapper>
  );
};

export default AuthLayout;
