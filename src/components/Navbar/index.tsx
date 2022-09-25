import { FC } from "react";
import { useAppDispatch } from "../../store";
import { logout } from "../../store/slices/auth";
import Button from "../UI/Button";
import { ButtonWrapper, NavbarWrapper } from "./styled";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <NavbarWrapper>
      Navabar
      <ButtonWrapper>
        <Button onClick={handleLogout}>Logout</Button>
      </ButtonWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
