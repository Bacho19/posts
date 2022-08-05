import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import Button from "../UI/Button";
import CustomInput from "../UI/CustomInput";
import { AuthFormText, AuthFormTextLink } from "./styled";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <CustomInput
              label="Email"
              name="email"
              m="0 0 18px 0"
              type="email"
              onChange={handleChange}
              value={values.email}
            />
            <CustomInput
              label="Password"
              name="password"
              m="0 0 30px 0"
              type="password"
              onChange={handleChange}
              value={values.password}
            />
            <Button type="submit">Sing In</Button>
          </form>
        )}
      </Formik>
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
