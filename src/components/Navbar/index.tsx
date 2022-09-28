import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store";
import { logout } from "../../store/slices/auth";
import Button from "../UI/Button";
import {
  ButtonWrapper,
  NavbarContent,
  NavbarMenu,
  NavbarWrapper,
  StyledLink,
  StyledLogo,
} from "./styled";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    dispatch(logout());
  };

  return (
    <NavbarWrapper>
      <NavbarContent>
        <StyledLogo>POSTIQ</StyledLogo>
        <NavbarMenu>
          <StyledLink to="/">Posts</StyledLink>
          <StyledLink to="/create-post">Create post</StyledLink>
        </NavbarMenu>
        <ButtonWrapper>
          <Button onClick={handleLogout}>Logout</Button>
        </ButtonWrapper>
      </NavbarContent>
    </NavbarWrapper>
  );
};

export default Navbar;
