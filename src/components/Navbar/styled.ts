import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarWrapper = styled.div`
  height: 100px;
  background-color: #12345c;
  display: flex;
  align-items: center;
  padding: 0 80px;
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 100px;
`;

export const StyledLogo = styled.h1`
  font-size: 34px;
  color: #fff;
`;

export const NavbarMenu = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;
  color: #fff;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
`;
