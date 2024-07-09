import { readBlog } from "@/lib/server/actions/blog";
import FcBlogEditor from "@/components/pages/BlogEditor";

export default async function BlogPage({
  params,
}: {
  params: { blog: string };
}) {
  const blogId = params.blog;
  const fetchBlog = await readBlog(blogId);

  if (fetchBlog) {
    const { rawBlogData } = fetchBlog;
    if (rawBlogData)
      return <FcBlogEditor blogId={blogId} rawBlogData={rawBlogData} />;
  }
}
