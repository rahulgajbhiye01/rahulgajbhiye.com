import { FaGithub, FaLink } from "react-icons/fa6";
import { DynamicIcon } from "@/components/ui/icon";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import { IProject } from "@/types";

type Props = {
  projectData: IProject;
};

const Project = ({ projectData }: Props) => {
  return (
    <Card className="flex size-full flex-grow flex-col justify-between border-solid hover:shadow-md hover:shadow-primary">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between">
          <span>{projectData.title}</span>
          <div className="flex flex-row items-center gap-4">
            <Link
              href={projectData.github}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaGithub className="size-6" />
            </Link>
            <Link
              href={projectData.link}
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaLink className="size-6" />
            </Link>
          </div>
        </CardTitle>
        <CardDescription className="text-sm">
          {projectData.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex gap-1">
        {projectData.techstack.map((item: any) => {
          return (
            <div key={item.id} className="border border-solid px-2 py-1">
              <DynamicIcon iconName={item.icon} className="size-6" />
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default Project;
