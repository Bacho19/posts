import { FC } from "react";
import Button from "../UI/Button";
import { ButtonWrapper, NavbarWrapper } from "./styled";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  return (
    <NavbarWrapper>
      Navabr
      <ButtonWrapper>
        <Button>Logout</Button>
      </ButtonWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
