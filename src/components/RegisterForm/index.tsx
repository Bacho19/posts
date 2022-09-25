import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import {
  AuthFormText,
  AuthFormTextLink,
  InputWrapperFlex,
} from "../LoginForm/styled";
import Button from "../UI/Button";
import CustomInput from "../UI/CustomInput";
import { useAppDispatch, useAppSelector } from "../../store";
import { registerAction } from "../../store/actions/auth";
import { mapFromErrors } from "../../utils";
import { clearErrors, resetIsRegistered } from "../../store/slices/auth";

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = () => {
  const { errors, isRegistered } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const {
    handleChange,
    values,
    handleSubmit,
    errors: formikErrors,
    setErrors,
  } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      const registerArguments = {
        email: values.email,
        firstName: values.firstName,
        lastName: values.lastName,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };
      dispatch(registerAction(registerArguments));
    },
  });

  useEffect(() => {
    const formattedErrors = mapFromErrors(errors);

    setErrors(formattedErrors);
  }, [errors, setErrors]);

  useEffect(() => {
    if (isRegistered) {
      navigate("/login");
    }

    return () => {
      dispatch(resetIsRegistered());
      dispatch(clearErrors());
    };
  }, [isRegistered, navigate, dispatch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputWrapperFlex>
          <CustomInput
            label="First Name"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            errorMessage={formikErrors.firstName}
          />
          <CustomInput
            label="Last Name"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            errorMessage={formikErrors.lastName}
          />
        </InputWrapperFlex>
        <CustomInput
          label="Email"
          name="email"
          m="18px 0"
          type="email"
          value={values.email}
          onChange={handleChange}
          errorMessage={formikErrors.email}
        />
        <InputWrapperFlex>
          <CustomInput
            label="Password"
            name="password"
            m="0 0 25px 0"
            type="password"
            value={values.password}
            onChange={handleChange}
            errorMessage={formikErrors.password}
          />
          <CustomInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={values.confirmPassword}
            onChange={handleChange}
            errorMessage={formikErrors.confirmPassword}
          />
        </InputWrapperFlex>
        <Button m="12px 0 0 0" type="submit">
          Sing Up
        </Button>
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
