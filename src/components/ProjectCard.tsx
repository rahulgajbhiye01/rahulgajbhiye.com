"use client";

import { FaGithub, FaLink } from "react-icons/fa6";
import { Button } from "./ui/button";
import skillData from "@/config/constants/skillData";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type cardProps = {
  name: string;
  description: string;
  github: string;
  link: string;
  techstack: string[];
};

const ProjectCard: React.FC<cardProps> = (props) => {
  const { name, github, link, description, techstack } = props;
  const res = skillData.filter((item) => techstack.includes(item.tech));

  return (
    <Card className="flex size-full flex-grow flex-col justify-between border-solid hover:shadow-md hover:shadow-primary">
      <CardHeader className="flex gap-4">
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-wrap gap-2">
          {res.map((item) => {
            return (
              <li
                key={item.tech}
                className="border-2 border-solid px-2 py-1 text-3xl"
              >
                <div className="flex flex-row items-center justify-center gap-1">
                  {item.icon}
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row items-center gap-6">
          <a href={github} target="_blank" referrerPolicy="no-referrer">
            <FaGithub className="text-3xl" />
          </a>
          <a href={link} target="_blank" referrerPolicy="no-referrer">
            <Button className="flex flex-row items-center justify-center gap-4 text-center text-base xl:text-lg">
              Visit <FaLink />
            </Button>
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
