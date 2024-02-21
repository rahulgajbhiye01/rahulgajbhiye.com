"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type cardProps = {
  position: string;
  company: string;
  timeline: string;
};

const ExperienceCard: React.FC<cardProps> = (props) => {
  const { position, company, timeline } = props;
  return (
    <Card className="flex h-80 w-60 flex-grow flex-col items-center justify-between border-solid text-center">
      <CardHeader className="flex gap-4">
        <CardTitle className="whitespace-nowrap text-3xl">{position}</CardTitle>
        <CardDescription className="text-2xl">{company}</CardDescription>
      </CardHeader>
      <CardFooter className="text-xl font-light">{timeline}</CardFooter>
    </Card>
  );
};

export default ExperienceCard;
