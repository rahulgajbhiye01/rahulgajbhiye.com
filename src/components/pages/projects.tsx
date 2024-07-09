import Project from "../ui/project";

import { IProject } from "@/types";

interface Props {
  projectData: IProject[];
}

const Projects = ({ projectData }: Props) => {
  return (
    <div className="grid w-10/12 grid-flow-row gap-4 md:grid-cols-3 lg:w-6/12">
      {projectData.map((item) => (
        <div key={item.id}>
          <Project projectData={item} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
