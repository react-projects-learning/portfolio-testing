import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <Logo to={"/"}>Capture</Logo>

      <List>
        <ListItem>
          <StyledNavLink to="/">1. About Us</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/work">2. Our Work</StyledNavLink>
        </ListItem>
        <ListItem>
          <StyledNavLink to="/contact">3. Contact Us</StyledNavLink>
        </ListItem>
      </List>
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 1rem 10rem;
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #282828;

  position: sticky;
  top: 0;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: lighter;
  font-family: "Lobster", sans-serif;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 1.5rem;
`;

export const ListItem = styled.li``;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: hotpink;
  }
`;

export default Navbar;
