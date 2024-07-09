import { DynamicIcon } from "@/components/ui/icon";

//Interface Import
import { ISkills } from "@/types";

const Skills: React.FC<ISkills> = (props) => {
  const { scope, skill } = props;
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg xl:text-xl">{scope}</h1>
      <ul className="flex flex-wrap items-center justify-center gap-2 p-2">
        {skill
          .filter((item: any) => {
            return item.category === scope;
          })
          .map((filteredItem: any) => {
            return (
              <li
                key={filteredItem.name}
                className={`border-2 border-solid border-primary px-2 py-1 text-base lg:text-lg 2xl:text-xl`}
              >
                <div className="flex flex-row items-center justify-center gap-1">
                  <DynamicIcon
                    iconName={filteredItem.icon}
                    className="size-6"
                  />
                  {filteredItem.name}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Skills;
