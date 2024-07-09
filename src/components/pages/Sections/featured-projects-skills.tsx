import FeaturedProjects from "@/components/pages/featured-projects";
import Skills from "@/components/pages/skills";

import { IProject, ISkill } from "@/types";

type Props = {
  projectData: IProject[];
  skillData: ISkill[];
};

const FcFeaturedProjectsSkills = ({ projectData, skillData }: Props) => {
  return (
    <section className="flex min-h-custom w-full scroll-mt-16 flex-col items-center gap-32 py-8">
      <div className="flex flex-col items-center">
        <span className="text-center text-2xl font-medium">
          Featured Projects
        </span>
        <FeaturedProjects projectData={projectData} />
      </div>

      <div className="flex w-11/12 flex-col items-center xl:w-6/12">
        <span className="text-center text-2xl font-medium">Tech Stack</span>
        <div className="grid auto-rows-min grid-cols-1 gap-2 text-center md:grid-cols-2">
          <Skills skill={skillData} scope="LANGUAGES" />
          <Skills skill={skillData} scope="FRAMEWORKS / LIBRARIES" />
          <Skills skill={skillData} scope="DATABASES" />
          <Skills skill={skillData} scope="CLOUD / DEVOPS" />
          <Skills skill={skillData} scope="TOOLS" />
        </div>
      </div>
    </section>
  );
};

export default FcFeaturedProjectsSkills;
