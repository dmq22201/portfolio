export type Item = {
  img: string;
  name: string;
  description: string;
  liveLink: string;
  sourceCodeLink: string;
};

export type ProjectListProps = {
  projectList: Item[];
};

export type ProjectItemProps = {
  pj: Item;
};
