import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import CustomInput from "../UI/CustomInput";
import { AuthFormText, AuthFormTextLink } from "./styled";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <>
      <form>
        <CustomInput label="Email" m="0 0 18px 0" type="email" />
        <CustomInput label="Password" m="0 0 30px 0" type="password" />
        <Button>Sing In</Button>
      </form>
      <AuthFormText>
        Don’t have an account?{" "}
        <AuthFormTextLink onClick={() => navigate("/register")}>
          Sing Up
        </AuthFormTextLink>
      </AuthFormText>
    </>
  );
};

export default LoginForm;
