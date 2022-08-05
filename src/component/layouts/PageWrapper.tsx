import { FC, ReactNode } from "react";
import GlobalStyle from "../../themes/globalStyles";

interface PageWrapperProps {
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

PageWrapper.defaultProps = {};

export default PageWrapper;
