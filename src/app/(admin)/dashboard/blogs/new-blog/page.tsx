import FcBlogEditor from "@/components/pages/BlogEditor";
import { frontMatter } from "@/configs/frontMatter";

export default async function BlogPage() {
  const blogId = "new-blog";
  const fetchBlog = {
    rawBlogData: [
      {
        article: frontMatter.newBlog,
      },
    ],
  };
  const { rawBlogData } = fetchBlog;
  return <FcBlogEditor blogId={blogId} rawBlogData={rawBlogData} />;
}
