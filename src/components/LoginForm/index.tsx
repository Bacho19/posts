import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import Button from "../UI/Button";
import CustomInput from "../UI/CustomInput";
import { AuthFormText, AuthFormTextLink } from "./styled";
import { useAppDispatch, useAppSelector } from "../../store";
import { loginAction } from "../../store/actions/auth";
import { mapFromErrors } from "../../utils";
import { clearErrors } from "../../store/slices/auth";

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
  const { errors } = useAppSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const {
    handleChange,
    values,
    handleSubmit,
    errors: formikErrors,
    setErrors,
  } = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      const loginArguments = {
        email: values.email,
        password: values.password,
      };

      dispatch(loginAction(loginArguments));
    },
  });

  useEffect(() => {
    const formattedErrors = mapFromErrors(errors);
    setErrors(formattedErrors);
  }, [errors, setErrors]);

  useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, [dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CustomInput
          label="Email"
          name="email"
          m="0 0 18px 0"
          type="email"
          onChange={handleChange}
          value={values.email}
          errorMessage={formikErrors.email}
        />
        <CustomInput
          label="Password"
          name="password"
          m="0 0 30px 0"
          type="password"
          onChange={handleChange}
          value={values.password}
          errorMessage={formikErrors.password}
        />
        <Button type="submit">Sing In</Button>
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
