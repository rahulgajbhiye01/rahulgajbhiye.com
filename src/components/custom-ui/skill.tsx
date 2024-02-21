"use client";

import skillData from "@/constants/skillData";

type skillProps = {
  scope: string;
};

const Skill: React.FC<skillProps> = (props) => {
  const { scope } = props;
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-lg xl:text-xl">{scope}</h1>
      <ul className="flex flex-wrap items-center justify-center gap-2 p-2">
        {skillData
          .filter((item) => {
            return item.scope === scope;
          })
          .map((filteredItem) => {
            return (
              <li
                key={filteredItem.tech}
                className={`border-2 border-solid border-primary px-2 py-1 text-base lg:text-lg 2xl:text-xl`}
              >
                <div className="flex flex-row items-center justify-center gap-1">
                  {filteredItem.icon}
                  {filteredItem.tech}
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Skill;
