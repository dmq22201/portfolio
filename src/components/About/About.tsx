import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";

const StyledAbout = styled.div`
  background-color: ${(props) =>
    props.theme.name === `light`
      ? `var(--color-gray-100)`
      : `var(--color-gray-800)`};
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
  padding: 4rem 0;
`;

const Avatar = styled.img`
  width: 14rem;
  height: 14rem;
  border-radius: 50%;
  box-shadow: var(--shadow-2xl);
`;

const Name = styled.span`
  font-weight: 600;
  font-size: 2.4rem;
`;

const Message = styled.p`
  font-size: 1.4rem;
`;

const About: React.FunctionComponent = () => {
  return (
    <StyledAbout>
      <Container>
        <AboutWrapper>
          <Avatar src="./avatar.jpg" alt="Avatar of Minh Quyen" />
          <Name>Minh Quyen</Name>
          <Message>
            I'm just a Front-End Intern and self learning. And trying fullstack
          </Message>
        </AboutWrapper>
      </Container>
    </StyledAbout>
  );
};

export default About;
