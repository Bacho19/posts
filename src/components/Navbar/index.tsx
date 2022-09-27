import { FC } from "react";
import { useAppDispatch } from "../../store";
import { logout } from "../../store/slices/auth";
import Button from "../UI/Button";
import {
  ButtonWrapper,
  NavbarContent,
  NavbarWrapper,
  StyledLogo,
} from "./styled";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <NavbarWrapper>
      <NavbarContent>
        <StyledLogo>POSTIQ</StyledLogo>
        <ButtonWrapper>
          <Button onClick={handleLogout}>Logout</Button>
        </ButtonWrapper>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;
