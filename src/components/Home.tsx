"use client";

import Image from "next/image";
import { cn } from "@/utils/utils";

type Props = {
  sectionClass: string;
  divClass: string;
  dataDivClass: string;
  imageDivClass: string;
  imageSrc: any;
  imageAlt: string;
  sectionName: string;
  children: React.ReactNode;
};

const Home: React.FC<Props> = (props) => {
  return (
    <section
      className={cn("flex items-center justify-center", props.sectionClass)}
    >
      <div
        className={cn(
          "flex w-11/12 flex-col items-center justify-center",
          props.divClass,
        )}
      >
        <div
          className={cn(
            "relative flex h-full w-full items-center justify-center p-4 xl:p-28",
            props.imageDivClass,
          )}
        >
          <Image
            src={props.imageSrc}
            alt={`${props.imageAlt}`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ objectFit: "contain", height: "auto", width: "100%" }}
          />
        </div>
        <div
          className={cn(
            "flex w-full flex-col items-center justify-center gap-4 text-center",
            props.dataDivClass,
          )}
        >
          <p className={cn("text-4xl lg:text-4xl xl:text-5xl 2xl:text-6xl")}>
            {props.sectionName}
          </p>
          <div className="flex w-full items-center justify-center">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
