"use client";

import { useTimeAgo } from "next-timeago";
interface IBlogHeading {
  frontMatter: {
    [key: string]: string;
  };
}

const FcBlogMetadata = (props: IBlogHeading) => {
  const { frontMatter } = props;
  const { TimeAgo } = useTimeAgo();
  return (
    <div className="mb-8 flex flex-col gap-2">
      <div className="mb-8 text-4xl font-semibold text-black md:text-6xl">
        {frontMatter["title"]}
      </div>
      <div className="flex flex-row gap-2">
        <span className="font-medium">
          <TimeAgo date={frontMatter["publishedOn"]} />
        </span>
        <span>/</span>
        <span>{frontMatter["keywords"]}</span>
      </div>

      <div className="h-0.5 shadow-sm shadow-violet-600 drop-shadow"></div>
    </div>
  );
};

export default FcBlogMetadata;
