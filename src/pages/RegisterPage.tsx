import styled from "styled-components";
import AuthLayout from "../component/layouts/AuthLayout";
import RegisterForm from "../component/RegisterForm";

const StyledTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #12345c;
  margin-bottom: 28px;
`;

const RegisterContentWrapper = styled.div`
  width: 100%;
`;

const RegisterPage = () => {
  return (
    <AuthLayout>
      <RegisterContentWrapper>
        <StyledTitle>Create Account</StyledTitle>
        <RegisterForm />
      </RegisterContentWrapper>
    </AuthLayout>
  );
};

export default RegisterPage;
