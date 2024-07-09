import Skills from "@/components/pages/skills";
import { getSkillsData } from "@/lib/db/db-helper";
import SkillsEditor from "@/components/pages/Dashboard/skills";

type Props = {};

export default async function DashboardSkills(props: Props) {
  const skillData = await getSkillsData();
  return (
    <>
      <SkillsEditor />
      <div className="grid auto-rows-min grid-cols-5 text-center">
        <Skills skill={skillData} scope="LANGUAGES" />
        <Skills skill={skillData} scope="FRAMEWORKS / LIBRARIES" />
        <Skills skill={skillData} scope="DATABASES" />
        <Skills skill={skillData} scope="CLOUD / DEVOPS" />
        <Skills skill={skillData} scope="TOOLS" />
      </div>
    </>
  );
}
