import ProjectCard from "@/components/custom-ui/project-card";
import projectData from "@/constants/projectData";

export default function projects() {
  return (
    <section className="flex min-h-screen justify-center xl:snap-start">
      <div className="grid w-11/12 auto-rows-min gap-4 py-28 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {projectData.map((item) => (
          <ProjectCard
            key={item.name}
            name={item.name}
            description={item.discription}
            github={item.github}
            link={item.link}
            techstack={item.techstack}
          />
        ))}
      </div>
    </section>
  );
}
