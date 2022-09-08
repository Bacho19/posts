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

interface RegisterFormProps {}

// const SignupSchema = Yup.object().shape({
//   firstName: Yup.string()
//     .min(2, "First name is too short!")
//     .max(50, "First name is too long!")
//     .required("This fiels is required"),
//   lastName: Yup.string()
//     .min(2, "Last name is too short!")
//     .max(50, "Last name is too long!")
//     .required("This fiels is required"),
//   email: Yup.string().email("Invalid email").required("This fiels is required"),
//   password: Yup.string()
//     .required("This fiels is required")
//     .matches(/(?=.*[A-Z])/, {
//       message: "At least one capital character",
//     })
//     .min(5, "At least 5 characters"),
//   confirmPassword: Yup.string()
//     .required("This fiels is required")
//     .oneOf([Yup.ref("password"), null], "Passwords must match"),
// });

const RegisterForm: FC<RegisterFormProps> = () => {
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
      };
      dispatch(registerAction(registerArguments));
    },
  });

  useEffect(() => {
    const formattedErrors = mapFromErrors(errors);

    setErrors(formattedErrors);
  }, [errors, setErrors]);

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
