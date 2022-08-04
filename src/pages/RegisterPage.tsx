import { Grid } from "@mui/material";
import { FC } from "react";
import AuthLayout from "../component/layouts/AuthLayout";

interface RegisterPageProps {}

const RegisterPage: FC<RegisterPageProps> = ({}) => {
  return (
    <AuthLayout>
      <Grid>Register</Grid>
    </AuthLayout>
  );
};

export default RegisterPage;
