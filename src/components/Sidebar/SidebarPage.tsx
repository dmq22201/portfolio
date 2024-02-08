import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { PageList } from "../../types/Type";

const StyledSidebarPage = styled.div``;

const SidebarPageList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SidebarPageItem = styled.li`
  padding: 0 2rem;
`;

const SidebarPageLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  color: inherit;
  padding: 1.6rem;
  border-radius: 1rem;
  transition: all 0.2s;
  font-weight: 500;

  &:hover,
  &.active {
    background-color: ${(props) =>
      props.theme.name === `light`
        ? `var(--color-gray-100)`
        : `var(--color-gray-700)`};
  }
`;

const sidebarPageList: PageList = [
  {
    label: "My projects",
    to: "/projects",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

const SidebarPage: React.FunctionComponent = () => {
  return (
    <StyledSidebarPage>
      <SidebarPageList>
        {sidebarPageList.map((pageItem) => (
          <SidebarPageItem key={pageItem.label}>
            <SidebarPageLink to={pageItem.to}>{pageItem.label}</SidebarPageLink>
          </SidebarPageItem>
        ))}
      </SidebarPageList>
    </StyledSidebarPage>
  );
};

export default SidebarPage;
