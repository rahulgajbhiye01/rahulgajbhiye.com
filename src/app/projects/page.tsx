import Projects from "@/components/pages/projects";
import { getProjectsData } from "@/lib/db/db-helper";

export default async function ProjectsPage() {
  const projectData = await getProjectsData();
  return <Projects projectData={projectData} />;
}
