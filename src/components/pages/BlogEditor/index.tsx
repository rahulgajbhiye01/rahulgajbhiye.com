"use client";

import FcForwardRefEditor from "@/components/pages/MDXEditor";
import { updateBlog, createBlog, deleteBlog } from "@/lib/server/actions/blog";
import { useEffect, useState, useRef } from "react";
import { useBlogContext } from "@/contexts/blogContext";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { IBlog } from "@/types";

interface Props {
  blogId: string;
  rawBlogData: IBlog[];
}

const FcBlogEditor = ({ blogId, rawBlogData }: Props) => {
  // Blog Context
  const { blogUpdatedData, saveBlogArticleData } = useBlogContext();

  // To update blog content
  const [blogContent, setBlogContent] = useState(rawBlogData[0].article);

  // Utility
  const isMounted = useRef(false);
  const { toast } = useToast();

  const router = useRouter();

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    saveBlogArticleData({
      article: blogContent,
    });
  }, [blogContent]);

  const handleChange = (e: string) => {
    if (isMounted.current) {
      setBlogContent(e);
    }
  };

  return (
    <div className="prose flex max-w-full flex-col items-center">
      <div className="m-4 flex flex-row items-center justify-center gap-24">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{rawBlogData[0].indexedTitle}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Button
          onClick={async () => {
            if (blogId !== "new-blog") {
              const res = await updateBlog(blogId, blogUpdatedData);
              toast({
                description: res.message,
              });
              router.push("/dashboard");
              router.refresh();
            } else {
              const res = await createBlog(blogUpdatedData);
              toast({
                description: res.message,
              });
              router.push("/dashboard");
              router.refresh();
            }
          }}
        >
          Save
        </Button>

        <Dialog>
          <DialogTrigger className="h-9 rounded-md bg-primary px-4 text-white">
            Delete
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete the
                blog from the DB.
              </DialogDescription>
              <Button
                onClick={async () => {
                  if (blogId) {
                    const res = await deleteBlog(blogId);
                    toast({
                      description: res.message,
                    });
                    router.push("/dashboard");
                    router.refresh();
                  }
                }}
              >
                Sure
              </Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <div className="w-11/12 min-w-[1100px] max-w-[1400px] border-2 border-solid border-purple-700 p-2">
        <FcForwardRefEditor
          markdown={`${rawBlogData[0].article}`}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FcBlogEditor;
