import TextAnimation from "@/components/custom-ui/text-animation";

import Social from "@/components/custom-ui/social";
import SectionBase from "@/components/custom-ui/section-base";

import Skill from "@/components/custom-ui/skill";
import ProjectCard from "@/components/custom-ui/project-card";
import ExperienceCard from "@/components/custom-ui/experience-card";

import experienceData from "@/config/constants/experienceData";
import projectData from "@/config/constants/projectData";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Root() {
  return (
    <>
      <section className="relative flex h-[calc(100vh-56px)] items-center justify-center md:h-auto xl:h-screen xl:snap-start">
        <div className="flex w-full items-center justify-center md:py-52">
          <div className="flex flex-col gap-4 xl:gap-8">
            <h1 className="text-3xl font-bold md:text-3xl lg:text-4xl xl:text-3xl 2xl:text-6xl">
              Hi, my naI&apos;m a Web & Software <br />
              Developer from India.
            </h1>
            <div className="flex flex-col gap-4 xl:gap-8">
              <h1 className="text-base italic md:text-sm lg:text-base 2xl:text-xl">
                Creating, Web Apps with
              </h1>
              <span className="h-14 text-xl font-semibold md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-4xl">
                <TextAnimation />
              </span>
            </div>
          </div>
        </div>
        <div className="absolute right-4 hidden md:flex md:items-center">
          <div className="flex flex-col items-end gap-2 lg:gap-4">
            <Social varient="home" name="Github" />
            <Social varient="home" name="LinkedIn" />
            <Social varient="home" name="Twitter" />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center md:h-auto xl:h-screen xl:snap-start">
        <div className="flex w-11/12 flex-col items-center justify-center gap-4 md:py-20">
          <p className="text-center text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
            Featured Projects
          </p>
          <div className="flex w-full flex-col items-center justify-center">
            <Carousel className="w-full">
              <CarouselPrevious className="hidden md:flex" />
              <CarouselContent className="py-8 xl:ml-0">
                {projectData.map((item) => (
                  <CarouselItem
                    key={item.name}
                    className="md:basis-1/2 xl:basis-1/3 2xl:basis-1/4"
                  >
                    <ProjectCard
                      name={item.name}
                      description={item.discription}
                      github={item.github}
                      link={item.link}
                      techstack={item.techstack}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="hidden md:flex" />
            </Carousel>
            <span className="font-light italic">Swipe Right -{">"}</span>
          </div>
        </div>
      </section>
      <SectionBase
        imageSrc={"/images/skills.svg"}
        imageAlt="skills"
        sectionName="Tech Stack"
        sectionClass="xl:h-screen xl:snap-start"
        divClass="py-20 md:flex-row"
        imageDivClass="md:w-5/12"
        dataDivClass="md:w-6/12"
      >
        <div className="grid auto-rows-min gap-2 md:grid-cols-2">
          <Skill scope="LANGUAGES" />
          <Skill scope="FRAMEWORKS / LIBRARIES" />
          <Skill scope="DATABASES" />
          <Skill scope="CLOUD / DEVOPS" />
          <Skill scope="TOOLS" />
        </div>
      </SectionBase>
      <SectionBase
        imageSrc={"/images/experience.svg"}
        imageAlt="experience"
        sectionName="Experience"
        sectionClass="xl:h-screen xl:snap-start"
        divClass="py-20 md:flex-row-reverse"
        imageDivClass="md:w-5/12"
        dataDivClass="md:w-6/12"
      >
        <Carousel className="w-11/12">
          <CarouselPrevious className="hidden md:flex" />
          <CarouselContent className="py-2 xl:ml-0">
            {experienceData.map((item) => (
              <CarouselItem key={item.position} className="basis-auto">
                <ExperienceCard
                  position={item.position}
                  company={item.company}
                  timeline={item.timeline}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </SectionBase>
      <SectionBase
        imageSrc={"/images/contact.svg"}
        imageAlt="contact"
        sectionName="Contact"
        sectionClass="xl:h-screen xl:snap-start"
        divClass="py-20 pb-40 md:flex-row"
        imageDivClass="md:w-5/12"
        dataDivClass="md:w-6/12"
      >
        <div className="flex flex-row flex-wrap items-center justify-center gap-4">
          <Social varient="contact" name="Github" />
          <Social varient="contact" name="LinkedIn" />
          <Social varient="contact" name="Twitter" />
          <Social varient="contact" name="Resume" />
        </div>
      </SectionBase>
    </>
  );
}
