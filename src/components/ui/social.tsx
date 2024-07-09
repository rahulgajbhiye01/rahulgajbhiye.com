import { cn } from "@/lib/utils";
import { DynamicIcon } from "@/components/ui/icon";
import Link from "next/link";

//Interface Import
import { ISocial } from "@/types";

type Props = {
  socialsData: ISocial[];
  varient: string;
  name: string;
};

const Social = ({ socialsData, name, varient }: Props) => {
  const filteredSocial = socialsData.filter((item) => item.name === name);
  let childClass: string = "";
  let textNameClass: string = "";
  let iconNameClass: string = "";

  if (varient === "home") {
    childClass = "";
    textNameClass = "text-md";
    iconNameClass = "text-lg";
  } else if (varient === "contact") {
    childClass = "";
    textNameClass = "text-md";
    iconNameClass = "text-lg";
  }

  return (
    <Link
      key={filteredSocial[0].id}
      href={filteredSocial[0].link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("flex flex-row-reverse items-center gap-1", childClass)}
    >
      <DynamicIcon
        iconName={filteredSocial[0].icon}
        className={cn(iconNameClass)}
      />
      <div className={cn(textNameClass)}>{filteredSocial[0].name}</div>
    </Link>
  );
};

export default Social;
