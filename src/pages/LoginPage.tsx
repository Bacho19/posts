import styled from "styled-components";
import AuthLayout from "../components/layouts/AuthLayout";
import LoginForm from "../components/LoginForm";

const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #12345c;
  margin-bottom: 28px;
`;

const LoginContentWrapper = styled.div`
  width: 100%;
`;

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginContentWrapper>
        <StyledTitle>Sign in</StyledTitle>
        <LoginForm />
      </LoginContentWrapper>
    </AuthLayout>
  );
};

export default LoginPage;
