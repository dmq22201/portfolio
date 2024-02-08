import React from "react";
import { ContainerProps } from "./Container.type";
import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 147rem;
  padding: 0 1.5rem;
`;

const Container: React.FunctionComponent<ContainerProps> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
