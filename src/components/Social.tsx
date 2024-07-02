"use client";

import socialData from "@/config/constants/socialData";
import { cn } from "@/utils/utils";

type social = {
  name: string;
  varient: string;
};

const Social: React.FC<social> = (props) => {
  const { name, varient } = props;
  const filteredSocial = socialData.filter((item) => item.name === name);

  let childClass: string;
  let textNameClass: string;
  let iconNameClass: string;

  if (varient === "home") {
    childClass = "";
    textNameClass = "text-base lg:text-md xl:text-base 2xl:text-lg";
    iconNameClass = "text-lg lg:text-xl xl:text-lg 2xl:text-xl";
  } else if (varient === "contact") {
    childClass =
      "border border-solid px-4 py-2 rounded-lg hover:shadow-md hover:shadow-primary";
    textNameClass = "text-base lg:text-md xl:text-lg 2xl:text-2xl";
    iconNameClass = "text-lg lg:text-xl xl:text-xl 2xl:text-4xl";
  }

  return (
    <>
      {filteredSocial.map((item) => {
        return (
          <a
            key={item.link}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn("flex items-center justify-center gap-2", childClass)}
          >
            <span className={cn(textNameClass)}>{item.name}</span>
            <span className={cn(iconNameClass)}>{item.icon}</span>
          </a>
        );
      })}
    </>
  );
};

export default Social;
