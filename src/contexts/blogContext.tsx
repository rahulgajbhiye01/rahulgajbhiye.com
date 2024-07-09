"use client";

import { createContext, useState, useContext } from "react";
import { IBlog } from "@/types";

interface IBlogContext {
  blogUpdatedData: IBlog;
  saveBlogArticleData: ({ article }: IBlog) => void;
}

const BlogContext = createContext<IBlogContext>({
  blogUpdatedData: {},
  saveBlogArticleData: () => {},
});

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [blogArticleData, setBlogArticleData] = useState<IBlog>({
    article: "",
  });

  const saveBlogArticleData = ({ article }: IBlog) => {
    setBlogArticleData({ ...blogArticleData, article });
  };

  let blogUpdatedData: IBlog = {
    article: blogArticleData.article,
  };

  return (
    <BlogContext.Provider value={{ blogUpdatedData, saveBlogArticleData }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};
