import { Grid } from "@mui/material";
import { styled } from "@mui/system";
import { FC, ReactNode } from "react";
import AuthSVG from "../../assets/auth-svg.svg";

interface AuthLayoutProps {
  children: ReactNode;
}

const StyledImg = styled("img")({
  maxWidth: "100%",
  padding: "0 40px",
});

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <Grid container height="100vh">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        bgcolor="darkBlue"
        width="45%"
      >
        <StyledImg src={AuthSVG} />
      </Grid>
      <Grid container alignItems="center" width="55%" paddingX={16}>
        {children}
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
