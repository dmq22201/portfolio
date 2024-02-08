import React, { useState } from "react";
import styled from "styled-components";
import { ProjectItemProps } from "./Project.type";
import { fadeIn, fadeInUp } from "../../styles/Animation";
import Button from "../../components/Button/Button";

const StyledProjectItem = styled.li`
  width: 40rem;
  height: 22rem;
  box-shadow: var(--shadow-md);
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  flex-shrink: 1;
`;

const Img = styled.img`
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

const About = styled.div`
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(1rem);
  border-radius: 1rem;
  animation: ${fadeIn};
  animation-duration: 0.2s;
  color: var(--color-white);
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;
`;

const ProjectName = styled.span`
  font-weight: 500;
  font-size: 2.2rem;
  color: inherit;
  animation: ${fadeInUp};
  animation-duration: 0.3s;
`;

const ProjectDescription = styled.p`
  width: calc(100% - 20%);
  text-align: center;
  font-size: 1.4rem;
  color: inherit;
  line-height: 2.5rem;
  animation: ${fadeInUp};
  animation-duration: 0.4s;
`;

const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  animation: ${fadeInUp};
  animation-duration: 0.5s;
`;

const ProjectItem: React.FunctionComponent<ProjectItemProps> = ({ pj }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <StyledProjectItem
      onMouseOver={() => setShow(true)}
      onMouseOut={() => setShow(false)}
    >
      <Img src={pj.img} alt={pj.name} />
      {show && (
        <About>
          <AboutWrapper>
            <ProjectName>{pj.name}</ProjectName>
            <ProjectDescription>{pj.description}</ProjectDescription>
            <ActionWrapper>
              <Button primary href={pj.liveLink} as="a" target="_blank">
                Live
              </Button>
              <Button href={pj.sourceCodeLink} as="a" target="_blank">
                Source code
              </Button>
            </ActionWrapper>
          </AboutWrapper>
        </About>
      )}
    </StyledProjectItem>
  );
};

export default ProjectItem;
