import React from "react";
import styled from "styled-components";

import SidebarPage from "./SidebarPage";
import About from "../About/About";

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-color: ${(props) =>
    props.theme.name === "light"
      ? `var(--color-white)`
      : `var(--color-gray-800)`};
  box-shadow: var(--shadow-md);
`;

const Sidebar: React.FunctionComponent = () => {
  return (
    <StyledSidebar>
      <About />
      <SidebarPage />
    </StyledSidebar>
  );
};

export default Sidebar;
