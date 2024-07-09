import { getProjectsData } from "@/lib/db/db-helper";
import ProjectsEditor from "@/components/pages/Dashboard/projects";
import Projects from "@/components/pages/projects";

export default async function DashboardProjects() {
  const projectData = await getProjectsData();
  return (
    <div className="flex flex-col items-center">
      <ProjectsEditor />
      <Projects projectData={projectData} />
    </div>
  );
}
