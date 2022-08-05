import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  AuthFormText,
  AuthFormTextLink,
  InputWrapperFlex,
} from "../LoginForm/styled";
import RegisterValidatorItem from "../RegisterValidatorItem";
import Button from "../UI/Button";
import CustomInput from "../UI/CustomInput";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <>
      <form>
        <InputWrapperFlex>
          <CustomInput label="First Name" />
          <CustomInput label="Last Name" />
        </InputWrapperFlex>
        <CustomInput label="Email" m="18px 0" type="email" />
        <InputWrapperFlex>
          <CustomInput label="Password" m="0 0 25px 0" type="password" />
          <CustomInput label="Confirm Password" type="password" />
        </InputWrapperFlex>
        <RegisterValidatorItem isChecked={true} />
        <RegisterValidatorItem isChecked={true} />
        <RegisterValidatorItem isChecked={false} />
        <RegisterValidatorItem isChecked={true} />
        <Button m="12px 0 0 0">Sing Up</Button>
      </form>
      <AuthFormText>
        Already a member?{" "}
        <AuthFormTextLink onClick={() => navigate("/login")}>
          Sing In
        </AuthFormTextLink>
      </AuthFormText>
    </>
  );
};

export default RegisterForm;
