import { FC, ReactNode } from "react";
import { CssBaseline, Theme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

interface PageWrapperProps {
  children: ReactNode;
  theme: Theme;
}

const PageWrapper: FC<PageWrapperProps> = ({ theme, children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

PageWrapper.defaultProps = {};

export default PageWrapper;
