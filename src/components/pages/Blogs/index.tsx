"use client";
import React from "react";
import Link from "next/link";
import { useTimeAgo } from "next-timeago";
import { FaPlus } from "react-icons/fa6";
import { IBlog } from "@/types";

interface allBlogs {
  base: string;
  allBlogs: Array<IBlog>;
}

const FcBlogs = (props: allBlogs) => {
  const allBlogs = props.allBlogs;
  const base = props.base;
  const { TimeAgo } = useTimeAgo();
  return (
    <div className="grid w-11/12 grid-flow-row items-center gap-8 md:w-6/12">
      {base === "dashboard" ? (
        <Link
          href={"/dashboard/blogs/new-blog"}
          className="m-14 flex items-center justify-center"
        >
          <div className="flex flex-row gap-4">
            <FaPlus className="size-10" />
            <div className="text-4xl">New Blog</div>
          </div>
        </Link>
      ) : null}

      {allBlogs.map((item) => {
        return (
          <Link
            key={item.id}
            href={`/${base}${base === "dashboard" ? "/blogs" : ""}/${item.indexedTitle}`}
          >
            <div className="flex flex-col gap-8 p-4 md:flex-row">
              <div className="aspect-video overflow-hidden md:block">
                <img
                  src={item.imageUrl ?? ""}
                  alt={item.title ?? ""}
                  className="max-h-72 max-w-72 md:max-h-96 md:max-w-96"
                  width={384}
                  height={384}
                />
              </div>

              <div className="flex w-11/12 flex-col gap-2">
                <div className="flex flex-row gap-2">
                  <span className="font-medium">
                    <TimeAgo date={item.publishedOn ?? "2001-01-20"} />
                  </span>
                  <span>/</span>
                  <span>{item.keywords}</span>
                </div>

                <div className="text-4xl font-bold text-black hover:underline">
                  {item.title}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FcBlogs;
