import React from "react";
import { Item } from "./Project.type";

import PageHeading from "../../components/PageHeading/PageHeading";
import ProjectList from "./ProjectList";

const projectList: Item[] = [
  {
    img: "./pj_1.png",
    name: "Nexcent",
    description: "Convert design from figma to code. Using HTML & SASS",
    liveLink: "https://dmq22201.github.io/nexcent/",
    sourceCodeLink: "https://github.com/dmq22201/nexcent",
  },
  {
    img: "./pj_2.png",
    name: "Simple Book Store",
    description: "Ecommerce with ExpressJS, MongoDB, ReactJS",
    liveLink: "https://wbsach.vercel.app",
    sourceCodeLink: "https://github.com/dmq22201/wbsach-mern",
  },
];

const Project: React.FunctionComponent = () => {
  return (
    <>
      <PageHeading>My Projects</PageHeading>
      <ProjectList projectList={projectList} />
    </>
  );
};

export default Project;
