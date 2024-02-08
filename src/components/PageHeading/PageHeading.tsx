import styled from "styled-components";
import { PageHeadingProps } from "./PageHeading.type";
import Container from "../Container/Container";

const StyledPageHeading = styled.h1<PageHeadingProps>`
  font-size: 3rem;
  text-transform: uppercase;
  font-weight: 600;

  text-align: ${(props) => props.position};

  margin-bottom: 4rem;

  @media screen and (max-width: 61.99875em) {
    text-align: center;
  }
`;

const PageHeading: React.FunctionComponent<PageHeadingProps> = ({
  children,
}) => {
  return (
    <StyledPageHeading>
      <Container>{children}</Container>
    </StyledPageHeading>
  );
};

export default PageHeading;
