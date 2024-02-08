import React from "react";
import styled from "styled-components";
import { PageList } from "../../types/Type";
import { NavLink } from "react-router-dom";

const StyledNavbar = styled.nav`
  position: fixed;
  background-color: ${(props) =>
    props.theme.name === `light`
      ? `var(--color-gray-100)`
      : `var(--color-gray-700)`};
  width: 100%;
  margin: 0 auto;
  z-index: 1;
  box-shadow: var(--shadow-xl);
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

const NavbarItem = styled.li``;

const NavbarLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-weight: 500;
  padding: 1.2rem;
  transition: all 0.2s;

  &:hover,
  &.active {
    background-color: ${(props) =>
      props.theme.name === `light`
        ? `var(--color-gray-200)`
        : `var(--color-gray-600)`};
  }
`;

const navbarPageList: PageList = [
  {
    label: "My projects",
    to: "/projects",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const Navbar: React.FunctionComponent = () => {
  return (
    <StyledNavbar>
      <NavbarList>
        {navbarPageList.map((pageItem) => (
          <NavbarItem key={pageItem.label}>
            <NavbarLink to={pageItem.to}>{pageItem.label}</NavbarLink>
          </NavbarItem>
        ))}
      </NavbarList>
    </StyledNavbar>
  );
};

export default Navbar;
