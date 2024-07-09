import Project from "@/components/ui/project";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

//Interface Import
import { IProject } from "@/types";
interface Props {
  projectData: IProject[];
}

const FeaturedProjects = ({ projectData }: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center md:w-10/12">
      <Carousel>
        <CarouselPrevious />
        <CarouselContent className="w-64 py-8 md:w-11/12 xl:ml-0">
          {projectData.map((item) => (
            <CarouselItem key={item.title} className="basis-full md:basis-3/12">
              <Project projectData={item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default FeaturedProjects;
