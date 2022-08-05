import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import {
  AuthFormText,
  AuthFormTextLink,
  InputWrapperFlex,
} from "../LoginForm/styled";
import RegisterValidatorItem from "../RegisterValidatorItem";
import Button from "../UI/Button";
import CustomInput from "../UI/CustomInput";

interface RegisterFormProps {}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name is too short!")
    .max(50, "First name is too long!")
    .required("This fiels is required"),
  lastName: Yup.string()
    .min(2, "Last name is too short!")
    .max(50, "Last name is too long!")
    .required("This fiels is required"),
  email: Yup.string().email("Invalid email").required("This fiels is required"),
  password: Yup.string().required("This fiels is required"),
  confirmPassword: Yup.string().required("This fiels is required"),
});

const RegisterForm: FC<RegisterFormProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleChange, values, handleSubmit, handleBlur, errors }) => (
          <form onSubmit={handleSubmit}>
            <InputWrapperFlex>
              <CustomInput
                label="First Name"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={errors.firstName}
              />
              <CustomInput
                label="Last Name"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={errors.lastName}
              />
            </InputWrapperFlex>
            <CustomInput
              label="Email"
              name="email"
              m="18px 0"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              errorMessage={errors.email}
            />
            <InputWrapperFlex>
              <CustomInput
                label="Password"
                name="password"
                m="0 0 25px 0"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={errors.password}
              />
              <CustomInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                errorMessage={errors.confirmPassword}
              />
            </InputWrapperFlex>
            <RegisterValidatorItem
              isChecked={false}
              text="At least one 5 characters"
            />
            <RegisterValidatorItem
              isChecked={false}
              text="At least one capital character"
            />
            <RegisterValidatorItem
              isChecked={false}
              text="Confirm password must be same as password"
            />
            <Button m="12px 0 0 0" type="submit">
              Sing Up
            </Button>
          </form>
        )}
      </Formik>
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
