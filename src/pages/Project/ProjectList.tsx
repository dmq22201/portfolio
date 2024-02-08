import React from "react";
import styled from "styled-components";
import { ProjectListProps } from "./Project.type";

import ProjectItem from "./ProjectItem";

const StyledProjectList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  @media screen and (max-width: 61.99875em) {
    justify-content: center;
  }
`;

const ProjectList: React.FunctionComponent<ProjectListProps> = ({
  projectList,
}) => {
  return (
    <StyledProjectList>
      {projectList.map((pj) => (
        <ProjectItem key={pj.name} pj={pj} />
      ))}
    </StyledProjectList>
  );
};

export default ProjectList;
