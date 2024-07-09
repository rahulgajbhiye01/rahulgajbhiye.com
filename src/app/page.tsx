import FcHome from "@/components/pages/Sections/home";
import FcFeaturedProjectsSkills from "@/components/pages/Sections/featured-projects-skills";
import {
  getSkillsData,
  getProjectsData,
  getSocialsData,
} from "@/lib/db/db-helper";

export default async function Root() {
  const skillData = await getSkillsData();
  const projectData = await getProjectsData();
  const socialsData = await getSocialsData();

  return (
    <div className="w-full">
      {/* {Hero Section} */}
      <FcHome socialsData={socialsData} />
      {/* {Featured Projects} */}
      <FcFeaturedProjectsSkills
        projectData={projectData}
        skillData={skillData}
      />
    </div>
  );
}
